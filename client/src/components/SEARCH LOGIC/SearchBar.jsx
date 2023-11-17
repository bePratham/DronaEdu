import React, { useState } from 'react';
import DATA from '../../assets/data.json';
import styles from './style.module.css'
const SearchBar = ({text}) => {
    const style={
            maxHeight: '200px', 
            overflowY: 'auto'
          }
  const data = DATA.Courses;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  };
 
  return (
    <div>
      <input
      className={styles.input}
        type="text"
        placeholder={text}
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm === '' ? (
        <p></p>
      ) : (
        <ul style={style}>
          {filteredData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
