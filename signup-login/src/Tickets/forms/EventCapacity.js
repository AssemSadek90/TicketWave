import React from "react";
import { useState } from "react";


function EventCapacity({onCancel, onSubmitCapacity}){


    const [capacity, setCapacity] = useState('');
    const [formClosed, setFormClosed] = useState(false);


    function submitHandler(e){
        e.preventDefault();
        onSubmitCapacity(capacity);
        onCancel(true);

    }



    return(

        <form style={{overflowY: 'auto', maxHeight: '100vh', width: '100%', overflowX: 'hidden', paddingRight: '1rem'}} onSubmit={submitHandler} >



<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc'}}>
    <h2>
        Event Capacity
    </h2>
</div>


{/* ____________________________________________________________________________________________________________________ */}

<div>
    <p style={{fontSize: 'small'}}>
    Event capacity is the total number of tickets available for sale at your event. When you set an event capacity, your event will sell out as soon as you sell that number of total tickets. You can adjust your event capacity to prevent overselling.
    </p>
</div>

      <div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Capacity</label>
        <input
          style={{ fontSize: "0.85rem" }}
          type="number"
          id="eventName"
          maxLength="50"
          name="eventName"
          value={capacity}
    onChange={(e) => {
        setCapacity(e.target.value);
    //   setCount(e.target.value.length);
    }}
          required
        />
      </div>





<div className="mainButton"
  style={{
    borderTop: "1px solid #ccc",
    padding: "1rem",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    backgroundColor: "#fff",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5rem'
  }}
>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
    <div type="cancel" onClick={() => {
        setFormClosed(!formClosed)
        onCancel(formClosed);}} style={{height: '3rem', width: '45%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Cancel</div>
    <button type="submit" style={{height: '3rem', width: '45%'}} >Next</button>
    </div>
  
</div>

     


    </form>
    )


};

export default EventCapacity;