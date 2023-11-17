import React, { useState } from 'react';
import './styles.css';

const VideoInput = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (onChange) {
      onChange(file);
    }
  };

  return (
          <div >
          {/* <div className="file-input-container"> */}
      <div className="file-preview">
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" />}
      </div>
      <label className="file-label">
        Post Your introductory
      </label>
        <input  style={{visibility:'hidden'}}type="file" onChange={handleFileChange} />
    </div>
  );
};

export default VideoInput;
