"use client";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="container">
      <button className="open-btn" onClick={openModal}>
        Bir kliklə al
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <span>Bir kliklə al</span>
            <div>

            </div>
            <div className="numberModal">
              <label htmlFor="phone">Nömrə: +994</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <button className="open-btn">Bir kliklə al</button>
          </div>
        </div>
      )}
    </div>
  );
}
