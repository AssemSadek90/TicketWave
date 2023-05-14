import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './Publish.css';
import server from '../server';
import EventDetails from '../EventDetails/EventDetailsPage';

function RadioApp() {
  const [radioValue, setRadioValue] = useState('option1');
  const [selectedOption, setSelectedOption] = useState('Publish-Now');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(' ');
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [EnableDate, SetEnableDate] = useState(true);
  const optionRef = useRef(null);
  const id = 1;
  // const id=localStorage.getItem('event_id')
  const handleClickPublish = async () => {
    // Get the value attribute of the option element, which contains the time value
    const timeValue = optionRef.current.value;
    console.log(timeValue);
  };

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
    console.log(date.toISOString());
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
  //localStorage.setItem("Event_id", 2);

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

  fetch('http://localhost:3000/Time', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer <your access token>',
    },
    body: JSON.stringify([
      {
        EventDate: selectedDate,
        EventTime: selectedTime,
      },
      { Password: textInputValue },
    ]),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // handle the response data
    })
    .catch((error) => {
      console.error('There was a problem with the push request:', error);
    });
  const Event_id = localStorage.getItem('Event_id');

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
          <label id="" htmlFor="option2" className="sideradio">
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
            className="SelectAudience"
            value={selectedDropdownOption}
            onChange={handleDropdownChange}
          >
            <option id="Any-link" value="option1">
              Anyone with the link
            </option>
            <option id="people-pass" value="option2">
              only people with the password
            </option>
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
          </label>

          {/* <input
              className="Radio"
              type="radio"
              id="schedule-public"
              name="options3"
              value="Scheduled"
              onChange={handleRadioButtonChange}
            />
            Yes, schedule to share publicly */}
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
                Start time
              </span>
            </label>
            <select
              style={{ maxHeight: '5rem' }}
              onChange={handleTimeChange}
              id="startTime"
              name="startTime"
              type="time"
              disabled={EnableDate}
              className="Time-Selected"
            >
              <option id="12AM" value="T12:00:00Z" ref={optionRef}>
                00:00
              </option>
              <option id="12-30AM" value="T12:30:00Z">
                00:30
              </option>
              <option id="1AM" value="T01:00:00Z">
                1:00
              </option>
              <option id="1-30AM" value="T01:30:00Z">
                1:30
              </option>
              <option id="2AM" value="T02:00:00Z">
                2:00
              </option>
              <option id="2-30AM" value="T02:30:00Z">
                2:30
              </option>
              <option id="3AM" value="T03:00:00Z">
                3:00
              </option>
              <option id="3-30AM" value="T03:30:00Z">
                3:30
              </option>
              <option id="4AM" value="T04:00:00Z">
                4:00
              </option>
              <option id="4-30AM" value="T04:30:00Z">
                4:30
              </option>
              <option id="5AM" value="T05:00:00Z">
                5:00
              </option>
              <option id="5-30AM" value="T05:30:00Z">
                5:30
              </option>
              <option id="6AM" value="T06:00:00Z">
                6:00
              </option>
              <option id="6-30AM" value="T06:30:00Z">
                6:30
              </option>
              <option id="7AM" value="T07:00:00Z">
                7:00
              </option>
              <option id="7-30AM" value="T07:30:00Z">
                7:30
              </option>
              <option id="8AM" value="T08:00:00Z">
                8:00
              </option>
              <option id="8-30AM" value="T08:30:00Z">
                8:30
              </option>
              <option id="9AM" value="T09:00:00Z">
                9:00
              </option>
              <option id="9-30AM" value="T09:30:00Z">
                9:30
              </option>
              <option id="10AM" value="T10:00:00Z">
                10:00
              </option>
              <option id="10-30AM" value="T10:30:00Z">
                10:30
              </option>
              <option id="11AM" value="T11:00:00Z">
                11:00
              </option>
              <option id="11-30AM" value="T11:30:00Z">
                11:30
              </option>
              <option id="12PM" value="T12:00:00Z">
                12:00
              </option>
              <option id="12-30PM" value="T12:30:00Z">
                12:30
              </option>
              <option id="1PM" value="T13:00:00Z">
                13:00
              </option>
              <option id="1-30PM" value="T13:30:00Z">
                13:30
              </option>
              <option id="2PM" value="T14:00:00Z">
                14:00
              </option>
              <option id="2-30PM" value="T14:30:00Z">
                14:30
              </option>
              <option id="3PM" value="T15:00:00Z">
                15:00
              </option>
              <option id="3-30PM" value="T15:30:00Z">
                15:30
              </option>
              <option id="4PM" value="T16:00:00Z">
                16:00
              </option>
              <option id="4-30PM" value="T16:30:00Z">
                16:30
              </option>
              <option id="5PM" value="T17:00:00Z">
                17:00
              </option>
              <option id="5-30PM" value="T17:30:00Z">
                17:30
              </option>
              <option id="6PM" value="T18:00:00Z">
                18:00
              </option>
              <option id="6-30PM" value="T18:30:00Z">
                18:30
              </option>
              <option id="7PM" value="T19:00:00Z">
                19:00
              </option>
              <option id="7-30PM" value="T19:30:00Z">
                19:30
              </option>
              <option id="8PM" value="T20:00:00Z">
                20:00
              </option>
              <option id="8-30PM" value="T20:30:00Z">
                20:30
              </option>
              <option id="9PM" value="T21:00:00Z">
                21:00
              </option>
              <option id="9-30PM" value="T21:30:00Z">
                21:30
              </option>
              <option id="10PM" value="T22:00:00Z">
                22:00
              </option>
              <option id="10-30PM" value="T22:30:00Z">
                22:30
              </option>
              <option id="11PM" value="T23:00:00Z">
                23:00
              </option>
              <option id="11-30PM" value="T23:30:00Z">
                23:30
              </option>
            </select>
          </div>
        </div>
        <p className="eds-text-bm eds-l-mar-bot-4">
          Time zone is the same as your event's
        </p>
      </div>
      <form onSubmit={eventHandler}>
        <div className="footerContainer">
          <Link to={`/event-details/${Event_id}`} element={<EventDetails />}>
            <div>
              <button
                className="footerButton"
                id="footer"
                type="submit"
                onClick={handleClickPublish}
              >
                Publish
              </button>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RadioApp;
