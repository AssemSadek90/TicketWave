import React, { useEffect } from 'react';
import { useState } from 'react';
import AdmissionPageCard from '../components/AdmissionPageCard';
import Row from './Row';
import '../Tickets.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

/**
A component for adding attendees to an event
@param {object} props - The props object
@param {array} props.finalData - The array of attendees to be displayed
@param {function} props.addAttendee - The function to add an attendee to the event
@param {number} props.soldTickets - The number of tickets already sold for the event
@returns {JSX.Element} - The AddAttendees component
/function AddAttendees({finalData, addAttendee, soldTickets}) { /*
The react-router-dom hook to navigate between pages
@type {function}
*/
function AddAttendees({ finalData, addAttendee, soldTickets }) {
  /**
The state variable to store the attendees that are not yet added to the event
@type {array} 
*/
  const navigate = useNavigate();
  /** The state variable to store the attendees that are not yet added to the event
@type {array}
*/
  const [pendingData, setPendingData] = useState([]);
  /** The state variable to store the total cost of all selected attendees
@type {string}
*/
  const [totalCost, setTotalCost] = useState('');
  /** The state variable to store the initial quantity of attendees
@type {number}
*/
  const [initialQuantity, setInitialQuantity] = useState(0);
  /** The state variable to store the number of attendees currently selected
@type {number}
*/
  const [selected, setSelected] = useState(0);
  /** The state variable to store the search query for filtering attendees
@type {string}
*/
  const [searchQuery, setSearchQuery] = useState('');
  /** The state variable to store whether data is currently being sent
@type {boolean}
*/
  const [sending, setSending] = useState(false);
  /** The state variable to store the current time in seconds
@type {number}
*/
  const [timer, setTimer] = useState(0);
  /** The number of minutes in the current timer value
@type {number}
*/
  const minutes = Math.floor(timer / 60);
  /** The number of seconds remaining in the current timer value
@type {number}
*/
  const seconds = timer % 60;
  /** The formatted time string for display purposes
@type {string}
*/
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  /** Starts a timer for 12 minutes and sets the 'sending' state to true
@function
@returns {void}
*/
  const startTimer = () => {
    setTimer(780); // 720 seconds = 12 minutes
    setSending(true);
  };

  /** A hook that sets up a countdown timer that decrements every second
while sending is true.
@function useTimer
@param {boolean} sending - A boolean that determines whether the timer should start or stop.
@param {number} timer - A number that represents the current timer value in seconds.
@returns {void}
*/
  useEffect(() => {
    let intervalId;
    if (sending) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [sending]);

  /** Executes the effect to check if the timer has reached 0 and stops sending data
@function
@param {number} timer - The timer in seconds
@param {boolean} sending - The boolean that indicates whether data is being sent
@param {timerCallback} setSending - Callback function to stop sending data
@param {number} setTimer - Callback function to set the timer
*/
  useEffect(() => {
    if (timer === 0) {
      setSending(false);
      setTimer(0);
    }
  }, [timer]);

  /** Filters the final data based on the search query and sets the filtered data state
@function
@param {object[]} finalData - The array of data to be filtered
@param {string} searchQuery - The search query to filter the data with
@returns {object[]} The filtered data
*/
  const filtered = finalData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // useEffect(() => {
  //   const filteredData = data.filter(item => item.chosenQuantity > 0);
  //   const updatedData = filteredData.map(item => ({
  //     ...item,
  //     soldTickets: item.chosenQuantity
  //   }));
  //   setSoldTickets(updatedData)
  //   finalSoldTickets(updatedData)
  //   // console.log(updatedData);
  // }, [data]);

  /** Sets the pending data state with the provided data
@function
@param {object[]} e - The array of data to set the pending data state with
@returns {void}
*/
  function finalDataHandler(e) {
    setPendingData(e);
  }
  /**Resets initial quantity, starts the timer, and navigates to the "Send-Email" page
@return {void}
*/
  function nextHandler() {
    // addAttendee(pendingData);
    // console.log(pendingData)
    setInitialQuantity(0);
    // setSending(true)
    startTimer();
    // navigate('/Navigation/Events/Send-Email');
  }
  /** A hook that sets the total cost and selected count based on final data.
@param {Array} finalData - An array of objects containing the final data.
@param {number} totalCost - The total cost of all selected items.
@param {number} selected - The number of selected items.
*/
  useEffect(() => {
    setTotalCost(finalData.reduce((acc, cur) => acc + cur.totalCost, 0));
    setSelected(finalData.reduce((acc, cur) => acc + cur.chosenQuantity, 0));
    // console.log(totalCost)
  }, [pendingData]);
  // useEffect(() => {
  // console.log(selected)
  // }, [selected])

  /** State hook for storing a name.
@type {[string, function]}
*/
  const [name, setName] = useState('');
  /**
@typedef {string} LastName
*/
  const [lastName, setLastName] = useState('');

  /** State hook to store the email input value.
@typedef {string} Email
@typedef {function(string): void} SetEmail
@type {[Email, SetEmail]} EmailState
*/
  const [email, setEmail] = useState('');
  /** Represents a hook that defines the filtered data state and its setter.
@function
@returns {FilteredDataState} An array containing the filtered data state and its setter.
*/
  const [filteredData, setFilteredData] = useState([]);

  // const [totalCost, setTotalCost] = useState('');

  // useEffect(() => {
  //     setTotalCost(data.reduce((acc, cur) => acc + cur.totalCost, 0));
  //   // console.log(totalCost)
  //   }, [data])

  /** useEffect hook to filter the data and update the state
@function
@param {Array} pendingData - The array of data to filter
@returns {void} - Nothing
*/
  useEffect(() => {
    const filtered = pendingData.filter((item) => item.chosenQuantity > 0);
    setFilteredData(filtered);
    // console.log(filtered);
  }, [pendingData]);

  /** Sends an email to attendees with the invitation details
@function
@param {Object} e - The event object
@returns {void} - Nothing
*/
  function sendEmail(e) {
    e.preventDefault();
    addAttendee(pendingData);
    // console.log(name);
    // console.log(email);
    // console.log("Data to email is = ", filteredData)

    // Construct the message to be sent via email
    const message = `
  <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
          color: #000
        }
        th, td {
          text-align: left;
          padding: 8px;
        }
        th {
          background-color: #646464;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #cacaca;
        }
        h2 {
          font-size: medium;
          color: #000
        }
      </style>
    </head>
    <body>
      <h2>Your TicketWave Invitations</h2>
      <table>
        <tr>
          <th>Event Name</th>
          <th>Quantity</th>
          <th>Link</th>
        </tr>
        ${filteredData
          .map((item) => {
            return `<tr>
            <td>${item.name}</td>
            <td>${item.chosenQuantity}</td>

            <td><a 
            
            









            href="https://react-ea708.web.app/${item.id}"
            


            
            
            
            
            
            
            
            
            
            
            
            
            style="display: inline-block; padding: 6px 12px; background-color: #646464; color: #fff; text-align: center; text-decoration: none; border: none; border-radius: 3px;">Click here to view</a></td>
          </tr>
          `;
          })
          .join('')}
        <tr>
          <th></th>
          <th>Total:</th>
          <th>$${totalCost}</th>
        </tr>
      </table>
    </body>
  </html>
`;

    // Send email via emailjs service

    emailjs
      .send(
        'service_raj17x9',
        'template_pk6pl9g',
        {
          from_email: 'ticketwave_01@outlook.com',
          message: message,
          to_name: name,
          to_email: email,
          subject: 'You are Invited!',
        },
        'v1ACOVA6Mru8hH5xJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    navigate("/Add-Attendees")
    setSending(false);
  }

  return (
    <div>
      {!sending ? (
        <div
          style={{
            overflowY: 'auto',
            marginBottom: '7rem',
            height: 'max-content',
            color: '#303030',
            paddingBottom: '3rem',
            minWidth: '30rem',
          }}
        >
          <div
            style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #ccc' }}
          >
            <span style={{ fontSize: '2rem', fontWeight: '501' }}>
              {' '}
              Add Attendees
            </span>{' '}
            <br />
            <span style={{ fontSize: 'medium' }}>
              {' '}
              Manually add attendees info for complimentary tickets or offline
              payments
            </span>
          </div>

          <div style={{}}>
            <div
              style={{
                marginTop: '1rem',
                marginBottom: '1.5rem',
                width: '100%',
              }}
            >
              Order Type
              <div
                className="inputContainer"
                style={{
                  marginRight: '1rem',
                  marginBottom: '1rem',
                  width: '40%',
                  marginTop: '1rem',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <select
                  id="add-attendees-order-type"
                  style={{
                    maxHeight: '5rem',
                    outline: 'none',
                    border: 'none',
                    fontSize: 'small',
                  }}
                  // onChange={(a) => setAvailability(a.target.value)}
                >
                  <option value="Paid with check">Paid with check</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              *Eventbrite does not charge any fees for manual orders.
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: '1px solid black',
                  }}
                >
                  <div style={{ flex: 2, fontWeight: 'bold' }}>Ticket Type</div>
                  <div style={{ flex: 1, fontWeight: 'bold' }}>Sold</div>
                  <div style={{ flex: 1, fontWeight: 'bold' }}>Price</div>
                  <div style={{ flex: 1, fontWeight: 'bold' }}>Quantity</div>
                  <div style={{ flex: 1, fontWeight: 'bold' }}>Face value</div>
                </div>
                {filtered.map((item, index) => (
                  <Row
                    item={item}
                    key={index}
                    data={finalData}
                    myFinalData={finalDataHandler}
                    backgroundColor={
                      index % 2 === 0 ? 'rgb(230, 230, 230)' : 'white'
                    }
                    myChosenQuantity={item.chosenQuantity}
                    soldTickets={soldTickets}
                    initialQuantity={initialQuantity}
                  />
                ))}
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '1rem',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      marginTop: '1rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    Total Cost:
                    <div
                      style={{
                        backgroundColor: 'rgb(230, 230, 230)',
                        border: '1px solid #ccc',
                        minWidth: '200px',
                        minHeight: '50px',
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '0.5rem',
                        padding: '0.5rem',
                        justifyContent: 'space-between',
                      }}
                    >
                      <p>$</p>
                      {totalCost}
                    </div>
                  </div>

                  <div className="mainButton">
                    {selected > 0 ? (
                      <button
                        id="add-attendees-next-button"
                        onClick={nextHandler}
                      >
                        Next
                      </button>
                    ) : (
                      <button disabled>Next</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            border: '1px solid #ccc',
            height: '100%',
            width: '100%',
            minWidth: '30rem',
          }}
        >
          <div
            style={{
              paddingBottom: '1.5rem',
              borderBottom: '1px solid #ccc',
              marginBottom: '1.5rem',
              textAlign: 'center',
              paddingTop: '1.5rem',
            }}
          >
            <span style={{ fontSize: '1.5rem', fontWeight: '501' }}>
              {' '}
              Checkout
            </span>{' '}
            <br />
            <br />
            <span style={{ fontSize: 'medium' }}> Time Left: {timeString}</span>
          </div>

          <form
            onSubmit={sendEmail}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
            }}
          >
            <h2 style={{ textAlign: 'left' }}>Contact Information</h2>

            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                width: '100%',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{ width: '48%', marginRight: '4%' }}
                className="inputContainer"
              >
                <label className="inputLabel">First Name</label>
                <input
                  id="add-attendees-first-name"
                  style={{ fontSize: '0.85rem' }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>

              <div style={{ width: '48%' }} className="inputContainer">
                <label className="inputLabel">Last Name</label>
                <input
                  id="add-attendees-last-name"
                  style={{ fontSize: '0.85rem' }}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            {/* <label style={{ marginBottom: '1rem' }}>Enter Name</label>
      <input type="text" required={true} onChange={(e) => { setName(e.target.value) }} value={name} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', marginBottom: '1rem', minWidth: '200px' }} /> */}

            <div
              style={{ width: '100%', marginBottom: '1rem' }}
              className="inputContainer"
            >
              <label className="inputLabel">Email Address</label>
              <input
                id="add-attendees-email"
                style={{ fontSize: '0.85rem' }}
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <p>
              As a reminder, The creator is responsible for the compilance with
              privacy and marketing regulation when using this feature to upload
              email addresses for marketing communications <br />
              <br />
              Powered by <b>Ticketwave</b>
              <br />
              <br />
            </p>

            {/* <label style={{ marginBottom: '1rem' }}>Enter Email</label>
      <input type="email" required={true} onChange={(e) => { setEmail(e.target.value) }} value={email} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', marginBottom: '1rem', minWidth: '200px' }} /> */}

            <div className="mainButton">
              <button id="add-attendees-send" type="submit" >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddAttendees;
