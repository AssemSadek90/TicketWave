import React from "react";
import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';


function CreatePromoForm({onCancel, onSubmit, myData}){

  const [id, setId] = useState(myData ? myData.id : Math.floor(Math.random() * 10000000));
    const [codeName, setCodeName] = useState(myData ? myData.codeName : '')
    const [names, setNames] = useState(myData ? myData.names : '')
    const [ticketLimit, setTicketLimit] = useState(myData ? myData.ticketLimit : 'Unlimited')
    const [isTicketLimit, setIsTicketLimit] = useState(myData ? myData.isTicketLimit : 0)
    const [reveal, setReveal] = useState(myData ? myData.reveal : false);

    const [promoStarts, setPromoStarts] = useState(myData ? myData.promoStarts : "Now");
    const [promoEnds, setPromoEnds] = useState(myData ? myData.promoEnds : "When ticket sale ends");
    const [startDate, setStartDate] = useState(myData ? myData.startDate : null);
    const [startTime, setStartTime] = useState(myData ? myData.startTime : null);
    const [endDate, setEndDate] = useState(myData ? myData.endDate : null);
    const [endTime, setEndTime] = useState(myData ? myData.endTime : null);
    const [codeType, setCodeType] = useState("");

    const [discount, setDiscount] = useState(myData ? myData.discount : false);

    const [applyCodeTo, setApplyCodeTo] = useState(myData ? myData.applyCodeTo : "All Visible Tickets");


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
          type: 'CreatePromo'
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
        Add Code
    </h2>
</div>


{/* ____________________________________________________________________________________________________________________ */}


      <div className="inputContainer" style={{marginTop: '1rem'}}>
        <label className="inputLabel">Code Name</label>
        <input
          id="promo-code-name"
          style={{ fontSize: "0.85rem" }}
          type="text"
          name="eventName"
          value={codeName}
    onChange={(e) => {
        setCodeName(e.target.value);
    //   setCount(e.target.value.length);
    }}
          required
        />
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
                      id="promo-code-limit"
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
          id="promo-code-amount"
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
                    id="promo-code-reveal"
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
          id="promo-code-discount"
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
                    id="promo-code-starts"
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
                    id="promo-code-scheduled-start"
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
                      id="promo-code-start-date"
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
                      id="promo-code-start-time"
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
                    id="promo-code-ends"
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
                    id="promo-code-scheduled-end"
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
                    <label className="inputLabel">Start Date</label>
                    <DatePicker
                      id="promo-code-end-date"
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
                    <label className="inputLabel">Start Time</label>
                    <select
                      id="promo-code-end-time"
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
                    id="promo-code-all-tickets"
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
                    id="promo-code-certain-tickets"
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
    <button id="promo-code-next" type="submit" style={{height: '3rem', width: '45%'}} >Next</button>
    </div>
  
</div>

     


    </form>

    )

};

export default CreatePromoForm;