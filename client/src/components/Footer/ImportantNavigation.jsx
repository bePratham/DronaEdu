import React from 'react';
import style from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    heading: 'MENU',
    content: ['Home', 'About'],
    links: ['/Home', '/about'],
  },
  {
    heading: 'SERVICES',
    content: ['Explore all classes', 'Book workshops', 'Book leacture'],
    links: [],
  },
  {
    heading: 'SUPPORT',
    content: ['Help', 'Educator policy', 'Learner Privacy'],
    links: ['/help', '', ''],
  },
];

const YourComponent = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
   navigate(`${link}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.CenterContainer}>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className={style.heading}>{item.heading}</h2>
          <ul className={style.list}>
            {item.content.map((text, linkIndex) => (
              <li key={linkIndex}>
                {item.links[linkIndex] ? (
                  <button className={style.button} onClick={() => handleClick(item.links[linkIndex])}>
                    {text}
                  </button>
                ) : (
                  <p>{text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
