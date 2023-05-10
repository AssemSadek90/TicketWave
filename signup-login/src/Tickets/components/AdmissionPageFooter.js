import React from "react";

/** Renders the footer component for the Admission Page
@param {Function} onClick - A function to be called when the button is clicked
@returns {JSX.Element} - The Admission Page footer component
*/
function AdmissionPageFooter({onClick}) {
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
        <button id="admission-page-footer-next" onClick={onClick} >Next</button>
      </div>
    </div>
  );
}

export default AdmissionPageFooter;
