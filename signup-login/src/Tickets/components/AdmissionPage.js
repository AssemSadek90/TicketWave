import React, { useEffect } from "react";
import Card from "../UI/Card";
import AdmissionPageFooter from "./AdmissionPageFooter";
import FormContainer from "./FormContainer";
import { useState } from "react";
import AddTicketForm from "../forms/AddTicketForm";
import AdmissionPageCard from "./AdmissionPageCard";
import EventCapacity from "../forms/EventCapacity";

function AdmissionPage({finalSubmission, Ticket, finalData, finalCapacity}) {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState(finalData ? finalData : []);
  const [reverseData, setReverseData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFormOpen, setSelectedFormOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [eventForm, setEventForm] = useState(false);
  const [adderForm, setAdderForm] = useState(false); 
  
 




  const [capacity, setCapacity] = useState(finalCapacity ? finalCapacity : 0); 
  
  Ticket(data, capacity)

  // useEffect(() => {console.log(capacity)}, [capacity])

 useEffect(() => { setReverseData(data.reverse())}, [data])



  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
      setIsOpen(false);
  };

// useEffect(()=> {console.log(selectedItem)}, [selectedItem])


  
function nextHandler(){
  const finalData={data, capacity}
  finalSubmission(finalData)
}

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
            width: '100%'
          }}
          
        >
          <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <p style={{paddingRight: '50%'}}>
          Event Capacity
          </p>
          <p>0/{capacity}</p>
          <button style={{outline: 'none', color: 'blue', border: 'none', backgroundColor: 'white'}} onClick={() => {setEventForm(true)}} >Edit Capacity</button>
          </div>
          
        </div>
      </div>
      </div>


      <AdmissionPageFooter onClick={nextHandler} />
    </div>
  );
}

export default AdmissionPage;
