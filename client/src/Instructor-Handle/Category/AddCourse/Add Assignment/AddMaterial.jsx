import style from './style.module.css'
import React, { useState } from 'react';
import cloud from "./cloud.png";
const AddMaterialForm = () => {
 const [formData, setFormData] = useState({
    title: '',
    batch: '',
    session: '',
    description: '',
    dueDate: '',
    points: '',
    file: "",
 });

 const handleChange = (e) => {
  if (e.target.name === "file") {
    setFormData({ ...formData, file: e.target.files[0] });
  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};

 const handleSubmit =async (e) => {
  e.preventDefault();
  console.log(formData)
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('batch', formData.batch);
    formDataToSend.append('session', formData.session);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('dueDate', formData.dueDate);
    formDataToSend.append('points', formData.points);
    formDataToSend.append('file', formData.file); 
    const response = await fetch('/your-server-endpoint', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      console.log('File uploaded successfully!');
      // You can handle success here, e.g., redirect the user or display a success message
    } else {
      console.error('File upload failed.');
      // Handle the error as needed
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

 return (
  <div className={style.Container}>
      <div className={style.Main}>
    <form onSubmit={handleSubmit}>

      <h2 style={{fontWeight:'700',fontSize:'50px'}}>Add Material</h2>    
      <label style={{marginTop:'20px'}}htmlFor="title">Title</label>
      <input className={style.input}   type="text" id="title" name="title" onChange={handleChange} />
      <label htmlFor="batch">Batch</label>
      <input className={style.input}  type="text" id="batch" name="batch" onChange={handleChange} />
      <label htmlFor="session">Session</label>
      <input className={style.input}  type="text" id="session" name="session" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" onChange={handleChange} />

       <div className={style.fileInput}>
        <label htmlFor="file">
          <img src={cloud} alt="Upload File" />
          </label>
          <span>Upload File</span>
          <input
            className={style.input}
            type="file"
            style={{ visibility: 'hidden' }}
            id="file"
            name="file"
            onChange={handleChange}
          />
      </div>
      <button style={{marginLeft:'100px'}} className={style.button}  type="submit">ADD+</button>
    </form>
      </div>

  </div>
 );
};

export default AddMaterialForm;