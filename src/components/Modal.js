import React from "react";
import styles from "./Modal.module.css";
import "../App.css";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className="modal">
          <div className={styles.modalHeader}>
            <h2 className={styles.heading}>Fill Details</h2>
          </div>
          <div className="modal-content">
            <form>
              {/* <caption>Fill Details</caption> */}
              <label for="username" className={styles.inpurLabel}>Username:</label>
              <br />
              <input
                type="text"
                className={styles.inputFiled}
                id="username"
                name="username"
                required
              />
              <br />
              <br />

              <label for="email" className={styles.inpurLabel}>Email Address:</label>
              <br />
              <input
                type="email"
                className={styles.inputFiled}
                id="email"
                name="password"
                required
              />
              <br />
              <br />

              <label for="phone" className={styles.inpurLabel}>Phone Number:</label>
              <br />
              <input
                type="tel"
                className={styles.inputFiled}
                id="phone"
                name="phone"
                required
              />
              <br />
              <br />

              <label for="dob" className={styles.inpurLabel}>Date of Birth:</label>
              <br />
              <input
                type="date"
                className={styles.inputFiled}
                id="dob"
                name="dob"
                required
              />
              <br />
              <br />

              <button className="submit-button">Submit</button>
            </form>
          </div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
             
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
