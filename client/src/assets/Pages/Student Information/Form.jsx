import React, { useState,useMemo } from 'react';
import drona from './Drona.png';
import styles from './style.module.css';
import Select from 'react-select';
import {useLocation, useNavigate} from 'react-router-dom'
import countryList from 'react-select-country-list'
const StudentForm = () => {

  const navigate=useNavigate();
  const studentId=useLocation().state.studentId.id;
  console.log(studentId)
  const options = useMemo(() => countryList().getData(), [])
  const [formData, setFormData] = useState({
    name: "", 
    gender: "", //String
    email: "", //String
    dOb: "",  // number
    mobileNo: "", // number
    postalCode: "", // number
    location: "", // String
    areaOfInterest:"",
  });
  const handleChange = (event, field) => {
    const updatedFormData = { ...formData };
    if (field === 'location') {
      updatedFormData[field] = event.label; 
    } else {
      updatedFormData[field] = event.target.value;
    }
    setFormData(updatedFormData);
  };

  const handleFileChange = (event, field) => {
    const updatedFormData = { ...formData };
    updatedFormData[field] = event.target.files[0];
    setFormData(updatedFormData);
  };
    const save = async () => {
      console.log(formData);
      try {
        const apiUrl = `http://localhost:8080/api/auth/studentRegistration/${studentId}`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(response)
        if (response.ok) {
          
          // Handle success, e.g., redirect to another page
          navigate('/StudentSignin');
        } else {
          // Handle error scenarios based on response status
          console.error('Registration failed:', response.status);
          // Optionally, parse and log the error response
          const errorData = await response.json();
          console.error('Error details:', errorData);
        }
      } catch (error) {
        console.error('An error occurred during registration:', error);
      }
    };   

  return (
    <>
      <img style={{ marginTop: '20px', marginLeft: '23px' }} src={drona} alt="" />

      <div className={styles.formContainer}>
        <h1 className={styles.formHeading}>Student Information</h1>
        <div className={styles.underline} />
        
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(event) => handleChange(event, 'name')}
            />
          </div>
          <div className={styles.formField}>
            <select
              style={{ width: '200px' }}
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(event) => handleChange(event, 'gender')}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(event) => handleChange(event, 'email')}
            />
          </div>
          <div className={styles.formField}>
            <input
              type="date"
              id="dOb"
              placeholder="D.O.B"
              name="dOb"
              value={formData.dOb}
              onChange={(event) => handleChange(event, 'dOb')}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile no."
              name="mobile"
              value={formData.mobileNo}
              onChange={(event) => handleChange(event, 'mobileNo')}
            />
          </div>
          <div className={styles.formField}>
            <input
              id="areaOfInterest"
              name="areaOfInterest"
              placeholder='Area of Intreset'
              value={formData.areaOfInterest}
              onChange={(event) => handleChange(event, 'areaOfInterest')}
            />
             
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <input
              type="number"
              id="postalCode"
              placeholder="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={(event) => handleChange(event, 'postalCode')}
            />
          </div>
          <div className={styles.formField}>
          <Select options={options} value={formData.location.label} onChange={(e)=>handleChange(e,'location')} />
          </div>
        </div>
        
       
        
        <button onClick={save} className={styles.continueButton}>Continue</button>
      </div>
    </>
  );
};

export default StudentForm;
