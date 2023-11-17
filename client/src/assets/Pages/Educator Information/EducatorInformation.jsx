import React, { useState } from 'react';
import drona from './Drona.png';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EducatorForm = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const instructorId = location.state;
  
  console.log(instructorId);
  
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    dob: '',
    mobile: '',
    postalCode: '',
    areaOfInterest: '',
    resume: null, // Initialize with null for file input
    location: '',
    document: null, // Initialize with null for file input
    profileLink: '',
    experience: '',
    bio:''
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
  const save = () => {
    console.log(formData);
    navigate('/Instructorsignin')
  };

  return (
    <>
      <img style={{ marginTop: '20px', marginLeft: '23px' }} src={drona} alt="" />

      <div className={styles.formContainer}>
        <h1 className={styles.formHeading}>Educator Information</h1>
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
              id="dob"
              placeholder="D.O.B"
              name="dob"
              value={formData.dob}
              onChange={(event) => handleChange(event, 'dob')}
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
              value={formData.mobile}
              onChange={(event) => handleChange(event, 'mobile')}
            />
          </div>
          <div className={styles.formField}>
            <select
              id="areaOfInterest"
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={(event) => handleChange(event, 'areaOfInterest')}
            >
              <option value="">Area of Interest</option>
            </select>
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
            <input
              type="text"
              id="location"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={(event) => handleChange(event, 'location')}
            />
          </div>
          
        </div>
       <div className={styles.formRow}>
       <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <div className={styles.formField}>
            <input
              type="url"
              id="profileLink"
              placeholder="Profile link (if any)"
              name="profileLink"
              value={formData.profileLink}
              onChange={(event) => handleChange(event, 'profileLink')}
            />
          </div>
          <div className={styles.formField}>
            <input
              type="number"
              id="experience"
              placeholder="Experience (Years)"
              name="experience"
              value={formData.experience}
              onChange={(event) => handleChange(event, 'experience')}
              />
          </div>
        </div>
        <div className={styles.formField}>
        <textarea
              type="text"
              id="bio"
              placeholder="BIO"
              name="bio"
              value={formData.bio}
              onChange={(event) => handleChange(event, 'bio')}
              style={{ height: '100px', width: '100%',borderRadius:'20px' }}
            />
        </div>
       </div>
      
        
        <button onClick={save} className={styles.continueButton}>Continue</button>
      </div>
    </>
  );
};

export default EducatorForm;
