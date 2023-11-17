import React, { useState } from 'react';
import './styles.css';

const FileInput = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="file-input-container">
      <div className="file-preview">
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" />}
      </div>
      <label className="file-label">
        Change
        <input  style={{visibility:'hidden'}}type="file" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default FileInput;
