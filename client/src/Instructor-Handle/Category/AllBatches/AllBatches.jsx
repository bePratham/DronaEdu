import React from 'react';
import data from './data.json';
import styles from './style.module.css';
import Member from './Member.png'
const Batches = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Assignments</th>
            <th>Study-Material</th>
            <th> <img src={Member} alt="" /></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.assignments}</td>
              <td>{item.studyMaterial}</td>
              <td>{item.member ? 'Yes' : 'No'}</td>
              <td className={styles['action-buttons']}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Batches;
