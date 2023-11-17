import React, { useState } from 'react';
import style from './style.module.css'; 
import { useUser } from '../ContextProvider';
const ProfilePage = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState({
    image:user.image,
    name: user.username,
    email: user.email,
    mobile: user.mobileNo,
    whatsapp: user.whatsapp,
    institute: user.institute,
    city: user.location,
    dob: "2001-01-01",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'dob') { 
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
      if (!isValidDate) { 
        console.error('Invalid date format. Please use yyyy-MM-dd format.');
        return;
      }
    }
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  const handleSaveChanges = () => {  
    const updatedUser = {
      ...user,
      image: profileData.image,
      name: profileData.name,
      email: profileData.email,
      mobile: profileData.mobile,
      whatsapp: profileData.whatsapp,
      institute: profileData.institute,
      city: profileData.city,
      date: profileData.date,
    };
    console.log(updatedUser)
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage); 
      setProfileData({
        ...profileData,
        image: imageUrl,  
      });
    }
  };
  return (
    <div className={style.ProfilePage}>
      <div >
        <div className={style.ProfileImageContainer}>
          <img height={'200px'} width={'200px'}
            src={profileData.image}
            alt="Your Name"
            className={style.ProfileImage}
            />
        <h2 className={style.ProfileName}>{user.name}
          <p style={{fontSize:'18px',fontWeight:'300'}}>
          Update  your photo and personal details
          </p>
        </h2> 
        </div>
         
         <div style={{marginLeft:'45px'}}>
         <label htmlFor="files" className={style.button}>Change Photo</label>
            <input type='file' id='files'  style={{visibility:'hidden',
              marginTop:'150px'}} onChange={handleImageChange} />
         </div>     
         </div>    
      <div className={style.ProfileDetails}>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </div>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.ProfileDetailItem}>
          <label  htmlFor="mobile">Mobile Number:</label>
          <div style={{display:'flex',justifyContent:'center',gap:'20px'}} >
            <div style={{display:'flex',width:'80px',height:'60px',justifyContent:'center',alignItems:'center',
                border:'1px solid #000',borderRadius:'25px'}} >+91</div>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            style={{width:'500px'}}
            value={profileData.mobile}
            onChange={handleChange}
            />
            </div>  
        </div>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="whatsapp">WhatsApp Number:</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={profileData.whatsapp}
            onChange={handleChange}
          />
        </div>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="institute">Institute Name:</label>
          <input
            type="text"
            id="institute"
            name="institute"
            value={profileData.institute}
            onChange={handleChange}
          />
        </div>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={profileData.city}
            onChange={handleChange}
          />
        </div>
        <div className={style.ProfileDetailItem}>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={profileData.dob}
            onChange={handleChange}
          />
        </div>
      </div>
      <button style={{marginTop:'30px'}} className={style.button} onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default ProfilePage;
