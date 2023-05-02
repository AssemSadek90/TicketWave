import React, { useEffect } from "react";
import { useState } from "react";
import AdmissionPageCard from "../components/AdmissionPageCard";







  

function AddAttendees({finalData}) {
  const [data, setData] = useState(finalData ? finalData : []);
  const [selectedFormOpen, setSelectedFormOpen] = useState(false);

useEffect(() => {console.log(data)}, [data])




const [quantities, setQuantities] = useState(new Array(data.length).fill(0));


const handleQuantityChange = (index, quantity) => {
    console.log(index);
    const sold = quantities.reduce((total, q, i) => {
      return i !== index ? total + q : total;
    }, 0);
    const available = data[index].quantity - sold - quantity;
    if (available >= 0 && quantity >= 0) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = quantity;
        return newQuantities;
      });
      const newData = [...data];
      newData[index] = {
        ...newData[index],
        availableTickets: available,
        soldTickets: quantity,
      };
      setData(newData);
    }
  };
 





  return (
    <div style={{ overflowY: "auto", marginBottom: '7rem', height: 'max-content', color: '#303030' }}>
        <div style={{paddingBottom: '1.5rem', borderBottom: '1px solid #ccc'}}>
           <span style={{fontSize: '2rem', fontWeight: '501'}}> Add Attendees</span> <br />
           <span style={{ fontSize: 'medium'}}> Manually add attendees info for complimentary tickets or offline payments</span>
        </div>


        
      <div style={{}}>

       
       

<div style={{marginTop: '1rem', marginBottom: '1rem', width: '100%'}}>
        Order Type
      <div className="inputContainer" style={{width: '40%'}} >
        {/* <label className="inputLabel">Order Type</label> */}
        <input
          style={{ fontSize: "0.85rem" }}
          type="text"
          id="eventName"
          maxLength="50"
          name="eventName"
        //   value={searchQuery}
        //   onChange={(e) => {setSearchQuery(e.target.value)}} 
          required
        //   placeholder="Enter Name."
        />
      </div>
      *Eventbrite does not charge any fees for manual orders.
      </div>




      <div>




      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
  <div style={{display: 'flex', flexDirection: 'row', borderBottom: '1px solid black'}}>
    <div style={{flex: 2, fontWeight: 'bold'}}>Ticket Type</div>
    <div style={{flex: 1, fontWeight: 'bold'}}>Sold</div>
    <div style={{flex: 1, fontWeight: 'bold'}}>Price</div>
    <div style={{flex: 1, fontWeight: 'bold'}}>Quantity</div>
    <div style={{flex: 1, fontWeight: 'bold'}}>Face value</div>
  </div>
  {data.map((item, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid black",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem"
    }}
  >
    <div style={{ flex: 2 }}>{item.name}</div>
    <div style={{ flex: 1 }}>
      {item.soldTickets ? item.soldTickets : "N/A"}
    </div>
    <div style={{ flex: 1 }}>$ {item.price}</div>
    <div style={{ flex: 1 }}>
      <input
        style={{ width: "50%", fontSize: "0.85rem" }}
        type="number"
        min="0"
        max={item.quantity}
        value={quantities[index]}
        onChange={(e) =>
          handleQuantityChange(
            index,
            parseInt(e.target.value)
          )
        }
        data-index={index}
      />
    </div>
    <div style={{ flex: 1 }}>$ {item.price * quantities[index]}</div>
  </div>
))}

</div>




          
          

            
        

      </div>
      </div>


    </div>
  );
}

export default AddAttendees;







