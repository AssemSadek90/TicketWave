import React from "react";
import { useNavigate } from 'react-router-dom';

/**
  A function provided by the react-router-dom package that allows for programmatic navigation.
  @function
  @name navigate
  */
function AdmissionPageFooter({onClick}) {

  const navigate = useNavigate();

  return (
    <div>
      <div className="mainButton"
        style={{
          borderTop: "1px solid #ccc",
          padding: "1rem",
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "#fff",
          height: '6rem'
        }}
      >
        <button id="admission-page-footer-next" onClick={() => navigate('/publish')}>Next</button>
      </div>
    </div>
  );
}

export default AdmissionPageFooter;