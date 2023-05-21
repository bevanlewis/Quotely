import React from "react";
import styles from "../styles/Header.module.css";

function Header({ showModal }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerText}>Quotely</div>
      </div>
    </>
  );
}

export default Header;
