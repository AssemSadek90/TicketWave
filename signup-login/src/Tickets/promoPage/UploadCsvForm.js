import React from "react";
import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import server from '../../server';

/**

Renders a form for uploading a CSV file and allows for editing data.
@function
@param {Object} props - The props object.
@param {Function} props.onCancel - The function to call when the cancel button is clicked.
@param {Function} props.onSubmit - The function to call when the form is submitted.
@param {Object} props.myData - The data object to edit.
@returns {JSX.Element} - A JSX form element.
*/
function UploadCsvForm({onCancel, onSubmit, myData}){

  /** The ID of the data object.
@type {number}
*/
    const [id, setId] = useState(myData ? myData.id : Math.floor(Math.random() * 10000000));
    /** The code name of the data object.
@type {string}
*/
    const [codeName, setCodeName] = useState(myData ? myData.codeName : '')
    /** The names of the data object.
@type {string}
*/
    const [names, setNames] = useState(myData ? myData.names : '')
    /** The ticket limit of the data object.
@type {string}
*/
    const [ticketLimit, setTicketLimit] = useState(myData ? myData.ticketLimit : 'Unlimited')
    /** Determines if the ticket limit is enabled or not.
@type {number}
*/
    const [isTicketLimit, setIsTicketLimit] = useState(myData ? myData.isTicketLimit : 0)
    /** Determines if the reveal feature is enabled or not.
@type {boolean}
*/
    const [reveal, setReveal] = useState(myData ? myData.reveal : false);
/** The state of when the promotion starts
@type {[string, Function]} promoStarts
*/
    const [promoStarts, setPromoStarts] = useState(myData ? myData.promoStarts : "Now");
    /** The state of when the promotion ends
@type {[string, Function]} promoEnds
*/
    const [promoEnds, setPromoEnds] = useState(myData ? myData.promoEnds : "When ticket sale ends");
    /** The start date for the uploaded data
@type {[Date, Function]} startDate
*/
    const [startDate, setStartDate] = useState(myData ? myData.startDate : null);
    /** The start time for the uploaded data
@type {[Date, Function]} startTime
*/
    const [startTime, setStartTime] = useState(myData ? myData.startTime : null);
    /** The end date for the uploaded data
@type {[Date, Function]} endDate
*/
    const [endDate, setEndDate] = useState(myData ? myData.endDate : null);
    /** The end time for the uploaded data
@type {[Date, Function]} endTime
*/
    const [endTime, setEndTime] = useState(myData ? myData.endTime : null);
    /** The type of code for the uploaded data
@type {[string, Function]} codeType
*/
    const [codeType, setCodeType] = useState("");
    /** A state hook for the discount field of the form.
 @type {[boolean, function]} - A state tuple.
 */
    const [discount, setDiscount] = useState(myData ? myData.discount : false);
    /** A state hook for the applyCodeTo field of the form.
 @type {[string, function]} - A state tuple.
 */
    const [applyCodeTo, setApplyCodeTo] = useState(myData ? myData.applyCodeTo : "All Visible Tickets");

/**
Executes an effect function when the component mounts or when the value of the state variable promoStarts/promoEnds changes.
If the value of promoStarts/promoEnds is "Scheduled Time", sets the startDate/endDate state variable to the current date and the startTime/endTime state variable to "12 AM".
@param {string} promoStarts - The value of the promoStarts state variable.
@param {string} promoEnds - The value of the promoEnds state variable.
*/
    useEffect(() => {
        if (promoStarts === 'Scheduled Time') {
            setStartDate(new Date());
            setStartTime('12 AM');
        }
      }, [promoStarts]);

      useEffect(() => {
        if (promoEnds === 'Scheduled Time') {
            setEndDate(new Date());
            setEndTime('12 AM');
        }
      }, [promoEnds]);

/** Executes an effect that sets the type of the code based on whether the discount is applied and/or the tickets are revealed
@param {boolean} reveal - Indicates whether the hidden tickets should be revealed or not
@param {boolean} discount - Indicates whether a discount should be applied or not
@returns {void}
*/
      useEffect(() => {
        if (reveal && discount){
          setCodeType("Reveals hidden tickets , Applies discount")
        }
        else if (reveal){
          setCodeType("Reveals hidden tickets")
        }
        else if (discount){
          setCodeType("Applies discount")
        }

      }, [reveal, discount])

/** Handles the CSV file upload event by reading and parsing the CSV file data
and setting the state values for code names and code name of the uploaded file.
@param {Object} event - The event object of the file input change event.
@returns {void}
*/
  function handleCsvUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const rows = csvData.split('\n');
      const codeNames = [];

      for (let i = 0; i < rows.length && i < 500; i++) {
        const columns = rows[i].split(',');
        if (columns.length > 0) {
          codeNames.push(columns[0]);
        }
      }

      setNames(codeNames.join('\n'));
      setCodeName(file.name);
    };

    reader.readAsText(file);
  }

  /** Handles form submission event.
@param {object} event - The form submission event.
@returns {void}
*/
    function submitHandler(event){
        event.preventDefault();

        const data = {
          id: id,
          codeName: codeName,
          ticketLimit: ticketLimit,
          isTicketLimit: isTicketLimit,
          promoStarts: promoStarts,
          promoEnds: promoEnds,
          startDate: startDate,
          startTime: startTime,
          endDate: endDate,
          endTime: endTime,
          applyCodeTo: applyCodeTo,
          discount: discount,
          codeType: codeType,
          names: names,
          type: 'UploadCsv'
        }

        onSubmit(data);

        setCodeName('');
        setTicketLimit('');
        setIsTicketLimit(0);
        setReveal(null)
        setPromoStarts(null)
        setPromoEnds(null)
        setStartDate(null)
        setStartTime(null)
        setEndDate(null)
        setEndTime(null)
        setApplyCodeTo(null)
        setDiscount(null)

        onCancel(true);

        console.log(data);
        handleCSV(data);


    };

    const handleCSV = (data) => {
      const accessToken = localStorage.getItem("accessToken")
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${accessToken}`,
        },
      };
        
      server.post('/CSV', JSON.stringify(data), requestOptions)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    };



    return(
        // <div>
        //     Create Promo Form
        //     <button onClick={() => {onCancel(true)}}>Cancel</button>
        // </div>

        <form style={{overflowY: 'auto', maxHeight: '100vh', width: '100%', overflowX: 'hidden', paddingRight: '1rem'}} onSubmit={submitHandler} >
            <div style={{height: 'max-content', marginBottom: '7rem'}}>


<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc'}}>
    <h2>
        Upload CSV
    </h2>
</div>


{/* ____________________________________________________________________________________________________________________ */}

<p style={{fontSize: 'small'}}>
Upload up to 500 codes from a .csv or .txt file.
<br/><br/>
Separate codes with commas, or list them on separate lines.
<br/><br/>
Spaces, apostrophes, and special characters (except: -_ , @ . ) are not allowed.
</p>
{/* <div className="inputContainer" style={{marginTop: '1rem'}}>
      <label className="inputLabel">Import Codes</label>
      <input
        style={{ fontSize: "0.85rem", height: '5rem', width: '100%' }}
        type="file"
        accept=".csv"
        onChange={handleCsvUpload}
        required
        placeholder={codeName}
      />
        <textarea
        style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}
        rows="5"
        id="eventName"
        name="eventName"
        value={codeName}
        onChange={(e) => {
            setCodeName(e.target.value);
        }} 
        required
      /> 
    </div> */}



<div style={{ marginTop: '1rem' }}>
  <label style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem', display: 'block' }}>Import Codes</label>
  <div style={{ position: 'relative', width: '100%' }}>
    <input
      id="upload-csv-import"
      type="file"
      accept=".csv"
      onChange={handleCsvUpload}
      required
      style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
      className="csvInput"
    />
    <button id="upload-csv-codename" style={{ fontSize: '0.85rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out', width: '100%', height: '5rem' }}>
      {codeName || 'Choose File'}
    </button>
  </div>
  {/* <textarea
    style={{ fontSize: '0.85rem', marginTop: '0.5rem', height: '5rem', width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }}
    rows="5"
    id="eventName"
    name="eventName"
    value={codeName}
    onChange={(e) => {
        setCodeName(e.target.value);
    }} 
    required
    className="csvInput"
  /> */}
</div>


      {/* _______________________________________________________________________________________________________________________________ */}



<div style={{display: 'flex', flexDirection: 'row'}}>
      <div
                    className="inputContainer"
                    style={{
                      marginRight: "10%",
                      marginBottom: "1rem",
                      width: "45%",
                      marginTop: '1rem'
                    }}
                  >
                    <label className="inputLabel">Ticket Limit</label>
                    <select
                      id="upload-csv-limit"
                      style={{ maxHeight: "5rem", outline: 'none', border: 'none' }}
                      onChange={(a) => setTicketLimit(a.target.value)}
                      name="availability"
                      value={ticketLimit}
                    >
                      <option value="Unlimited">Unlimited</option>
                      <option value="Limited to">Limited to</option>
                    </select>
                  </div>

                        {
                            ticketLimit === 'Limited to' && 

                            <div className="inputContainer" style={{marginTop: '1rem', width: '45%', height: '100%'}}>
        <label className="inputLabel">Amount</label>

        <div  style={{display: 'flex', flexDirection: 'row', top: 0, bottom: 0, padding: '0px', margin: '0px'}} >

        <input
          id="upload-csv-amount"
          style={{ fontSize: "0.85rem", width: '60%' }}
          type="number"
          value={isTicketLimit}
    onChange={(e) => {
        setIsTicketLimit(e.target.value);
    //   setCount(e.target.value.length);
    }}
          required
        />
        <span style={{color: "#ccc", fontSize: '0.7rem'}}>Tickets</span>
    
        </div>
        
      </div>
            }

                  </div>

                  <p style={{fontSize: 'small'}}>Total number of tickets that can be purchased with this code</p>

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
                    id="upload-csv-reveal"
                    onClick={() => {setReveal(!reveal)}}
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
                      Reveal hidden tickets during checkout
                    </label>
                  </div>
                </div>


                    <p>Discount amount (optional)</p>
                <div className="inputContainer" style={{marginTop: '1rem', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                <span style={{color: "#ccc", fontSize: '0.7rem', paddingLeft: '1rem', paddingRight: '1rem'}}>$</span>
        {/* <label className="inputLabel">Code Name</label> */}
        <input
          id="upload-csv-discount"
          style={{ fontSize: "0.85rem", width: '100%' }}
          type="number"
          name="eventName"
          value={discount}
    onChange={(e) => {
        setDiscount(e.target.value);
    //   setCount(e.target.value.length);
    }}
        />
      </div>


                <div>
                    <p style={{fontWeight: 'bold'}}>Promo code starts</p>
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
                    id="upload-csv-starts"
                    onClick={() => {setPromoStarts('Now')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: promoStarts === 'Now' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={promoStarts === 'Now'}
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
                      Now
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
                    id="upload-csv-scheduled-start"
                    onClick={() => {setPromoStarts('Scheduled Time')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: promoStarts === 'Scheduled Time' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={promoStarts === 'Scheduled Time'}
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
                      Scheduled Time
                    </label>
                  </div>
                </div>
              
                {
                    promoStarts === 'Scheduled Time' && 

                    <div>
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
                    <label className="inputLabel">Start Date</label>
                    <DatePicker
                      id="upload-csv-scheduled-start-date"
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
                      id="upload-csv-scheduled-start-time"
                      onChange={(date) => setStartTime(date.target.value)}
                      style={{ maxHeight: "5rem" , outline: 'none', border: 'none' }}
                      name="endTime"
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
                    </div>
                }



                
<div>
                    <p style={{fontWeight: 'bold'}}>Promo code ends</p>
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
                    id="upload-csv-ends"
                    onClick={() => {setPromoEnds('When ticket sale ends')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: promoEnds === 'When ticket sale ends' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={promoEnds === 'When ticket sale ends'}
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
                      When ticket sale ends
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
                    id="upload-csv-scheduled-end"
                    onClick={() => {setPromoEnds('Scheduled Time')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: promoEnds === 'Scheduled Time' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={promoEnds === 'Scheduled Time'}
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
                      Scheduled Time
                    </label>
                  </div>
                </div>

                

                {
                    promoEnds === 'Scheduled Time' && 

                    <div>
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
                    <label className="inputLabel">End Date</label>
                    <DatePicker
                      id="upload-csv-scheduled-end-date"
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
                      id="upload-csv-scheduled-end-time"
                      onChange={(date) => setEndTime(date.target.value)}
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
                    </div>
                }


                <div style={{width: '100%', borderBottom: '1px solid #ccc'}}></div>



                {/* ____________________________________________________________________________________________________________________ */}

                
<div>
                    <p style={{fontWeight: 'bold'}}>Apply code to:</p>
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
                    id="upload-csv-all-tickets"
                    onClick={() => {setApplyCodeTo('All Visible Tickets')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: applyCodeTo === 'All Visible Tickets' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={applyCodeTo === 'All Visible Tickets'}
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
                      All Visible Tickets
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
                    id="upload-csv-certain-tickets"
                    onClick={() => {setApplyCodeTo('Only Certain Visible Tickets')}}
                    type="checkbox"
                    name="displayEndTime"
                    style={{
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                        marginTop: 0,
                        appearance: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: applyCodeTo === 'Only Certain Visible Tickets' ? "blue" : "transparent",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer"
                      }}
                      defaultChecked={applyCodeTo === 'Only Certain Visible Tickets'}
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
                      Only Certain Visible Tickets
                    </label>
                  </div>
                </div>



                  {/* ____________________________________________________________________________________________________________________ */}

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
        onCancel(true);}} style={{height: '3rem', width: '45%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Cancel</div>
    <button id="upload-csv-submit" type="submit" style={{height: '3rem', width: '45%'}} >Next</button>
    </div>
  
</div>

    </form>

    )

};

export default UploadCsvForm;