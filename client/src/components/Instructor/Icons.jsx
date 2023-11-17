import React from 'react';
import mail from '../../assets/icons/gmail.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
const Icons = ({}) => {
  const icons = [
    { img: mail, link: '' },
    { img: facebook, link: '' },
    { img: twitter, link: '=' },
    { img: instagram, link: '' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {icons.map((icon, index) => (
        <a href={icon.link} key={index}>
          <img height={'40px'} width={'40px'} src={icon.img} alt={`Icon ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default Icons;
