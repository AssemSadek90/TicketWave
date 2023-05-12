import React, { useEffect } from "react";
import { useState } from "react";
import "../Tickets.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import server from '../../server';

/** A form component for adding tickets
@param {Function} onCancel - Function to handle canceling the form
@param {Function} onSubmit - Function to handle submitting the form
@param {Array} myData - An array of data for the tickets
@returns {JSX.Element} - The AddTicketForm component
*/
function AddTicketForm({onCancel, onSubmit, myData}) {

// console.log(myData);

/** State hook to manage the ID of the ticket.
@type {[number, function]}
*/
const [id, setId] = useState(myData ? myData.id : Math.floor(Math.random() * 10000000));
/** State hook to manage the name of the ticket.
@type {[string, function]}
*/
const [name, setName] = useState(myData ? myData.name : "");
/** State hook to manage the quantity of the ticket.
@type {[string, function]}
*/
const [quantity, setQuantity] = useState(myData ? myData.quantity : '');
/** State hook to manage the count of the ticket.
@type {[number, function]}
*/
const [count, setCount] = useState(myData ? myData.count : 0);
/** State hook to manage the price of the ticket.
@type {[string, function]}
*/
const [price, setPrice] = useState(myData ? myData.price : '');
/** State hook to manage the navigation button for the ticket.
@type {[string, function]}
*/
const [navButton, setNavButton] = useState('Paid');



/** State hook for the start date.
@type {[Date, function]}
@type {Date|null}
@param {Date|null} [myData.startDate=null] The initial start date value.
@return {[Date, function]} A tuple containing the current start date and a function to update it.
*/
const [startDate, setStartDate] = useState(myData ? myData.startDate : null);
/** State hook for start time of an event
@typedef {Object} StartTimeState
@property {string} startTime - the start time of the event
@property {function} setStartime - a function to update the start time of the event
@type {[StartTimeState]}
*/
const [startTime, setStartTime] = useState(myData ? myData.startTime : null);
/** Represents the end date of an event.
@typedef {Date} EndDate
@typedef {Date|null} EndDateState
@type {EndDateState}
*/
const [endDate, setEndDate]  = useState(myData ? myData.endDate : null);
/** State hook for end time of an event
@typedef {Object} EndTimeState
@property {string} endTime - the end time of the event
@property {function} setEndime - a function to update the end time of the event
@type {[EndTimeState]}
*/
const [endTime, setEndime] = useState(myData ? myData.endTime : null);


/** This function initializes and sets the initial state for various data variables based on the provided myData object.
@param {Object} myData - An object containing data for initializing various state variables.
@param {string|null} myData.availability - A string representing the availability of a product.
@param {boolean} myData.advancedSettings - A boolean value indicating whether advanced settings are enabled or not.
@param {boolean|null} myData.showTicketSale - A boolean value indicating whether to show ticket sale information or not.
@param {string|null} myData.description - A string representing the description of a product.
@returns {void} This function doesn't return anything but initializes and sets the state for various data variables.
/ function initializeDataState(myData) {/*

/** The current availability of the product.
@type {string|null}
*/
const [availability, setAvailability] = useState(myData ? myData.availability : null);
/** A boolean value indicating whether advanced settings are enabled or not.
@type {boolean}
*/
const [advancedSettings, setAdvancedSettings] = useState(myData ? myData.advancedSettings : false);
/** A boolean value indicating whether to show ticket sale information or not.
@type {boolean|null}
*/
const [showTicketSale, setShowTicketSale] = useState(myData ? myData.showTicketSale : null);
/** A string representing the description of the product.
@type {string|null}
*/
const [description, setDescription] = useState(myData ? myData.description : null);

/**This function initializes and sets the initial state for various data variables based on the provided myData object.
@param {Object} myData - An object containing data for initializing various state variables.
@param {number|null} myData.descriptionCount - A number representing the count of the product description.
@param {boolean|null} myData.Visibility - A boolean value indicating the visibility status of the product.
@param {Date|null} myData.startShowingDate - A Date object representing the start showing date of the product.
@param {Date|null} myData.startShowingTime - A Date object representing the start showing time of the product.
@param {Date|null} myData.endShowingDate - A Date object representing the end showing date of the product.
@returns {void} This function doesn't return anything but initializes and sets the state for various data variables.
*/

/** The count of the product description.
@type {number|null}
*/
const [descriptionCount, setDescriptionCount] = useState(myData ? myData.descriptionCount : null);
/** A boolean value indicating the visibility status of the product.
@type {boolean|null}
*/
const [Visibility, setVisibility] = useState(myData ? myData.Visibility : null);
/** A Date object representing the start showing date of the product.
@type {Date|null}
*/
const [startShowingDate, setStartShowingDate] = useState(myData ? myData.startShowingDate : null);
/** A Date object representing the start showing time of the product.
@type {Date|null}
*/
const [startShowingTime, setStartShowingTime] = useState(myData ? myData.startShowingTime : null);
/** A Date object representing the end showing date of the product.
@type {Date|null}
*/
const [endShowingDate, setEndShowingDate] = useState(myData ? myData.endShowingDate : null);

/**
@param {Object} myData - An object containing data for initializing various state variables.
@param {number|null} myData.endShowingTime - A number representing the end showing time of the product.
@param {number|null} myData.minimumQuantity - A number representing the minimum quantity of the product.
@param {number|null} myData.maximumQuantity - A number representing the maximum quantity of the product.
@param {string|null} myData.qtyError - A string representing the error message related to quantity validation.
@param {string|null} myData.salesChannel - A string representing the sales channel of the product.
@param {boolean|null} myData.eTicket - A boolean value indicating whether the product is an eTicket or not.
@param {boolean|null} myData.willCall - A boolean value indicating whether the product can be picked up or not.
 */
/** A number representing the end showing time of the product.
@type {number|null}
*/
const [endShowingTime, setEndShowingTime] = useState(myData ? myData.endShowingTime : null);
/** A number representing the minimum quantity of the product.
@type {number|null}
*/
const [minimumQuantity, setMinimumQuantity] = useState(myData ? myData.minimumQuantity : null);
/** A number representing the maximum quantity of the product.
@type {number|null}
*/
const [maximumQuantity, setMaximumQuantity] = useState(myData ? myData.maximumQuantity : null);
/** A string representing the error message related to quantity validation.
@type {string|null}
*/
const [qtyError, setQtyError] = useState(null);
/** A string representing the sales channel of the product.
@type {string|null}
*/
const [salesChannel, setSalesChannel] = useState(myData ? myData.salesChannel : null);
/** A boolean value indicating whether the product is an eTicket or not.
@type {boolean|null}
*/
const [eTicket, setETicket] = useState(myData ? myData.eTicket : null);
/** A boolean value indicating whether the product can be picked up or not.
@type {boolean|null}
*/
const [willCall, setWillCall] = useState(myData ? myData.willCall : null);



  // const [id, setId] = useState(Math.floor(Math.random() * 10000000));
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState('');
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState('');
  // const [navButton, setNavButton] = useState('Paid')
  // const [startDate, setStartDate] = useState(null);
  // const [startTime, setStartTime] = useState(null);
  // const [endDate, setEndDate]  = useState(null);
  // const [endTime, setEndime] = useState(null);
  // const [availability, setAvailability] = useState(null);
  // const [advancedSettings, setAdvancedSettings] = useState(false);
  // const [showTicketSale, setShowTicketSale] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [descriptionCount, setDescriptionCount] = useState(null);
  // const [Visibility, setVisibility] = useState(null)
  // const [startShowingDate, setStartShowingDate] = useState(null);
  // const [startShowingTime, setStartShowingTime] = useState(null);
  // const [endShowingDate, setEndShowingDate] = useState(null);
  // const [endShowingTime, setEndShowingTime] = useState(null);
  // const [minimumQuantity, setMinimumQuantity] = useState(null);
  // const [maximumQuantity, setMaximumQuantity] = useState(null);
  // const [qtyError, setQtyError] = useState(null);
  // const [salesChannel, setSalesChannel] = useState(null);
  // const [eTicket, setETicket] = useState(null);
  // const [willCall, setWillCall] = useState(null);

/** A boolean value indicating whether the form is closed or not.
@type {boolean}
*/
const [formClosed, setFormClosed] = useState(false);

/**This function sets the availability variable to 'Date & Time' using useEffect.
@returns {void} This function doesn't return anything but sets the availability variable to 'Date & Time' using useEffect.
*/
useEffect(() => {setAvailability('Date & Time')},[])

/** This function updates the start and end dates and times based on the availability state variable using useEffect.
@returns {void} This function doesn't return anything but updates the start and end dates and times based on the availability state variable using useEffect.
/ function updateDatesAndTimes() { /*
This useEffect updates the start and end dates and times based on the availability state variable after every re-render. */
useEffect(() => {
  if (availability === 'Date & Time') {
    setStartDate(new Date());
    setStartTime("12 AM");
    setEndDate(new Date());
    setEndime('12 AM');
  }
  else {
    setStartDate(null);
    setStartTime(null);
    setEndDate(null);
    setEndime(null);
    }
  
}, [availability]);

/**This function updates the state variables based on the advancedSettings state variable using useEffect.
@returns {void} This function doesn't return anything but updates the state variables based on the advancedSettings state variable using useEffect.
/function updateAdvancedSettings() { /*
This useEffect updates the state variables based on the advancedSettings state variable after every re-render. */
useEffect(() => {
  if (advancedSettings) {
    setShowTicketSale(false);
    setDescription("");
    setDescriptionCount(0);
    setVisibility("Visible");
    setStartShowingDate(null);
    setStartShowingTime(null);
    setMinimumQuantity(null);
    setMaximumQuantity(null);
    setSalesChannel('Everywhere');
    setETicket(false);
    setWillCall(false);
  }
}, [advancedSettings]);

/**This function updates the start and end showing dates based on the Visibility state variable using useEffect.
@returns {void} This function doesn't return anything but updates the start and end showing dates based on the Visibility state variable using useEffect.
/function updateShowingDates() {*/
useEffect(() => {
  if (Visibility === 'Custom Schedule') {
    setStartShowingDate(new Date());
    setEndShowingDate(new Date());
  }
}, [Visibility]);


/** Function to handle form submission.
@param {Object} event - The form submission event.
@returns {void}
*/
function submitHandler(event){
  event.preventDefault();

  const data = {
    id: id,
    name: name,
    capacity: quantity,
    count: count,
    price: price,
    SalesStart: startDate,
    StartTime: startTime,
    SalesEnd: endDate,
    EndTime: endTime,
    availability: availability,
    advancedSettings: advancedSettings,
    showTicketSale: showTicketSale,
    description: description,
    descriptionCount: descriptionCount,
    Visibility: Visibility,
    startShowingDate: startShowingDate,
    startShowingTime: startShowingTime,
    endShowingDate: endShowingDate,
    endShowingTime: endShowingTime,
    minimumQuantity: minimumQuantity,
    TicketLimit: maximumQuantity,
    salesChannel: salesChannel,
    eTicket: eTicket,
    willCall: willCall,
    chosenQuantity: 0
  }
  onSubmit(data);

  // Reset form values
  setName('');
  setQuantity('');
  setCount(0);
  setPrice('');
  setStartDate(new Date());
  setStartTime('12 AM');
  setEndDate(new Date());
  setEndime('12 AM');
  setAvailability('Date & Time');

  setAdvancedSettings(false);
  setShowTicketSale(null);
  setDescription(null);
  setDescriptionCount(null);
  setVisibility(null);
  setStartShowingDate(null);
  setStartShowingTime(null);
  setMinimumQuantity(null);
  setMaximumQuantity(null);
  setSalesChannel(null);
  setETicket(null);
  setWillCall(null);
  setId(Math.floor(Math.random() * 10000000));

  onCancel(true);
  console.log(data);
  handleTicket(data);

}

const handleTicket = (data) => {

  const accessToken = localStorage.getItem("accessToken")
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${accessToken}`,
    },
  };
  

  server
    // .post('/events/create/', data, requestOptions)
    .post('/tickets/', JSON.stringify(data), requestOptions)
    .then((response) => {
      console.log(response.data);
    })

    .catch((error) => console.log(error));
};

  return (
    <form style={{overflowY: 'auto', maxHeight: '100vh', width: '100%', overflowX: 'hidden', paddingRight: '1rem'}} onSubmit={submitHandler} >



<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc'}}>
    <h2>
        Add Tickets
    </h2>
    <p>
        Learn more
    </p>
</div>




{/* _______________________________________________________________________________________________________________________________ */}
        <div className="formButtons" style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

        


              <button
                id="add-ticket-form-paid"
                type="button"
                className={
                    navButton === "Paid"
                    ? 'active'
                    : 'locationButton'
                }
                onClick={() => {
                    setNavButton("Paid");
                }}
              >
                Paid
              </button>

              <button
                id="add-ticket-form-free"
                type="button"
                className={
                    navButton === "Free"
                    ? 'active'
                    : 'locationButton'
                }
              >
                Free
              </button>

              <button
                id="add-ticket-form-donation"
                type="button"
                className={
                    navButton === "Donation"
                    ? 'active'
                    : 'locationButton'
                }
              >
                Donation
              </button>



              </div>
{/* ____________________________________________________________________________________________________________________ */}

      <div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Name</label>
        <input
          id="add-ticket-form-name"
          style={{ fontSize: "0.85rem" }}
          type="text"
          maxLength="50"
          name="eventName"
          value={name}
    onChange={(e) => {
      setName(e.target.value);
      setCount(e.target.value.length);
    }}
          required
          placeholder="Ticket Name."
        />
      </div>

      <div
            style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-end'
            }}
          >
            <p style={{ color: '#8d8d8d', fontSize: 'small'}}>{count}/50</p>
          </div>


{/* _______________________________________________________________________________________________________________________________ */}
      <div className="inputContainer">
        <label className="inputLabel">Available Quantity</label>
        <input
          id="add-ticket-form-quantity"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          required
        />
      </div>



      {/* ____________________________________________________________________________________________________________________ */}


      <div className="inputContainer" style={{display: 'flex', flexDirection: 'row', maxHeight: '3rem', alignItems:'center', marginTop: '1rem'}}>
        
            <p style={{fontSize: 'large', color: '#ccc', marginRight: '1rem'}}>
                $
            </p>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>


        
        <label className="inputLabel">Price</label>
        <input
          id="add-ticket-form-price"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
        </div>
      </div>






      {/* _______________________________________________________________________________________________________________________________ */}



      <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                      marginTop: '1rem'
                    }}
                  >
                    <label className="inputLabel">When are tickets available?</label>
                    <select
                      id="add-ticket-form-availability"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none', fontSize: 'small' }}
                      onChange={(a) => setAvailability(a.target.value)}
                      name="availability"
                      value={availability}
                    >
                      <option value="Date & Time">Date & Time</option>
                      <option value="When sale ends for...">When sale ends for...</option>
                    </select>
                  </div>






{
    availability === 'Date & Time' && 

    <React.Fragment>
         <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Sales start</label>
                    <DatePicker
                      id="add-ticket-form-sales-start"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start Time</label>
                    <select
                      id="add-ticket-form-start-time"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none' }}
                      onChange={(date) => setStartTime(date.target.value)}
                      name="startTime"
                      value={startTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Sales end</label>
                    <DatePicker
                      id="add-ticket-form-sales-end"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">End Time</label>
                    <select
                      id="add-ticket-form-end-time"
                      onChange={(date) => setEndime(date.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={endTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

    </React.Fragment>
}



     {/* ____________________________________________________________________________________________________________________ */}


                    <div
                    id="advanced-settings"
                    onClick={() => setAdvancedSettings(!advancedSettings)}
                    // className="inputContainer"
                    style={{
                        paddingBottom: '1rem',
                        borderBottom: '1px solid #8d8d8d',
                      marginBottom: "2rem",
                      
                      width: "100%",
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <label className="inputLabel" style={{color: 'black', cursor: 'pointer'}} >Advanced Settings</label>
                    

                    
                    </div>
                    <div 
                    style={{marginBottom: '8rem'}}>


                      


                    
                    {
                        advancedSettings && 
                        
                    <React.Fragment id="add-ticket-form-advanced-settings">


<div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-show-ticket-sale"
                    onClick={() => {setShowTicketSale(!showTicketSale)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="displayEndTime"
                    >
                      Show ticket sale end dates and sale status at checkout
                    </label>
                  </div>
                </div>




{/* _______________________________________________________________________________________________________________________________ */}


<div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Description</label>
        <textarea
          id="add-ticket-form-description"
          style={{ fontSize: "0.85rem" }}
          type="text"
          maxLength="2500"
          name="description"
          value={description}
    onChange={(e) => {
      setDescription(e.target.value);
      setDescriptionCount(e.target.value.length);
    }}
          placeholder="Tell attendees more about this ticket."
        />
      </div>

      <div
            style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-end'
            }}
          >
            <p style={{ color: '#8d8d8d', fontSize: 'small'}}>{descriptionCount}/2500</p>
          </div>



          {/* _______________________________________________________________________________________________________________________________ */}



          <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Visibility</label>
                    <select
                      id="add-ticket-form-Visibility"
                      onChange={(e) => setVisibility(e.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={Visibility}
                    >
                      <option value="Visible">Visible</option>
                      <option value="Hidden">Hidden</option>
                      <option value="Hidden when not on sale">Hidden when not on sale</option>
                      <option value="Custom Schedule">Custom Schedule</option>
                    </select>
                  </div>

                  <div>
                  
                    {
                        Visibility === 'Custom Schedule' && 

                    <React.Fragment id="add-ticket-form-custom-schedule">
                        <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start showing on</label>
                    <DatePicker
                      id="add-ticket-form-custom-st-date"
                      selected={startShowingDate}
                      onChange={(date) => setStartShowingDate(date)}
                      
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Start Time</label>
                    <select
                      id="add-ticket-form-custom-st-time"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none' }}
                      onChange={(date) => setStartShowingTime(date.target.value)}
                      name="startTime"
                      value={startShowingTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">Stop Showing on</label>
                    <DatePicker
                      id="add-ticket-form-custom-stop-date"
                      selected={endShowingDate}
                      onChange={(date) => setEndShowingDate(date)}
                    />
                  </div>

                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                  >
                    <label className="inputLabel">End Time</label>
                    <select
                      id="add-ticket-form-custom-end-time"
                      onChange={(date) => setEndShowingTime(date.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={endShowingTime}
                    >
                      <option value="12 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8 PM">8:00 AM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>
                </React.Fragment>
                    }
                  </div>

                  <p>Tickets per order</p>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                  <div className="inputContainer" style={{marginRight: '10%', width:'45%'}}>
        <label className="inputLabel">Minimum quantity</label>
        <input
          id="add-ticket-form-minimum"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={minimumQuantity}
          onChange={(e) => {
            setMinimumQuantity(e.target.value);
          }}
        />
      </div>


      <div className="inputContainer" style={{width:'45%'}}>
        <label className="inputLabel">Maximum quantity</label>
        <input
          id="add-ticket-form-maximum"
          style={{ fontSize: "0.85rem" }}
          type="number"
          name="quantity"
          value={maximumQuantity}
          onChange={(e) => {
            setMaximumQuantity(e.target.value);
            if (minimumQuantity > e.target.value){setQtyError(true)}
            else setQtyError(false);
          }}
        />
      </div>
     

                  </div>

                  {qtyError && <p>Min must be less than or equal to max.</p>}





                  {/* _______________________________________________________________________________________________________________________________ */}



                  <div
                    className="inputContainer"
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                      marginTop: '1rem'
                    }}
                  >
                    <label className="inputLabel">Sales Channel</label>
                    <select
                      id="add-ticket-form-channel"
                      onChange={(e) => setSalesChannel(e.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
                      value={salesChannel}
                    >
                      <option value="Everywhere">Everywhere</option>
                      <option value="Online only">Online only</option>
                      <option value="At the door only">At the door only</option>
                    </select>
                  </div>



                  <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-eticket"
                    onClick={() => {setETicket(!eTicket)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="eTicket"
                    >
                      eTicket
                    </label>
                  </div>
                </div>



                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <input
                    id="add-ticket-form-willcall"
                    onClick={() => {setWillCall(!willCall)}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{ marginRight: "1rem", marginTop: 0 }}
                  />
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal", fontSize: 'small' }}
                      htmlFor="Will Call"
                    >
                      Will Call
                    </label>
                  </div>
                </div>


                    </React.Fragment>
                    }


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
    <div id="cancelTicketButton" type="cancel" onClick={() => {
        setFormClosed(!formClosed)
        onCancel(formClosed);}} style={{height: '3rem', width: '45%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Cancel</div>
    <button id="add-ticket-form-submit" type="submit" style={{height: '3rem', width: '45%'}} >Next</button>
    </div>
  
</div>

     


    </form>
  );
}

export default AddTicketForm;
