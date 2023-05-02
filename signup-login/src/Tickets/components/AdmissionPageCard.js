import React, { useState } from "react";
import Card from "../UI/Card";
import { hover } from "@testing-library/user-event/dist/hover";


function AdmissionPageCard({data, onClick, onDuplicate, onDelete}){

  const [open, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);



    function toggleDropdown() {
      setIsOpen(!open);
        // const dropdownContent = document.getElementById("dropdown-content");
        // if (dropdownContent.style.display === "none") {
        //   dropdownContent.style.display = "block";
          
        // } else {
        //   dropdownContent.style.display = "none";
        // }
      }


      const closeDropdown = (event) => {
        
        // const dropdownContent = document.getElementById("dropdown-content");
        // dropdownContent.style.display = "none";
        setIsOpen(false);
      };
      

    const formattedDate = data.endDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });


    function duplicateDataHandler() {
        const duplicatedData = {
          ...data,
          id: Math.floor(Math.random() * 10000000) // Generate a random 7-digit ID
        };
        console.log(duplicatedData)
        onDuplicate(duplicatedData);
        closeDropdown();
      }
      

      function deleteHandler() {
        onDelete(data.id);
        closeDropdown();
      }


      function onClickHandler() {
        onClick();
        closeDropdown();
      }
      


      const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

return(
    <div style={{
      height: '5rem',
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
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 'small'}}>
    <p style={{margin: '0px'}} ><span style={{fontSize: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>🟢<span style={{fontSize: 'small', marginLeft: '5px'}}>On Sale</span></span></p>
    <p style={{margin: '0px', marginLeft: '1rem'}}>&#8226; Ends {formattedDate} at {data.endTime}</p>
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