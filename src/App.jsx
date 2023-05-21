import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import styles from "./styles/App.module.css"
// import image01 from "./images/image01.jpg";

function App() {
  return (
    <>
      <div className={styles.content}>
        <Header />
        <MainContent></MainContent>
      </div>
    </>
  );
}

export default App;
