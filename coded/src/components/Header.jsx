import React from "react";
import styles from './planner.module.css';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <>
      <div className={styles.header}> 
        <h1>Notes</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className={styles.save} 
        >
          Toggle
        </button>
      </div>
    </>
  );
};

export default Header;
