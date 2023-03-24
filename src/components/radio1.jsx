import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


function RadioApp() {
  
  const [radioValue, setRadioValue] = useState("option1");
  const [selectedOption, setSelectedOption] = useState("Publish-Now");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(" ");
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(moment().format('HH:mm'));
  const [EnableDate, SetEnableDate] = useState(true);


  useEffect(() => {
    setSelectedDate(new Date());
    setSelectedTime(moment().format("HH:mm"));
  }, []);
  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelectedDate(new Date());
  //     setSelectedTime(moment().format('HH:mm'));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  
    // const handleDateChange = (event) => {
    //   console.log(selectedDate);
    //   // setSelectedDate(event.target.value);
    //   date => setSelectedDate(date)
    //   SubmitTheData()

    // };
    // /////////////////////////////////this oneeeeeee//////////////////////////////////////////////////////////
//   const handleDateChange = (event) => {
//   const date = event.target.value;
//   setSelectedDate(date);
//   SubmitTheData();
// };
// ///////////////////////////////////////////////////////////////////////////////////////////////
    // const handleTimeChange = (e) => {
    //   // setSelectedTime(event.target.value);
    //   e => setSelectedTime(e.target.value)
    //   console.log(selectedTime)
    // };

 function handleDateChange(date) {
  setSelectedDate(date);
  SubmitTheData();
}

   
  const handleTimeChange = (e) => {
  const time = e.target.value;
  setSelectedTime(time);
  console.log(selectedTime);
};

  function handleRadioButtonChange(event) {
    const selectedOptionValue = event.target.value;
    setSelectedOption(selectedOptionValue);
    setDropdownVisible(selectedOptionValue === "option2");
    if (selectedOptionValue === 'Scheduled') {
      SetEnableDate(false);
    } else {
      SetEnableDate(true);
    }
  }

  // Scheduled -> false
  // keep-private & Publish-Now  -> true
  const enableDate = () =>{
    if (selectedOption === "keep-private" ||  selectedOption === "Publish-Now")
    {
      SetEnableDate(true);
    }
    else {
      SetEnableDate(false);
    }
  }

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  function handleDropdownChange(event) {
    const selectvalueDrop = event.target.value;
    setSelectedDropdownOption(selectvalueDrop);
    setTextInputVisible(selectvalueDrop === "option2");
  }

  function handleTextInputChange(event) {
    setTextInputValue(event.target.value);
    console.log(textInputValue);
  }
  
  function SubmitTheData(){
        fetch('http://localhost:3001/Time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your access token>'
      },
      body: JSON.stringify({
        "EventDate": selectedDate,
        "EventTime": selectedTime
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // handle the response data
      })
      .catch(error => {
        console.error('There was a problem with the push request:', error);
      });
  }
  
  return (
    <div>
      <label>Who can see your event?</label>
      <div>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          onChange={handleChange}
          defaultChecked={true}
        />
        <br />
        <label htmlFor="option1">Public</label>
        <br />
        <span>Shared on TicketWave and search engines</span>
      </div>
      <div>
        <div>
          <input
            type="radio"
            id="option2"
            name="options"
            value="option2"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="option2">private</label>
          <br />
          <span>Only available to a selected audience</span>
        </div>
      </div>
      {radioValue === "option1" && (
        <div>
          {/* show additional options */}
          <label>
            <br />
            When should we publish your event? <br />
            <br />
            <label>
              <input
                type="radio"
                id="option3"
                name="options2"
                value="Publish-Now"
                onChange={handleRadioButtonChange}
               defaultChecked={true}

              />
              Publish Now
              <br />
            </label>
            <br />
          </label>
          <label>
            <input
              type="radio"
              id="option4"
              name="options2"
              value="Scheduled"
              onChange={handleRadioButtonChange}
            />
            Schedule for later
          </label>

        </div>
      )}
      {radioValue === "option2" && (
        <div>
          {/* show different additional options */}
          <label>
            Choose your Audience:
            <br />
          </label>
          <select
            value={selectedDropdownOption}
            onChange={handleDropdownChange}
          >
            <option value="option1">Anyone with the link</option>
            <option value="option2">only people with the password</option>
          </select>
          {textInputVisible && (
            <label >
              <br />
              password:
              <br />
              <input
                type="password"
                value={textInputValue}
                onChange={handleTextInputChange}
                placeholder="Password"
              />
            </label>
          )}
          <br />
          <label>
            <br />
            Will this event ever be public? <br /><br/>
            <label>
              <input
                type="radio"
                name="options3"
                value="keep-private"
                onChange={handleRadioButtonChange}
                defaultChecked={true}
              />
              No, keep it private
              <br /><br/>
            </label>
          </label>
          <label>
            <input
              type="radio"
              name="options3"
              value="Scheduled"
              onChange={handleRadioButtonChange}
            
            />
            Yes, schedule to share publicly
          </label>
        </div>
      )}
      <br/>
       <div>
       
         {/* <input disabled={EnableDate} type="date" id="date-input" onChange={(e)=>handleDateChange(e)}   />
   
        
         <input disabled={EnableDate} type="time" id="time-input" onChange={handleTimeChange} /> */}
   
  
      <DatePicker disabled={EnableDate} selected={selectedDate} onChange={handleDateChange} minDate={new Date()} />
      <input type="time" value={selectedTime} disabled={EnableDate} onChange={handleTimeChange} />
      

       </div> 
    </div>
  );




}

export default RadioApp;

