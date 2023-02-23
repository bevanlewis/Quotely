import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Header showModal={toggleModal}/>
      {showModal && <Modal />}
    </>
  );
}

export default App;
