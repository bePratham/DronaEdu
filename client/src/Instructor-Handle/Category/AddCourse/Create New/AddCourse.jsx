import React, { useState } from 'react';
import style from './style.module.css';
import FileInput from './FileInput';
const AddBatch = () => {
  const [formState, setFormState] = useState({
    
    title: '',
    category: '',
    difficultyLevel: '',
    ageGroup: '',
    
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (file) => {
    setFile(file);
    console.log("Selected file:", file);
  };

  const handleNext = async () => {
    try {
      const formData = new FormData();
      formData.append('title', 'instructorimage');
      formData.append('image', file);
      const username = "sir";
      const response = await fetch(`http://localhost:8080/api/instructors/addCourse/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const response2=await fetch(`http://localhost:8080/photo/photos/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });
      console.log(response2)
      if(response.status === 200&&response2.status===200){
        console.log("Course has been created Successfully.");
      }
      else if(response.status === 400){
        console.log("Course with this title already exists.");
      }
    
    } 
    catch (error) {
      
      console.error('Error:', error.message);
     
    }
  };
  return (
    <div className={style.Contains}>
      <ul>
        <li>
          <div style={{ display: 'flex'  }}>
            <h3 style={{color:'#185CAC'}}>Essentials</h3>
            <div>
              <h3>Title</h3>
              <input type="text" name="title" placeholder='Title of the Course' onChange={handleInputChange} />
              <h3 style={{marginTop:'20px'}} > Category:</h3>
              <input type="text" placeholder='Category ' name="category" onChange={handleInputChange} />
            </div>
          </div>
        </li>
        <li>
          <div style={{ display: 'flex',justifyContent:'space-between' }}>
            <h3 >Details</h3>
            <div>
              <h3 style={{width:'300px'}}>Difficulty level</h3>
              <input type="text" placeholder='Difficulty level' name="difficultyLevel" onChange={handleInputChange} />
            </div>
            <div>
              <h3 style={{width:'300px'}}>Age groups(years)<font COLOR="#ff0000">* </font></h3>
              <div className={style.ages}>
                <label >
                <input type="radio" name="ageGroup" value="5-8" checked={formState.ageGroup === '5-8'} onChange={handleInputChange} />
                  5-8
                </label>
              
                <label>
                  <input  type="radio"  name="ageGroup"  value="9-11"  checked={formState.ageGroup === '9-12'} onChange={handleInputChange} />
                  9-11
                </label>
                <label>
                  <input  type="radio"  name="ageGroup"  value="12-16" checked={formState.ageGroup === '12-16'} onChange={handleInputChange} />
                 (12-16)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"    value="17-25"   checked={formState.ageGroup === '17-25'} onChange={handleInputChange} />
                  Youngster (17-25)
                </label> 
                <label>
                  <input   type="radio"   name="ageGroup"   value="26-40"   checked={formState.ageGroup === '26-40'} onChange={handleInputChange} />
                  Working (26-40)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"   value="41-60"   checked={formState.ageGroup === '41-60'} onChange={handleInputChange} />
                  HomeMaker (41-60)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"   value=">60"   checked={formState.ageGroup === '>60'} onChange={handleInputChange} />
                  Senior ( {'>'} 600)
                </label>
              </div>
            </div>
          </div>
          <div className={style.Box}>
           
            <FileInput onChange={handleFileChange} />
            
            <div>
              <h2> Upload Thumbnail</h2>
              <p style={{color:'#707070'}}>Upload a good thumbnail
              of the course. </p>
            </div>
            
          </div>
          <div className={style.Box}>
            <div>
            <h2>Importance of this Course?</h2>
            <textarea  style={{ backgroundColor: 'rgb(234, 242, 248)', 
            padding: '10px', height: '130px',width:'700px', overflowY: 'auto' ,
            resize: 'none',maxWidth:'700px'}}
            name="about" id="about" ></textarea>
            </div>
          </div>
          
        </li>
        {/**  last page  */}
        
              <div style={{display:'flex',gap:'30px'}}>
                      <div>
                        <h4>No. of Classes</h4>
                        <input type="number" name="classes" id="classes " />
                      </div>
                      <div>
                        <h4>Duration</h4>
                        <select name="duration" id="duration">
                          <option value="30">30 mins</option>
                          <option value="45">45 mins</option>
                          <option value="60">1 Hour</option>
                        </select>
                      </div>
              </div>
              <div style={{backgroundColor:'rgba(217, 217, 217, 0.25)',display:'flex',
              padding:'10px',justifyContent:'space-around',alignItems:'center',marginTop:'16px'}}>
                    <h2>Class 1 : </h2>
                    <div style={{width:'50%',display:'flex',flexDirection:'column',gap:'10px'}}>
                      <input style={{backgroundColor:'#D9D9D9',width:'100%'}} type="text" placeholder='Project Title'
                       name="projecttitle" id="projecttitle " />
                      <input style={{backgroundColor:'#D9D9D9',width:'100%'}} type="text" placeholder='Concept'
                       name="projecttitle" id="projecttitle " />
                    </div>
              </div>
              <div style={{backgroundColor:'rgba(217, 217, 217, 0.25)',display:'flex',
              padding:'10px',justifyContent:'space-around',alignItems:'center',marginTop:'16px'}}>
                    <h2>Class 2 : </h2>
                    <div style={{width:'50%',display:'flex',flexDirection:'column',gap:'10px'}}>
                      <input style={{backgroundColor:'#D9D9D9',width:'100%'}} type="text" placeholder='Project Title'
                       name="projecttitle" id="projecttitle " />
                      <input style={{backgroundColor:'#D9D9D9',width:'100%'}} type="text" placeholder='Concept'
                       name="projecttitle" id="projecttitle " />
                    </div>
              </div>

       
      </ul>
      
      <div style={{display:'flex',gap:'30px',justifyContent:'center'}}>
         <button style={{color:'white',backgroundColor:'#185CAC'}} onClick={handleNext}>Submit</button> 
         {/* Handle submit as per your choice for next as well as save as draft  */}
        
      </div>
    </div>
  );
};

export default AddBatch;
