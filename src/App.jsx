import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import styles from "./styles/App.module.css";

const backgroundImageStyles = [
  styles.image001,
  styles.image002,
  styles.image003,
  styles.image004,
  styles.image005,
  styles.image006,
];

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * backgroundImageStyles.length
    );
    const randomImageStyle = backgroundImageStyles[randomIndex];
    setBackgroundImage(randomImageStyle);
    console.log("image");
    console.log(backgroundImage);
  }, [backgroundImage]);

  return (
    <>
      <div className={`${styles.content} ${backgroundImage}`}>
        <div className={styles.overlay}>
          <Header />
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
}

export default App;
