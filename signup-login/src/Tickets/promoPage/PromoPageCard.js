import React, { useState } from "react";
import Card from "../UI/Card";
import { hover } from "@testing-library/user-event/dist/hover";

/** Renders a promotional card on the promo page.
 * @param {Object} data - The data to render the promotional card.
 * @param {Function} onClick - The function to call when the card is clicked.
 * @param {Function} onDuplicate - The function to call when the card's duplicate button is clicked.
 * @param {Function} onDelete - The function to call when the card's delete button is clicked.
 * @returns {JSX.Element} - A JSX element representing the promotional card.
 */
function PromoPageCard({data, onClick, onDuplicate, onDelete}){

  /** Sets the state of a React component to show or hide it.
@function
@param {boolean} value - Indicates whether the component should be shown or hidden.
@returns {void}
*/
  const [open, setIsOpen] = useState(false)
  /** Sets the state of a React component to indicate whether the mouse is hovering over it or not.
@function
@param {boolean} value - Indicates whether the mouse is hovering over the component or not.
@returns {void}
*/
  const [isHovered, setIsHovered] = useState(false);

/** Toggles the state of a React component's dropdown.
@function
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

      /** Closes the dropdown of a React component.
@function
@param {Event} event - The event object associated with the event that triggered the dropdown to close.
@returns {void}
*/
      const closeDropdown = (event) => {
        // const dropdownContent = document.getElementById("dropdown-content");
        // dropdownContent.style.display = "none";
        setIsOpen(false);
      };
      
    /** The formatted date string representing the end date of an event.
@type {string}
*/
      const formattedDate='When event ends'
      if (data.endDate){
        formattedDate = data.endDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      }

      /** Handles the copying of the current URL to the user's clipboard.
@function
@returns {void}
*/  
    function handleCopyUrl() {
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            console.log('URL copied to clipboard');
          })
          .catch((error) => {
            console.error('Failed to copy URL: ', error);
          });
      }

      /** Handles the duplication of data by creating a duplicate of a given data object.
@function
@returns {void}
@type {Object}
/function duplicateDataHandler() {*/
    function duplicateDataHandler() {
        const duplicatedData = {
          ...data,
          id: Math.floor(Math.random() * 10000000) // Generate a random 7-digit ID
        };
        console.log(duplicatedData)
        onDuplicate(duplicatedData);
        closeDropdown();
      }

      /** Handles the deletion of a data object by its ID.
@function
@returns {void}
*/
      function deleteHandler() {
        onDelete(data.id);
        closeDropdown();
      }

      /** Handles the click event of a React component.
@function
@returns {void}
*/
      function onClickHandler() {
        onClick();
        closeDropdown();
      }

      /** Handles the mouseover event of a React component.
@function
@returns {void}
*/
      const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      /** Handles the mouseleave event of a React component.
@function
@returns {void}
*/
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

return(
    <div style={{
      height: '4rem',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    }}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
       >
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>

        {/* <div onClick={onClick} style={{paddingLeft: '1rem', margin: 0, width: '100%'}}>
  <p style={{margin: '0px', padding: '0px', marginRight: '1rem', fontWeight: 'bold', fontSize: 'large'}}>{data.codeName}</p>
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 'small'}}>
    <p style={{margin: '0px'}} ><span style={{fontSize: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>🟢<span style={{fontSize: 'small', marginLeft: '5px'}}>On Sale</span></span></p>
    <p style={{margin: '0px', marginLeft: '1rem'}}>&#8226; Ends {formattedDate}</p>
  </div>
</div> */}

<div style={{flexDirection: 'row', display: 'flex', paddingLeft: '1rem', fontSize: 'small', width: '100%', alignItems: 'center'}}>
<div style={{width: '30%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p  >{data.codeName}</p>
              <div  style={{marginLeft: '30%', right: 0}}>{data.codeType}</div>
            </div>

            <div  style={{width: '30%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '21%', alignItems: 'center'}}>
                
              <p>$ {data.discount}</p>
              <p style={{marginLeft: '5%'}}>0/{data.isTicketLimit}</p>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <p><span style={{margin: '0px'}} ><span style={{fontSize: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>🟢<span style={{fontSize: 'small', marginLeft: '5px'}}>Active </span></span></span></p>
              </div>
              
            </div>
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


<div style={{ position: 'relative', display: 'inline-block', width: '5%' }}>
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
          <button id="promo-main-edit" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={onClickHandler}>Edit</button>
          {/* <button style={{height: '2rem', border: 'none', outline: 'none'}} onClick={duplicateDataHandler}>Duplicate</button> */}
          <button id="promo-main-delete" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={deleteHandler}>Delete</button>
          <button id="promo-main-share-url" style={{height: '2rem', border: 'none', outline: 'none'}} onClick={handleCopyUrl}>Share Url</button>
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


export default PromoPageCard;