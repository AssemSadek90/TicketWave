import React, { useState, useEffect } from "react";

const FormContainer = ({ open, isClosed, children }) => {
const [isOpen, setIsOpen] = useState(open);

useEffect(() => {
setIsOpen(open);
}, [open]);

useEffect(() => {
setIsOpen(isClosed);
}, [isClosed]);

return (
<div style={{ position: "relative" }}>
<div
  style={{
    position: "fixed",
    top: 0,
    right: 0,
    // right: isOpen ? "0" : "20rem",
    bottom: 0,
    width: "25rem",
    backgroundColor: "#fff",
    zIndex: "9999",
    transition: "transform 0.3s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transform: isOpen ? "translateX(0rem)" : "translateX(25rem)",
  }}
>






<div style={{ padding: "1rem" }}>
{children}
</div>
</div>
</div>
);
};

export default FormContainer;