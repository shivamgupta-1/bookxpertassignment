import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, title, children, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-box">
            <header className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </header>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
