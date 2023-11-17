import React, { useState } from 'react';
import style from './style.module.css';
import Button from './Button';
import Card from '../../../../../assets/Cards/BestCourses/Card'
const Page = () => {
  const [selectedButton, setSelectedButton] = useState("All Courses");
  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText === selectedButton ? buttonText : buttonText);
  };

  return (
    <div className={style.Container}>
      <div className={style.courses}>
        <Button
          text={"All Courses"}
          selected={selectedButton === "All Courses"}
          onClick={() => handleButtonClick("All Courses")}
        />
        <Button
          text={"Design"}
          selected={selectedButton === "Design"}
          onClick={() => handleButtonClick("Design")}
        />
        <Button
          text={"Web Development"}
          selected={selectedButton === "Web Development"}
          onClick={() => handleButtonClick("Web Development")}
        />
        <Button
          text={"App Development"}
          selected={selectedButton === "App Development"}
          onClick={() => handleButtonClick("App Development")}
        />
        <Button
          text={"Science"}
          selected={selectedButton === "Science"}
          onClick={() => handleButtonClick("Science")}
        />
        <Button
          text={"Engineering"}
          selected={selectedButton === "Engineering"}
          onClick={() => handleButtonClick("Engineering")}
        />
        <select
          className={style.Button}
          style={{ padding: '10px' }}
          name="sahbkjas"
          id=""
        >
          <option value="Design">Design</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="craft">craft</option>
          <option value="development">development</option>
          <option value="Engneering">Engneering</option>
          <option value="Language">Language</option>
          <option value="Web">Web</option>
        </select>
      </div>
      <Card />
    </div>
  );
}

export default Page;
