import React from "react";
import styles from './Button.module.css';

function Button({showModal}) {

  return <div onClick={showModal} className={styles.button}>Button</div>;
}

export default Button;
