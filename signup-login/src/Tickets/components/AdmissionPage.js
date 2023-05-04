import React, { useEffect } from "react";
import Card from "../UI/Card";
import AdmissionPageFooter from "./AdmissionPageFooter";
import FormContainer from "./FormContainer";
import { useState } from "react";
import AddTicketForm from "../forms/AddTicketForm";
import AdmissionPageCard from "./AdmissionPageCard";
import EventCapacity from "../forms/EventCapacity";

/** Renders the Admission page component with given props
@param {Object} props - Props for Admission page component
@param {function} props.finalSubmission - Function to submit final data
@param {function} props.Ticket - Function to calculate Ticket information
@param {Array} props.finalData - Array of final data
@param {number} props.finalCapacity - Final capacity number
@param {Array} props.soldTicketData - Array of sold ticket data
@returns {JSX.Element} Admission page component JSX element
*/
function AdmissionPage({finalSubmission, Ticket, finalData, finalCapacity, soldTicketData}) {

  /** State to manage whether the form is open or not
@type {[boolean, function]}
*/
  const [formOpen, setFormOpen] = useState(false);
  /** State to manage data of tickets
@type {[Array, function]}
*/
  const [data, setData] = useState(finalData ? finalData : []);
  /** State to manage reverse data of tickets
@type {[Array, function]}
*/
  const [reverseData, setReverseData] = useState([]);
  /** State to manage selected item of ticket
@type {[Object, function]}
*/
  const [selectedItem, setSelectedItem] = useState(null);
  /** State to manage whether selected form is open or not
@type {[boolean, function]}
*/
  const [selectedFormOpen, setSelectedFormOpen] = useState(false);
  /** State to manage whether the mouse is hovered or not
@type {[boolean, function]}
*/
  const [isHovered, setIsHovered] = useState(false);
  /** State to manage whether the event form is open or not
@type {[boolean, function]}
*/
  const [eventForm, setEventForm] = useState(false);
  /** State to manage whether the adder form is open or not
@type {[boolean, function]}
*/
  const [adderForm, setAdderForm] = useState(false); 
  /** State to manage capacity of tickets
@type {[number, function]}
*/
  const [capacity, setCapacity] = useState(finalCapacity ? finalCapacity : 0); 

  /**Calls the Ticket function to calculate Ticket information on the data and capacity*/
  Ticket(data, capacity)

  // useEffect(() => {console.log(capacity)}, [capacity])

 useEffect(() => {
  setReverseData(data.reverse())}, [data])

  /** State to manage whether the dropdown is open or not
@type {[boolean, function]}
*/
  const [isOpen, setIsOpen] = useState(false);

  /**Toggles the dropdown state between open and close*/
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /** Closes the dropdown
@param {Object} event - Event object
*/
  const closeDropdown = (event) => {
      setIsOpen(false);
  };

// useEffect(()=> {console.log(selectedItem)}, [selectedItem])

/** Handler function for next button click to submit the final data*/  
function nextHandler(){
  const finalData={data, capacity}
  finalSubmission(finalData)
}

/** CSS for box shadow
@type {string}
*/
  const boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';


  return (
    <div style={{ overflowY: "auto", marginBottom: '7rem', height: 'max-content' }}>
      <div style={{}}>
      <div
        className="mainButton"
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <button
        id="admission-page-add-ticket"
          onClick={() => {
            setFormOpen(true);
            setSelectedItem(null);
            setAdderForm(true)
          }}
        >
          Add tickets
        </button>
      </div>

      <div>

      {data.map((item, index) => (
        <React.Fragment>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
  <AdmissionPageCard
    data={item}
    soldTicketData={soldTicketData}
    key={index}
    index={index}
    onClick={() => {
      setSelectedFormOpen(!selectedFormOpen);
      setFormOpen(true);
      setAdderForm(true)
      setSelectedItem(item);
    }}
    onDuplicate={(newData) => {
      setSelectedFormOpen(!selectedFormOpen);
      setFormOpen(true);
      setAdderForm(true);
      setSelectedItem(newData);
    }}

    onDelete={(id) => {
      setData((prevData) => {
        const updatedData = prevData.filter(item => item.id !== id);
        return updatedData;
      });
    }}
    
  />








</div>

  
  {formOpen && index === 0 && (
    <div
      style={{
        height: "6rem",
        borderBottom: "1px solid #ccc",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#ededed",
      }}
    ></div>
  )}
  </React.Fragment>
))}

<FormContainer isClosed={formOpen} open={formOpen}>
{formOpen && !eventForm &&

        


            (
            <AddTicketForm
              myData={selectedItem ? selectedItem : null}
              onCancel={() => {
                setFormOpen(false);
              }}
              onSubmit={(newData) => {
                setData((prevData) => {
                  const updatedData = prevData.map(item => {
                    if (item.id === newData.id) {
                      return newData;
                    } else {
                      return item;
                    }
                  });
              
                  if (!prevData.some(item => item.id === newData.id)) {
                    updatedData.push(newData);
                  }
              
                  return updatedData;
                });
              }}
              
            />
            )



          
          }
          </FormContainer>


<FormContainer  isClosed={eventForm} open={eventForm}>
          {eventForm && 

          
          <EventCapacity onSubmitCapacity={(e) => {setCapacity(e)}} onCancel={() => {
            setEventForm(false);
            

          }} />
          
          
        }
        </FormContainer>
          
          

            
          
          {isOpen && 
      <div
          style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
          onClick={closeDropdown}
        ></div>
}
        

        <div
          style={{
            height: "5rem",
            borderBottom: "1px solid #ccc",
            alignItems: "center",
            display: "flex",
            width: '100%',
            minWidth: '30rem'
          }}
          
        >
          <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <p style={{paddingRight: '30%', width: '30rem'}}>
          Event Capacity
          </p>
          <p>0/{capacity}</p>
          <div style={{width: '20rem', textAlign: 'right'}}>
          <button id="admission-page-edit-capacity" style={{outline: 'none', color: 'blue', border: 'none', backgroundColor: 'white'}} onClick={() => {setEventForm(true)}} >Edit Capacity</button>
          </div>
          </div>
          
        </div>
      </div>
      </div>


      <AdmissionPageFooter onClick={nextHandler} />
    </div>
  );
}

export default AdmissionPage;
