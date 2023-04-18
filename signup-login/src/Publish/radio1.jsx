import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './Publish.css';
import server from '../server';
import './footer.css';

function RadioApp() {
  const [radioValue, setRadioValue] = useState('option1');
  const [selectedOption, setSelectedOption] = useState('Publish-Now');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(' ');
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(moment().format('HH:mm'));
  const [EnableDate, SetEnableDate] = useState(true);

  useEffect(() => {
    setSelectedDate(new Date());
    setSelectedTime(moment().format('HH:mm'));
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
  const eventdata = {};
  //   function DataHandler(event) {
  //   event.preventDefault();
  //     data.StartDate=selectedDate;
  //     data.StartTime=selectedTime;
  //     data.password=textInputValue;

  // };

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    // SubmitTheData();
  };
  // function handlePublish=() => {}

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    // SubmitTheData();
    // console.log(data);
    console.log(selectedTime);
    console.log(time);
  };

  function handleRadioButtonChange(event) {
    const selectedOptionValue = event.target.value;
    setSelectedOption(selectedOptionValue);
    setDropdownVisible(selectedOptionValue === 'option2');
    if (selectedOptionValue === 'Scheduled') {
      SetEnableDate(false);
    } else {
      SetEnableDate(true);
    }
  }

  // Scheduled -> false
  // keep-private & Publish-Now  -> true
  const enableDate = () => {
    if (selectedOption === 'keep-private' || selectedOption === 'Publish-Now') {
      SetEnableDate(true);
    } else {
      SetEnableDate(false);
    }
  };

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  function handleDropdownChange(event) {
    const selectvalueDrop = event.target.value;
    setSelectedDropdownOption(selectvalueDrop);
    setTextInputVisible(selectvalueDrop === 'option2');
  }

  function handlepasswordInputChange(event) {
    setTextInputValue(event.target.value);
    console.log(textInputValue);
  }
  function eventHandler(event) {
    event.preventDefault();
    eventdata.StartDate = selectedDate.toString();
    eventdata.StartTime = selectedTime;
    eventdata.password = textInputValue;
    SubmitTheData(eventdata);
  }

  const SubmitTheData = (eventdata) => {
    // event.preventDefault();
    // data.StartDate=selectedDate.toString();
    // data.StartTime=selectedTime;
    // data.password=textInputValue;}
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
    };

    server
      .post('/Time', eventdata, requestOptions)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  //       fetch('http://localhost:3000/Time', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer <your access token>'
  //     },
  //     body: JSON.stringify([{
  //       "EventDate": selectedDate,
  //       "EventTime": selectedTime
  //     },
  //   { "Password": textInputValue }])
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // handle the response data
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with the push request:', error);
  //     });
  // }

  return (
    <div>
      <h2>Who can see your event?</h2>
      <div className="RadioBlock">
        <input
          className="Radio"
          type="radio"
          id="option1"
          name="options"
          value="option1"
          onChange={handleChange}
          defaultChecked={true}
        />
        <br />
        <div>
          <label htmlFor="option1" className="sideradio">
            Public
          </label>
          <br />
          <span className="sideradio">
            Shared on TicketWave and search engines
          </span>
        </div>
      </div>
      <div className="RadioBlock">
        <input
          className="Radio"
          type="radio"
          id="option2"
          name="options"
          value="option2"
          onChange={handleChange}
        />
        <br />
        <div>
          <label id='' htmlFor="option2" className="sideradio">
            private
          </label>
          <br />
          <span className="sideradio">
            Only available to a selected audience
          </span>
        </div>
      </div>
      {radioValue === 'option1' && (
        <div>
          {/* show additional options */}
          <h2>When should we publish your event? </h2>
          <br />
          <label>
            <input
              className="Radio"
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
          <label>
            <input
              className="Radio"
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
      {radioValue === 'option2' && (
        <div className="Audience">
          {/* show different additional options */}
          <h2 className="Header2">
            Choose your Audience:
            <br />
          </h2>
          <select
            value={selectedDropdownOption}
            onChange={handleDropdownChange}
          >
            <option id="Any-link" value="option1">Anyone with the link</option>
            <option id="people-pass" value="option2">only people with the password</option>
          </select>
          {textInputVisible && (
            <label>
              <br />
              password:
              <br />
              <input
                id="pasword"
                type="password"
                value={textInputValue}
                onChange={handlepasswordInputChange}
                placeholder="Password"
              />
            </label>
          )}
          <br />
          <label>
            <br />
            Will this event ever be public? <br />
            <br />
            <label>
              <input
                className="Radio"
                type="radio"
                id="keep-private"
                name="options3"
                value="keep-private"
                onChange={handleRadioButtonChange}
                defaultChecked={true}
              />
              No, keep it private
              <br />
              <br />
            </label>
          </label>
          <label>
            <input
              className="Radio"
              type="radio"
              id="schedule-public"
              name="options3"
              value="Scheduled"
              onChange={handleRadioButtonChange}
            />
            Yes, schedule to share publicly
          </label>
        </div>
      )}
      <br />
      <div className="flex-row">
        {/* <input disabled={EnableDate} type="date" id="date-input" onChange={(e)=>handleDateChange(e)}   />
   
        
         <input disabled={EnableDate} type="time" id="time-input" onChange={handleTimeChange} /> */}

        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            className="eds-field-styled__label-wrapper snipcss0-11-78-79 snipcss0-9-23-24"
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
            }}
          >
            
              <label className="eds-field-styled__label eds-label-primary snipcss0-12-79-80 snipcss0-10-24-25">
                <span className="eds-label__content snipcss0-13-80-81 snipcss0-11-25-26">
                  {' '}
                  Start date
                </span>
              </label>
              <DatePicker
                id="StartDate"
                name="startDate"
                disabled={EnableDate}
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
              />
          
          </div>
          {/* <input type="time" value={selectedTime} disabled={EnableDate} onChange={handleTimeChange} /> */}
          <div
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
            }}
          >
          
              <label className="eds-field-styled__label eds-label-primary snipcss0-12-79-80 snipcss0-10-24-25">
                <span className="eds-label__content snipcss0-13-80-81 snipcss0-11-25-26">
                  Start Time
                </span>
              </label>
              <select
                style={{ maxHeight: '5rem' }}
                onChange={handleTimeChange}
                id="startTime"
                name="startTime"
                type="time"
                disabled={EnableDate}
              >
                <option id="12AM" value="12 AM">00:00</option>
                <option id="12-30AM" value="12:30 AM">00:30</option>
                <option id="1AM" value="1 AM">1:00</option>
                <option id="1-30AM" value="1:30 AM">1:30</option>
                <option id="2AM" value="2 AM">2:00</option>
                <option id="2-30AM" value="2:30 AM">2:30</option>
                <option id="3AM" value="3 AM">3:00</option>
                <option id="3-30AM" value="3:30 AM">3:30</option>
                <option id="4AM" value="4 AM">4:00</option>
                <option id="4-30AM" value="4:30 AM">4:30</option>
                <option id="5AM" value="5 AM">5:00</option>
                <option id="5-30AM" value="5:30 AM">5:30</option>
                <option id="6AM" value="6 AM">6:00</option>
                <option id="6-30AM" value="6:30 AM">6:30</option>
                <option id="7AM" value="7 AM">7:00</option>
                <option id="7-30AM" value="7:30 AM">7:30</option>
                <option id="8AM" value="8 AM">8:00</option>
                <option id="8-30AM" value="8:30 AM">8:30</option>
                <option id="9AM" value="9 AM">9:00</option>
                <option id="9-30AM" value="9:30 AM">9:30</option>
                <option id="10AM" value="10 AM">10:00</option>
                <option id="10-30AM" value="10:30 AM">10:30</option>
                <option id="11AM" value="11 AM">11:00</option>
                <option id="11-30AM" value="11:30 AM">11:30</option>
                <option id="12PM" value="12 PM">12:00</option>
                <option id="12-30PM" value="12:30 PM">12:30</option>
                <option id="1PM" value="1 PM">13:00</option>
                <option id="1-30PM" value="1:30 PM">13:30</option>
                <option id="2PM" value="2 PM">14:00</option>
                <option id="2-30PM" value="2:30 PM">14:30</option>
                <option id="3PM" value="3 PM">15:00</option>
                <option id="3-30PM" value="3:30 PM">15:30</option>
                <option id="4PM" value="4 PM">16:00</option>
                <option id="4-30PM" value="4:30 PM">16:30</option>
                <option id="5PM" value="5 PM">17:00</option>
                <option id="5-30PM" value="5:30 PM">17:30</option>
                <option id="6PM" value="6 PM">18:00</option>
                <option id="6-30PM" value="6:30 PM">18:30</option>
                <option id="7PM" value="7 PM">19:00</option>
                <option id="7-30PM" value="7:30 PM">19:30</option>
                <option id="8PM" value="8 PM">20:00</option>
                <option id="8-30PM" value="8:30 PM">20:30</option>
                <option id="9PM" value="9 PM">21:00</option>
                <option id="9-30PM" value="9:30 PM">21:30</option>
                <option id="10PM" value="10 PM">22:00</option>
                <option id="10-30PM" value="10:30 PM">22:30</option>
                <option id="11PM" value="11 PM">23:00</option>
                <option id="11-30PM" value="11:30 PM">23:30</option>
              </select>
       
          </div>
        </div>
        <p className="eds-text-bm eds-l-mar-bot-4">
          Time zone is the same as your event's
        </p>
      </div>
      <form onSubmit={eventHandler}>
        <div className="footerContainer">
          <button className="footerButton" id="footer" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default RadioApp;
