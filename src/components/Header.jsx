import React from "react";
import Button from "./Button";
import styles from "./Header.module.css";

function Header({ showModal }) {
  return (
    <>
      <div className={styles.header}>
        <div>Quotely</div>
        <Button showModal={showModal} />
      </div>
    </>
  );
}

export default Header;
