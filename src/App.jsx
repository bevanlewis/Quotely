import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
// import image01 from "./images/image01.jpg";

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Header showModal={toggleModal} />
      <MainContent></MainContent>{showModal && <Modal />}
    </>
  );
}

export default App;
