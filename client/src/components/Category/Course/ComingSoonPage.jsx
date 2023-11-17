import React from 'react';

const ComingSoon = ({ bgColor, illustration }) => {
  const containerStyle = {
    backgroundColor: bgColor,
    height: '500px',
    display: 'flex',
    paddingTop:'15px',
    // alignItems: 'center', 
    justifyContent: 'center', // Horizontally center the content
    position: 'relative',
  };

  const imageStyle = {
    position: 'absolute',
    top: '50%', // Vertically center the image
    left: '50%', // Horizontally center the image
    transform: 'translate(-50%, -50%)', // Correct the image position
    maxWidth: '80%', // Make the image smaller
    maxHeight: '80vh', // Limit the maximum height
    filter: 'brightness(0.7)', 
  };

  const contentStyle = {
    zIndex: 1,
    textAlign: 'center',
    color: '#000',
  };

  const h1Style = {
    fontSize: '36px',
  };

  const pStyle = {
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <img src={illustration} alt="Background Image" style={imageStyle} />
      <div style={contentStyle}>
        <h1 style={h1Style}>Coming Soon</h1>
        <p style={pStyle}>We're working on something awesome! Please check back later.</p>
      </div>
    </div>
  );
};

export default ComingSoon;
