import React, { useState } from "react";
import Card from "../UI/Card";
import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect } from "react";

/** A component that displays a card with event data and provides options to interact with the data
@param {Object} props - The props object
@param {Object} props.data - An object containing data for an event
@param {Function} props.onClick - A function to handle the click event of the card
@param {Function} props.onDuplicate - A function to duplicate an event
@param {Function} props.onDelete - A function to delete an event
@param {Array} props.soldTicketData - An array of objects containing sold ticket data
@returns {JSX.Element} - A card component with event data and interaction options
*/
function AdmissionPageCard({data, onClick, onDuplicate, onDelete, soldTicketData}){

  /** The open state hook that manages a boolean value to represent whether a component is open or not.
@type {OpenStateHook}
*/
  const [open, setIsOpen] = useState(false);
  /** Hook to manage the state of a hovered element
@function
@typedef {boolean} HoveredState
@returns {[HoveredState, function]} An array with two elements:
isHovered: A boolean indicating if the element is being hovered or not.
setIsHovered: A function to set the state of isHovered.
*/
  const [isHovered, setIsHovered] = useState(false);
  /**
@typedef {function} SetSoldData
@param {SoldData} soldData - The sold data to set
@returns {void}
*/
  const [soldData, setSoldData] = useState([]);

  /** Fetches sold ticket data based on the ID of the ticket.
 * @function
 * @name useEffectSoldTicketData
 * @param {Object} data - The data object representing a ticket.
 * @param {Array} soldTicketData - The array of sold ticket data.
 * @returns {undefined}
 */
  useEffect(() => {
    const reqData = soldTicketData?.find((item) => item.id === data.id);
    setSoldData(reqData);
    // console.log("Sold Data", reqData)
}, [data, soldTicketData])

/** Toggle the dropdown visibility state.
@function
@name toggleDropdown
@returns {void}
*/
    function toggleDropdown() {
      setIsOpen(!open);
        // const dropdownContent = document.getElementById("dropdown-content");
        // if (dropdownContent.style.display === "none") {
        //   dropdownContent.style.display = "block";
        // } else {
        //   dropdownContent.style.display = "none";
        // }
      }

      /** Closes the dropdown by setting the isOpen state to false.
@param {Object} event - The event object.
*/
      const closeDropdown = (event) => {
        // const dropdownContent = document.getElementById("dropdown-content");
        // dropdownContent.style.display = "none";
        setIsOpen(false);
      };
   
      /** Formats the date from data.endDate to a string in the format "Month Day, Year".
@type {string|undefined} The formatted date string or undefined if data.endDate is falsy.
*/
    const formattedDate = data.endDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    /** Duplicates data by creating a copy of the current data with a new random 7-digit ID.
@function
@returns {void}
*/
    function duplicateDataHandler() {
        const duplicatedData = {
          ...data,
          id: Math.floor(Math.random() * 10000000) // Generate a random 7-digit ID
        };
        // console.log(duplicatedData)
        onDuplicate(duplicatedData);
        closeDropdown();
      }
      
     /** Handles deleting the data and invoking the onDelete callback.
 * @function
 * @returns {void}
 */
      function deleteHandler() {
        onDelete(data.id);
        closeDropdown();
      }
      /**Handles the click event and invokes the onClick callback.
 * @function
 * @returns {void}
 */
      function onClickHandler() {
        onClick();
        closeDropdown();
      }

    /** A function that sets the state to indicate that the mouse is hovering over an element.
@function
@name handleMouseOver
@returns {void}
*/
      const handleMouseOver = () => {
        setIsHovered(true);
      };
      
      /** A function that sets the state to indicate that the mouse is no longer hovering over an element.
@function
@name handleMouseLeave
@returns {void}
*/
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

return(
    <div style={{
      height: '5rem',
      minWidth: '30rem',
    borderBottom: '1px solid #ccc',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    transition: 'box-shadow 0.5s ease, margin 0.5s ease',
    boxShadow: isHovered ? '-1px 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
    marginLeft: isHovered ? '1px' : '0',
    }}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
       >
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
        <div onClick={onClick} style={{paddingLeft: '1rem', margin: 0, width: '100%'}}>
  <p style={{margin: '0px', padding: '0px', marginRight: '1rem', fontWeight: 'bold', fontSize: 'large'}}>{data.name}</p>
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 'small', width: '20rem'}}>
    <p style={{margin: '0px'}} ><span style={{fontSize: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>🟢<span style={{fontSize: 'small', marginLeft: '5px'}}>On Sale</span></span></p>
    <p style={{margin: '0px', marginLeft: '1rem'}}>&#8226; Ends {formattedDate} at {data.endTime}</p>
  </div>
</div>



<div style={{marginRight: '5rem', width: '6rem'}}>
  {soldData?.soldTickets }/{ data.quantity}
</div>


<div style={{marginRight: '5rem'}}>
  ${data.price}
</div>


{open && 
      <div
          style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
          onClick={closeDropdown}
        ></div>
}



{/* <div style={{position: 'relative', display: 'inline-block', zIndex: 20}}>
  <button style={{backgroundColor: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer'}} onClick={toggleDropdown}>...{data.name}</button>
  <div style={{display: 'none', position: 'absolute', zIndex: 25, top: '25px', right: 0, backgroundColor: '#f9f9f9', minWidth: '120px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}} id="dropdown-content">
    <div onClick={onClickHandler} style={{display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#333'}}>Edit</div>
    <div onClick={duplicateDataHandler} style={{display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#333'}}>Duplicate</div>
    <div onClick={deleteHandler} style={{display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#333'}}>Delete</div>
  </div>
</div> */}




<div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: 'small',
          cursor: 'pointer',
          padding: '5px 20px',
          border: 'none',
          outline: 'none'
        }}
        onClick={toggleDropdown}
      >...
        {/* <option><button onClick={onClickHandler}>Edit</button></option>
        <option><button onClick={duplicateDataHandler}>Duplicate</button></option>
        <option><button onClick={deleteHandler}>Delete</button></option> */}
      </div>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '5px',
            backgroundColor: '#f9f9f9',
            minWidth: '160px',
            boxShadow: '0px 3px 3px 0px rgba(0,0,0,0.2)',
            zIndex: '1',
            display: 'flex',
            flexDirection: 'column',
            height: '6rem'
          }}
        >
          <button id="admission-page-card-edit" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={onClickHandler}>Edit</button>
          <button id="admission-page-card-duplicate" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={duplicateDataHandler}>Duplicate</button>
          <button id="admission-page-card-delete" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={deleteHandler}>Delete</button>
        </div>
      )}
    </div>


{/* <button style={{backgroundColor: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer'}} onClick={toggleDropdown}>...{data.name}</button>
{open && 
<div>
  <button onClick={onClickHandler} >Edit</button>
<button onClick={duplicateDataHandler} >Duplicate</button>
<button onClick={deleteHandler} >Delete</button>
</div>
} */}


        </div>
    </div>
)
}



export default AdmissionPageCard;