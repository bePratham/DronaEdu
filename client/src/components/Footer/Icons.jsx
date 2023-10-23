import React from 'react';
import style from './Footer.module.css';
import mail from '../../assets/icons/gmail.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';

const Icons = () => {
  const icons = [
    { img: mail, link: '' },
    { img: facebook, link: 'https://www.facebook.com/profile.php?id=61552412338316' },
    { img: twitter, link: 'https://twitter.com/_DronaEdu' },
    { img: instagram, link: 'https://www.instagram.com/_.drona/?igshid=YTQwZjQ0NmI0OA%3D%3D' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {icons.map((icon, index) => (
        <a href={icon.link} key={index}>
          <img src={icon.img} alt={`Icon ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default Icons;
