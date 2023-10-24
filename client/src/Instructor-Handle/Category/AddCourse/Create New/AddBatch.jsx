import React, { useState } from 'react';
import style from './style.module.css';
const AddBatch = () => {
  const [formState, setFormState] = useState({
    title: '',
    category: '',
    difficultyLevel: '',
    ageGroups: [],
  });
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const handleAgeGroupChange = (event) => {
    const selectedAge = event.target.value;
    const updatedAgeGroups = formState.ageGroups.includes(selectedAge)
      ? formState.ageGroups.filter((age) => age !== selectedAge)
      : [...formState.ageGroups, selectedAge];

        setFormState({
        ...formState,
        ageGroups: updatedAgeGroups,
        });
        
    };
  return (
    <form className={style.Contains}>
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
                  <input type="radio"  name="ageGroup" value="5-8"  checked={formState.ageGroups.includes('5-8')}  onChange={handleAgeGroupChange} />
                  5-8
                </label>
              
                <label>
                  <input  type="radio"  name="ageGroup"  value="9-11"  checked={formState.ageGroups.includes('9-12')}  onChange={handleAgeGroupChange} />
                  9-11
                </label>
                <label>
                  <input  type="radio"  name="ageGroup"  value="12-16" checked={formState.ageGroups.includes('12-16')}  onChange={handleAgeGroupChange}/>
                 (12-16)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"    value="17-25"   checked={formState.ageGroups.includes('17-25')}   onChange={handleAgeGroupChange}/>
                  Youngster (17-25)
                </label> 
                <label>
                  <input   type="radio"   name="ageGroup"   value="26-40"   checked={formState.ageGroups.includes('26-40')}   onChange={handleAgeGroupChange}/>
                  Working (26-40)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"   value="41-60"   checked={formState.ageGroups.includes('41-60')}   onChange={handleAgeGroupChange}/>
                  HomeMaker (41-60)
                </label>
                <label>
                  <input   type="radio"   name="ageGroup"   value=">60"   checked={formState.ageGroups.includes('>60')}   onChange={handleAgeGroupChange}/>
                  Senior ( {'>'} 600)
                </label>
              </div>
            </div>
          </div>
        </li>
        <li>
            <h3>
            Breakout
            </h3>
        </li>
      </ul>
      <div style={{display:'flex',gap:'30px',justifyContent:'center'}}>
         <button style={{color:'white',backgroundColor:'#185CAC'}} type="submit">Next</button> 
         {/* Handle submit as per your choice for next as well as save as draft  */}
         <button type="submit">Save as draft</button>
      </div>
    </form>
  );
};

export default AddBatch;
