import React, { useState, useEffect } from "react";

/** A container component that wraps a form and allows for opening and closing.
@param {boolean} open - Determines if the form should be open or closed.
@param {boolean} isClosed - Determines if the form should be closed or open.
@param {ReactNode} children - The child components to be rendered within the container.
*/
const FormContainer = ({ open, isClosed, children }) => {
 /**
@typedef {Object} FormContainerState
@property {boolean} isOpen - Whether the form container is open or not.
*/ 
const [isOpen, setIsOpen] = useState(open);

/** Set the state of the modal container to open or close.
@param {boolean} open - Indicates if the modal is open or not.
*/
useEffect(() => {
setIsOpen(open);
}, [open]);

/** useEffect that sets the state of isOpen based on the isClosed prop
@param {boolean} isClosed - prop indicating if the container is closed
*/
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