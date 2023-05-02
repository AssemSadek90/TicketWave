import React, { useState, useEffect } from "react";
import "./FormContainer.css";
import AddTicketForm from "../forms/AddTicketForm";

const FormContainer = ({open, isClosed, children}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    setIsOpen(isClosed);
  }, [isClosed]);

  return (
    <div className="overlay-container">
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className="overlay-content">
          {/* <button className="overlay-close" onClick={handleClose}>
            &times;
          </button> */}

          {children}
          {/* <AddTicketForm onCancel={handleClose} /> */}

          


        </div>
      </div>
    </div>
  );
};

export default FormContainer;
