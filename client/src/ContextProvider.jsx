// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState(localStorage.getItem('userId'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const student = localStorage.getItem('studentLoggedIn') === 'true';
  const instructor = localStorage.getItem('instructorLoggedIn') === 'true';
  const getUserDataFromAPI = async (userId) => {

    try {
      let response;
      if (student) {
        response = await fetch(`http://localhost:8080/api/auth/student/getbyID/${userId}`);
      } else if (instructor) {
        response = await fetch(`http://localhost:8080/api/auth/instructor/getbyID/${userId}`);
      }
    
      if (response.ok) {
        if(student){
        const userData = await response.json();
        const setData=(userData['Student Details']);
        setUser(setData);
      }else{
        const userData = await response.json();
        const setData=(userData['Instructor Details']);
        setUser(setData);
      }
      } else {
        console.error(`Failed to fetch user data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    if (id) {
      getUserDataFromAPI(id);
    }
  }, [id]);

  const loginDetail = (userId) => {
    setId(userId);
  };

  const logout = () => {
    setUser(null);
    setId(null);
    localStorage.setItem('userId', '');
    localStorage.setItem('studentLoggedIn', 'false');
    localStorage.setItem('instructorLoggedIn', 'false');
  };
  if (loading&&(student||instructor)) {
    return <p>Loading...</p>; 
  }
  return (
    <UserContext.Provider value={{ user, loginDetail, logout, id }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
