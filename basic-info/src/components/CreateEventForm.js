import React, { useRef, useState, useEffect } from 'react';
import classes from './CreateEventForm.module.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStickyNote, faMapMarkerAlt, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./extra/Header";


const CreateEventForm = () => {
    
    
    // TAG FUNCTIONALITY
    const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tagError, setTagError] = useState(false);
  const [tagCount, setTagCount] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setTagCount(event.target.value.length)
  };

  const handleAddTag = (event) => {
    event.preventDefault();
    const newTag = inputValue.trim();
    
    if (newTag !== "" && !tags.includes(newTag)) {
      setTagError(false)
      setTags([...tags, newTag]);
      setInputValue("");
    }
    else setTagError(true)
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
// TAG FUNCTIONALITY




// LOCATION FUNCTIONALITY
const [myLocation, setMyLocation] = useState("Venue");





const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLocationChange = (event) => {
    const input = event.target.value;
    setLocation(input);

    if (input) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=5`
        )
        .then((response) => {
          setSuggestions(response.data);
        })
        .catch((error) => {
          // console.error(error);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setLocation(suggestion.display_name);
    setSuggestions([]);
  };



// LOCATION FUNCTIONALITY


// DATE & TIME FUNCTIONALITY
const [date, setDate] = useState("Single Event");


const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());



// DATE & TIME FUNCTIONALITY
  
  
    
    const titleRef = useRef(null);
    const organizerRef = useRef(null);
    const eventTypeRef = useRef(null);
    const eventCategoryRef = useRef(null);
    // const startDateRef = useRef(null);
    const startTimeRef = useRef(null);
    // const endDateRef = useRef(null);
    const endTimeRef = useRef(null);
    const displayStartRef = useRef(null);
    const displayEndRef = useRef(null);
    const timeZoneRef = useRef(null);
    const languageRef = useRef(null);



    // SUBMIT HANDLING
  

  function submitHandler(event){
    event.preventDefault();
    const data = {
        Title: titleRef.current.value,
        Organizer: organizerRef.current.value,
        EventType: eventTypeRef.current.value,
        EventCategory: eventCategoryRef.current.value,
        Tags: tags,
        Location: location,
        StartDate: startDate,
        StartTime: startTimeRef.current.value,
        EndDate: endDate,
        EndTime: endTimeRef.current.value,
        DisplayStartTime: displayStartRef.current.checked,
        DisplayEndTime: displayEndRef.current.checked,
        TimeZone: timeZoneRef.current.value,
        Language: languageRef.current.value
    };

    console.log(data)
  }



   // SUBMIT HANDLING



   const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  










  // TITLE ERROR VALIDATION

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    if (value.trim().length === 0) {
      setError(true);
    }
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setCount(event.target.value.length);
    if (event.target.value.trim().length > 0) {
      setError(false);
    }
  };






   // LOCATION ERROR VALIDATION





  //  HANDLING FORM VALIDITY

  return (
    <form className={classes.form} onSubmit={submitHandler}>


{/* 1st PART OF PAGE ____________________________________________________________________________________________________________________________ */}

        <div style={{display: 'flex', flexDirection: 'row', paddingBottom: '4rem', borderBottom: '1px solid rgb(212, 212, 212)'}}>

        <FontAwesomeIcon icon={faStickyNote} style={{color: '#d8d8d8', marginRight: '2rem', marginTop: '2rem'}} size="5x" />


        {/* TITLE AND ORGANIZER INFORMATION ______________________________________________________________________________________________*/}
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>

        


        <h2 className={classes.title}>Basic Info</h2>
        <p className={classes.para}>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>

        <div className={classes.inputContainer} style={{
          border: `1px solid ${isFocused ? 'blue' : error ? 'red' : 'gray'}`,
          padding: '0.5rem',
        }}  >

        <label style={{
          color: `${isFocused ? 'blue' : error ? 'red' : 'gray'}`
        }} className={classes.inputLabel} >Event Title *</label>
        <input ref={titleRef}  type="text" id="eventTitle" name="eventTitle" maxLength="75" value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
         required placeholder="Be clear and descriptive." />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <p style={{ color: 'red', width: '80%' }}>{error && "Title is required."}</p><p style={{textAlign: 'right'}}>{count}/75</p>
        </div>


        <div className={classes.inputContainer}  >
        <label className={classes.inputLabel} >Organizer</label>
        <input ref={organizerRef} type="text" id="eventTitle" style={{fontSize: '0.85rem'}} name="eventTitle" maxLength="75" required placeholder="Tell attendees who is organizing this event." />
        </div>


        <p className={classes.para} style={{marginTop: '10px', marginBottom: '10px'}}>This profile describes a unique organizer and shows all of the events on one page. <a href="https://www.eventbrite.com/myprofile"><span style={{color: 'blue', textDecoration: 'underline' }}>View Organizer Info</span></a></p>


        <div style={{flexDirection: 'row', display: 'flex'}}>

        <div className={classes['form-group']}>
        <select ref={eventTypeRef} id="eventType" name="eventType">
          <option value="Type">Type</option>
          <option value="Appearance or Signing">Appearance or Signing</option>
          <option value="Attraction">Attraction</option>
          <option value="Camp, Trip or Retreat">Camp, Trip or Retreat</option>
          <option value="Class, Training or Workshop">Class, Training or Workshop</option>
          <option value="Concert or Performance">Concert or Performance</option>
          <option value="Conference">Conference</option>
          <option value="Convention">Convention</option>
          <option value="Dinner or Gala">Dinner or Gala</option>
          <option value="Festival or Fair">Festival or Fair</option>
          <option value="Game or Competition">Game or Competition</option>
          <option value="Meeting or Networking Event">Meeting or Networking Event</option>
          <option value="Other">Other</option>
          <option value="Party or Social Gathering">Party or Social Gathering</option>
          <option value="Race or Endurance event">Race or Endurance event</option>
          <option value="Rally">Rally</option>
          <option value="Screening">Screening</option>
          <option value="Seminar or Talk">Seminar or Talk</option>
          <option value="Tour">Tour</option>
          <option value="Tournament">Tournament</option>
          <option value="Trade Show, Consumer Show or Expo">Trade Show, Consumer Show or Expo</option>
          
        </select>
      </div>


      <div className={classes['form-group']}>
        <select ref={eventCategoryRef} id="eventCategory" name="eventCategory">
          <option value="">Category</option>
          <option value="1">Auto, Boat and Air</option>
          <option value="2">Business and Professional</option>
          <option value="3">Charity & Causes</option>
          <option value="3">Community and Culture</option>
          <option value="3">Family & Education</option>
          <option value="3">Fashion & Beauty</option>
          <option value="3">Film, Media & Entertainment</option>
          <option value="3">Food & Drink</option>
        </select>
      </div>

      </div>






      {/* TAGS INFORMATION ______________________________________________________________________________________________ */}



      <div >
      <h2 className={classes.secondaryTitle} >Tags</h2>
      <p className={classes.para} style={{marginBottom: '1rem', marginTop: '1rem'}}>Improve discoverability of your event by adding tags relevant to the subject matter.</p>
      <form onSubmit={handleAddTag}>
        <div style={{ flexDirection: "row", display: "flex", width: "100%", justifyContent: "center", alignContent: "center" }}>
          <div  className={classes.inputContainer} style={tagError ? { borderColor: 'red', width: "90%", marginRight: "1rem", marginTop: 0 } : { width: "90%", marginRight: "1rem", marginTop: 0 }}>
            <label className={classes.inputLabel} htmlFor="eventTag">Press Enter to add a tag.</label>
            <input type="text" style={{fontSize: '0.85rem'}} id="eventTag" name="eventTag" maxLength="30" required placeholder="Add a tag" value={inputValue} onChange={handleInputChange} onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)} />
          </div>
          <button  onClick={handleAddTag}  style={{ width: "10%", height: '3rem', justifySelf: 'center', alignSelf: 'center', backgroundColor: 'white', border: '2px solid rgb(160, 160, 160)', borderRadius: '5px', color: 'rgb(60, 60, 60)', fontWeight: 'bold'}} >
            Add
          </button>
        </div>
      </form>
      <div>
      <p style={{ color: 'red', width: '80%' }}>{tagError && "Tag already exists."}</p><p style={{textAlign: 'right'}}>{tagCount}/30</p>
        </div>
      
      {tags.length > 0 && (
        <ul style={{listStyle: 'none', flexDirection: 'row', display: 'flex', marginTop: '2rem'  }}>
          {tags.map((tag, index) => (
            <li key={index} style={{
              backgroundColor: 'rgb(232, 232, 232)',
              width: 'max-content',
              padding: '1rem',
              height: '2.5rem',
              marginRight: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '2rem'
            }}
            >
              {tag}
              <button style={{marginLeft: '5px', border: 'none', background: 'none'}} onClick={() => handleRemoveTag(tag)}>x</button>
            </li>
          ))}
        </ul>
      )}
    </div>




    </div>
    </div>


{/* 1st PART OF PAGE ____________________________________________________________________________________________________________________________ */}



{/* 2nd PART OF PAGE ____________________________________________________________________________________________________________________________ */}


<div style={{display: 'flex', flexDirection: 'row', paddingBottom: '4rem', borderBottom: '1px solid rgb(212, 212, 212)'}}>

<FontAwesomeIcon icon={faMapMarkerAlt} style={{color: '#d8d8d8', marginRight: '2rem', marginTop: '2rem'}} size="5x" />


{/* TITLE AND ORGANIZER INFORMATION ______________________________________________________________________________________________*/}
<div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>



        {/* LOCATION INFORMATION ______________________________________________________________________________________________ */}



        <div  >

        <h2 className={classes.title} style={{marginTop: '3rem'}}>Location</h2>
        <p className={classes.para} style={{marginBottom: '1rem'}}>Help people in the area discover your event and let attendees know where to show up.</p>
      
        <div style={{flexDirection: 'row', display: 'flex', width: '100%', marginBottom: '2rem'}}>
        <button type='button' className={myLocation === 'Venue' ? classes.active : classes.locationButton} onClick={() => {setMyLocation("Venue")}}   >
            Venue
        </button>

        <button type='button' className={myLocation === 'Online Event' ? classes.active : classes.locationButton} onClick={() => {setMyLocation("Online Event")}}   >
            Online Event
        </button>

        <button type='button' className={myLocation === 'To be announced' ? classes.active : classes.locationButton} onClick={() => {setMyLocation("To be announced")}}  >
            To be announced
        </button>
        
        
        </div>
        {
            myLocation === 'Venue' &&

        <React.Fragment>

<label className={classes.para} htmlFor="venueLocation"><b>Venue location</b></label>
      <div className={classes.inputContainer} >

        <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center', alignSelf: 'center', verticalAlign: 'center', flex: '1', minHeight: '3rem'}}>
      <FontAwesomeIcon icon={faSearch} style={{color: '#8d8d8d', justifySelf: 'center', alignSelf: 'center', marginRight: '1.5rem'}} />
        <input
          type="text"
          id="venueLocation"
          name="venueLocation"
          maxLength="75"
          required
          placeholder="Search for a venue or address."
          value={location}
          onChange={handleLocationChange}
          style={{fontSize: '0.85rem'}}
        />
        </div>
        {suggestions.length > 0 && (
          <div className={classes.selectContainer} ref={selectRef}>
            <select className={classes.select} size={suggestions.length}>
              {suggestions.map((suggestion) => (
                <option
                  key={suggestion.place_id}
                  value={suggestion.display_name}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {suggestion.display_name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
        </React.Fragment>

        }
        {
            myLocation === 'Online Event' &&

        <p>Online events have unique event pages where you can add links to livestreams and more</p>

        }


        
        </div>
        </div>
    </div>




{/* 2nd PART OF PAGE ____________________________________________________________________________________________________________________________ */}





{/* 3rd PART OF PAGE ____________________________________________________________________________________________________________________________ */}

<div style={{display: 'flex', flexDirection: 'row'}}>

<FontAwesomeIcon icon={faCalendarAlt } style={{color: '#d8d8d8', marginRight: '2rem', marginTop: '2rem'}} size="5x" />


{/* TITLE AND ORGANIZER INFORMATION ______________________________________________________________________________________________*/}
<div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>


        {/* DATE AND TIME INFORMATION ______________________________________________________________________________________________*/}


        <React.Fragment>

        <h2 className={classes.title}>Date & Time</h2>
        <p className={classes.para} style={{marginBottom: '1.5rem'}}>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
        <div style={{flexDirection: 'row', display: 'flex', width: '100%'}}>
        <button type='button' className={date === 'Single Event' ? classes.active : classes.locationButton} onClick={() => {setDate("Single Event")}}   >
            Single Event
        </button>

        <button type='button' className={date === 'Recurring Event' ? classes.active : classes.locationButton}   onClick={() => {setDate("Recurring Event")}}   >
            Recurring Event
        </button>

        </div>

        {
            date === "Single Event" ? 
        
<React.Fragment>
        <p className={classes.para} style={{marginBottom: '1rem', marginTop: '1rem'}} >Single event happens once and can last multiple days.</p>


        <div style={{flexDirection: 'row', display: 'flex', width: '100%'}}>
        <div className={classes.inputContainer} style={{marginRight: '1rem', marginBottom: '1rem', width: '40%'}}  >
        <label className={classes.inputLabel} >Event Starts</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        {/* <input className={classes['date-input']} ref={startDateRef} type="date" id="eventStarts" name="eventStarts" required /> */}
        </div>

        <div className={classes.inputContainer} style={{marginRight: '1rem', marginBottom: '1rem', width: '40%'}}  >
        <label className={classes.inputLabel} >Start Time</label>
        <select style={{maxHeight: '5rem'}} ref={startTimeRef} id="startTime" name="startTime">
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
</select>

        </div>
        </div>


        <div style={{flexDirection: 'row', display: 'flex', width: '100%', marginBottom: '1rem'}}>
        <div className={classes.inputContainer} style={{marginRight: '1rem', marginBottom: '1rem', width: '40%'}}  >
        <label className={classes.inputLabel}>Event Ends</label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
        {/* <input ref={endDateRef} type="date" id="eventStarts" name="eventEnds" required /> */}
        </div>

        <div className={classes.inputContainer} style={{marginRight: '1rem', marginBottom: '1rem', width: '40%'}}  >
        <label className={classes.inputLabel}>End Time</label>
        <select ref={endTimeRef} style={{maxHeight: '5rem'}} id="endTime" name="endTime">
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
</select>

        
        </div>
        </div>




        <div style={{flexDirection: 'row', display: 'flex', width: '100%', marginBottom: '1rem'}}>
  <input ref={displayStartRef} type="checkbox" id="displayStartTime" name="displayStartTime" style={{marginRight: '1rem', marginTop: 0}} />
  
  <div style={{flexDirection: 'column', display: 'flex', width: '100%'}}>
  
  <label style={{color: 'rgb(60, 60, 60)', fontWeight: 'normal'}} htmlFor="displayStartTime">Display start time.</label>
  <p className={classes.para}>
  The start time of your event will be displayed to attendees.
  </p>
  </div>
         
  </div>

  <div style={{flexDirection: 'row', display: 'flex', width: '100%', marginBottom: '1rem'}}>
  <input ref={displayEndRef} type="checkbox" id="displayEndTime" name="displayEndTime" style={{marginRight: '1rem', marginTop: 0}}  />
  <div style={{flexDirection: 'column', display: 'flex', width: '100%'}}>
  <label style={{color: 'rgb(60, 60, 60)', fontWeight: 'normal'}}  htmlFor="displayEndTime">Display end time.</label>
  <p className={classes.para}>
  The end time of your event will be displayed to attendees.
  </p>
  </div>
  </div>
  
    </React.Fragment>

    :

    <React.Fragment>
       <div style={{flexDirection: 'row', display: 'flex', width: '100%', marginBottom: '1rem', marginTop: '2rem'}}>
  <input ref={displayEndRef} type="checkbox" id="displayEndTime" name="displayEndTime" style={{marginRight: '1rem', marginTop: 0}}  />
  <div style={{flexDirection: 'column', display: 'flex', width: '100%'}}>
  <label style={{color: 'rgb(60, 60, 60)', fontWeight: 'normal'}}  htmlFor="displayEndTime">Display end time.</label>
  <p className={classes.para}>
  The end time of your event will be displayed to attendees.
  </p>
  </div>
  </div>
    </React.Fragment>

  }








    {/* TIMEZONE AND LANGUAGE INFORMATION */}





  <div style={{flexDirection: 'column', display: 'flex', width: '50%', marginBottom: '2rem'}}>

        <div className={classes.inputContainer}>
        
            <label className={classes.inputLabel}>Time Zone</label>
            <select ref={timeZoneRef} id="timeZone" name="timeZone">
  <option value="Pacific/Midway">(GMT-11:00) Midway Island</option>
  <option value="Pacific/Samoa">(GMT-11:00) Samoa</option>
  <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
  <option value="US/Alaska">(GMT-09:00) Alaska</option>
  <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US & Canada)</option>
  <option value="US/Arizona">(GMT-07:00) Arizona</option>
  <option value="America/Denver">(GMT-07:00) Mountain Time (US & Canada)</option>
  <option value="America/Chicago">(GMT-06:00) Central Time (US & Canada)</option>
  <option value="America/New_York">(GMT-05:00) Eastern Time (US & Canada)</option>
  <option value="America/Caracas">(GMT-04:00) Caracas</option>
  <option value="America/Santiago">(GMT-04:00) Santiago</option>
  <option value="America/Halifax">(GMT-04:00) Atlantic Time (Canada)</option>
  <option value="America/Buenos_Aires">(GMT-03:00) Buenos Aires</option>
  <option value="Atlantic/Cape_Verde">(GMT-01:00) Cape Verde Is.</option>
  <option value="Europe/London">(GMT) London, Edinburgh, Dublin, Lisbon</option>
  <option value="Europe/Paris">(GMT+01:00) Amsterdam, Berlin, Rome, Vienna</option>
  <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
  <option value="Europe/Moscow">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
  <option value="Asia/Dubai">(GMT+04:00) Abu Dhabi, Muscat</option>
  <option value="Asia/Kolkata">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
  <option value="Asia/Colombo">(GMT+05:30) Sri Jayawardenapura</option>
  <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
  <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
  <option value="Asia/Bangkok">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
  <option value="Asia/Hong_Kong">(GMT+08:00) Beijing, Hong Kong, Singapore</option>
  <option value="Asia/Tokyo">(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk</option>
  <option value="Australia/Adelaide">(GMT+10:30) Adelaide</option>
  <option value="Australia/Sydney">(GMT+11:00) Sydney, Melbourne, Brisbane</option>
  <option value="Pacific/Auckland">(GMT+12:00) Auckland, Wellington</option>
</select>

      </div>


      <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>Event Page Language</label>
      <select ref={languageRef} id="Language" name="Language">
  <option value="English US">English US</option>
  <option value="Chinese">Chinese</option>
  <option value="Spanish">Spanish</option>
  <option value="French">French</option>
  <option value="German">German</option>
  <option value="Japanese">Japanese</option>
  <option value="Korean">Korean</option>
  <option value="Portuguese">Portuguese</option>
  <option value="Russian">Russian</option>
  <option value="Arabic">Arabic</option>
</select>

      </div>

      </div>


      


      

      </React.Fragment>

      <button className={classes.active} type='submit'>SUBMIT</button>

      </div>
    </div>

    

{/* 3rd PART OF PAGE ____________________________________________________________________________________________________________________________ */}

    </form>
  );
};

export default CreateEventForm;
