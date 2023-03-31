import React, { useRef, useState, useEffect } from "react";
import classes from "./CreateEventForm.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faStickyNote,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Styles.css";


/**

Component for creating an event form.
@component
@returns {JSX.Element} - The rendered component.
*/

const CreateEventForm = () => {
  // ASSIGNING VARIABLES ______________________________________________________________________________________________________________________________
  
  /**
  A reference to the event title input field.
  @type {React.MutableRefObject}
  */
  const titleRef = useRef("");

  /**
A reference to the event organizer input field.
@type {React.MutableRefObject}
*/
const organizerRef = useRef("");
/**

A reference to the event type input field.
@type {React.MutableRefObject}
*/
const eventTypeRef = useRef("");
/**

The category of the event.
@type {string}
*/
const [eventCategory, setEventCategory] = useState("Category");
/**

The subcategory of the event.
@type {string}
*/
const [subCategory, setSubCategory] = useState("Sub Category");
/**

The start time of the event.
@type {string}
*/
const [startTime, setStartTime] = useState("12 AM");
/**

The end time of the event.
@type {string}
*/
const [endTime, setEndime] = useState("12 AM");
/**

Indicates whether to display the start time of the event.
@type {boolean}
*/
const [displayStart, setDisplayStart] = useState(false);
/**

A reference to the checkbox indicating whether to display the end time of the event.
@type {React.MutableRefObject}
*/
const displayEndRef = useRef(false);
/**

A reference to the time zone input field.
@type {React.MutableRefObject}
*/
const timeZoneRef = useRef("");
/**

A reference to the language input field.
@type {React.MutableRefObject}
*/
const languageRef = useRef("");

  

  // ________________________________________________________________________________________________________________________________________________

  // TAG FUNCTIONALITY_____________________________________________________________________________________________________________________________

  /**
   * An array of tags
   * @property {string[]} tags
   */
  const [tags, setTags] = useState([]);

  /** The current input value for adding a new tag.
   * @property {string} inputValue
   */
  const [inputValue, setInputValue] = useState("");

  /** Indicates whether there is an error with the tags
   * @property {boolean} tagError
   */
  const [tagError, setTagError] = useState(false);

  /**The current count of tags, or null if not yet initialized.
   * @property {number | null} tagCount
   */
  const [tagCount, setTagCount] = useState(null);


  /** Handles changes to the input value for adding a new tag.
   * @param {Event} event - The input change event.
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value); /* The updated input value. */
    setTagCount(event.target.value.length); /* The length of the updated input value. */
  };


  /** Handles the addition of a new tag to the form tags state.
   * @param {Event} event - The form submission event.
   */
  const handleAddTag = (event) => {
    event.preventDefault();
    setTagCount(0);
    const newTag = inputValue.trim(); /* The new tag to be added to the tags state. */

    if (newTag !== "" && !tags.includes(newTag)) {
      setTagError(false);
      setTags([...tags, newTag]);
      setInputValue("");
    } else setTagError(true);
  };

  /** Handles the removal of a tag from the form tags state.
   * @param {string} tagToRemove - The tag to be removed from the tags state.
   */
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  // ________________________________________________________________________________________________________________________________________________

  // LOCATION FUNCTIONALITY__________________________________________________________________________________________________________________________
  
  /**

The selected location type for the event.
@type {string}
*/
const [myLocation, setMyLocation] = useState("Venue");
/**

The location for the event.
@type {string}
*/
const [location, setLocation] = useState("");
/**

An array of suggested locations based on the current input value.
@type {string[]}
*/
const [suggestions, setSuggestions] = useState([]);
/**

A reference to the select element for the location suggestions.
@type {Object}
*/
const selectRef = useRef(null);

/* A side effect that listens for clicks outside of the location select element and hides the suggestions list when detected.*/
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

  /** Handles changes to the location input field and retrieves location suggestions from the OpenStreetMap API.
   * @param {Object} event - The input change event.
   */
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
        .catch((error) => {});
    } else {
      setSuggestions([]);
    }
  };

  /** Handles the selection of a location suggestion and sets the location state to the suggestion's display name.
   * @param {Object} suggestion - The selected location suggestion object.
   */
  const handleSelectSuggestion = (suggestion) => {
    setLocation(suggestion.display_name);
    setSuggestions([]);
  };
  // ________________________________________________________________________________________________________________________________________________

  // DATE & TIME FUNCTIONALITY_______________________________________________________________________________________________________________________

  /**
 * State hook that sets the date type for the event.
 * @type {[string, function]} Array that contains the current value and a function to update it.
 */
const [date, setDate] = useState("Single Event");

/**
 * State hook that sets the start date for the event.
 * @type {[object, function]} Array that contains the current date object and a function to update it.
 */
const [startDate, setStartDate] = useState(new Date());

/**
 * State hook that sets the end date for the event.
 * @type {[object, function]} Array that contains the current date object and a function to update it.
 */
const [endDate, setEndDate] = useState(new Date());
  // ________________________________________________________________________________________________________________________________________________

  // SUBMIT HANDLING_________________________________________________________________________________________________________________________________

  /**  * Function to handle form submission and display form data
 * @param {Event} event - The submit event from the form
 */
  function submitHandler(event) {
    event.preventDefault();
    const data = {
      Title: titleRef.current.value,
      Organizer: organizerRef.current.value,
      EventType: eventTypeRef.current.value,
      EventCategory: eventCategory,
      subCategory: subCategory,
      Tags: tags,
      Location: location,
      StartDate: startDate,
      StartTime: startTime,
      EndDate: endDate,
      EndTime: endTime,
      DisplayStartTime: displayStart,
      DisplayEndTime: displayEndRef.current.checked,
      TimeZone: timeZoneRef.current.value,
      Language: languageRef.current.value,
    };

    // DISPLAYING DATA_____________________________________________________________________________________________________________________________

    /**
   * Log form data to console
   * @param {string} data.Title - The title of the event
   * @param {string} data.Organizer - The organizer of the event
   * @param {string} data.EventType - The type of the event
   * @param {string} data.EventCategory - The category of the event
   * @param {string} data.subCategory - The subcategory of the event (if applicable)
   * @param {array} data.Tags - The tags associated with the event
   * @param {string} data.Location - The location of the event
   * @param {Date} data.StartDate - The start date of the event
   * @param {string} data.StartTime - The start time of the event
   * @param {Date} data.EndDate - The end date of the event
   * @param {string} data.EndTime - The end time of the event
   * @param {boolean} data.DisplayStartTime - Whether to display the start time of the event
   * @param {boolean} data.DisplayEndTime - Whether to display the end time of the event
   * @param {string} data.TimeZone - The timezone of the event
   * @param {string} data.Language - The language of the event
   */

    console.log(
      "Title: " +
        data.Title +
        "\nOrganizer: " +
        data.Organizer +
        (data.EventType !== "Type" ? "\nEvent Type: " + data.EventType : "") +
        (data.EventCategory !== "Category"
          ? "\nEvent Category: " + data.EventCategory
          : "") +
        (data.subCategory !== "Sub Category" && data.EventCategory !== 'Other'
          ? "\nSub Category: " + data.subCategory
          : "") +
        (data.Tags.length > 0 ? "\nTags: " + data.Tags : "") +
        (myLocation === "Venue" && "\nLocation: " + data.Location) +
        (date === "Single Event"
          ? "\nStartDate: " +
            data.StartDate +
            "\nStartTime: " +
            data.StartTime +
            "\nEndDate: " +
            data.EndDate +
            "\nEndTime: " +
            data.EndTime +
            "\nDisplay Start Time: " +
            data.DisplayStartTime
          : "") +
        "\nDisplay End Time: " +
        data.DisplayEndTime +
        "\nTimeZone: " +
        data.TimeZone +
        "\nLanguage: " +
        data.Language
    );

    console.log(data);
  }

  // ________________________________________________________________________________________________________________________________________________

  // TITLE ERROR VALIDATION__________________________________________________________________________________________________________________________

  /** 
   * @property {string} value - The current value of the input field.
   * @property {function} setValue - A function that updates the current value of the input field. 
   */
  const [value, setValue] = useState("");

  /**
   * @property {boolean} error - A boolean value indicating whether there is an error in the input field.
   * @property {function} setError - A function that sets the error state.
   */
  const [error, setError] = useState(false);

  /**
   * @property {number} count - The current count of the input field value.
   * @property {function} setCount - A function that updates the count state.
   */
  const [count, setCount] = useState(0);

  /**
   * @property {boolean} isFocused - A boolean value indicating whether the input field is currently focused.
   * @property {function} setIsFocused - A function that updates the focus state of the input
   */
  const [isFocused, setIsFocused] = useState(false);


  /**
 * Function that handles the onBlur event of the input field.
 * If the input field value is empty, sets the error state to true.
 * Sets isFocused state to false.
 */
  const handleBlur = () => {
    if (value.trim().length === 0) {
      setError(true);
    }
    setIsFocused(false);
  };

  /**
 * Function that handles the onFocus event of the input field.
 * Sets isFocused state to true.
 */
  const handleFocus = () => {
    setIsFocused(true);
  };

  /**
 * Function that handles the onChange event of the input field.
 * Sets the value state to the new input value.
 * Sets the count state to the length of the new input value.
 * If the input value is not empty, sets the error state to false.
 * @param {Object} event - The event object.
 */
  const handleChange = (event) => {
    setValue(event.target.value);
    setCount(event.target.value.length);
    if (event.target.value.trim().length > 0) {
      setError(false);
    }
  };
  // ________________________________________________________________________________________________________________________________________________

  /**
 * useEffect hook that runs on mount and when eventCategory state changes.
 * If the eventCategory is "Category" or "Other", sets the subCategory state to "Sub Category".
 * @param {string} eventCategory - The current event category.
 */
  useEffect(() => {
    if (eventCategory === "Category") {
      setSubCategory("Sub Category");
    }
    if (eventCategory === "Other") {
      setSubCategory("Sub Category");
    }
  }, [eventCategory]);

  // DISPLAYING ITEMS_________________________________________________________________________________________________________________________________
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* 1st PART OF PAGE _______________________________________________________________________________________________________________________________ */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgb(212, 212, 212)",
        }}
      >
        <FontAwesomeIcon
          icon={faStickyNote}
          style={{ color: "#d8d8d8", marginRight: "2rem", marginTop: "2rem" }}
          size="5x"
        />

        {/* TITLE AND ORGANIZER INFORMATION ____________________________________*/}

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <h2 className={classes.title}>Basic Info</h2>
          <p className={classes.para}>
            Name your event and tell event-goers why they should come. Add
            details that highlight what makes it unique.
          </p>

          <div
            className={classes.inputContainer}
            style={{
              border: `1px solid ${
                isFocused ? "blue" : error ? "red" : "rgb(212, 212, 212)"
              }`,
              padding: "0.5rem",
            }}
            onClick={() => titleRef.current.focus()}
            onMouseOver={(e) => {
              e.currentTarget.style.border = `1px solid ${
                error ? "red" : "gray"
              }`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = "1px solid rgb(212, 212, 212)";
            }}
          >
            <label
              style={{
                color: `${isFocused ? "blue" : error ? "red" : "#8d8d8d"}`,
              }}
              className={classes.inputLabel}
            >
              Event Title *
            </label>
            <input
              ref={titleRef}
              style={{ fontSize: "0.85rem" }}
              type="text"
              id="eventTitle"
              name="eventTitle"
              maxLength="75"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
              placeholder="Be clear and descriptive."
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "red", width: "80%" }}>
              {error && "Title is required."}
            </p>
            <p style={{ textAlign: "right" }}>{count}/75</p>
          </div>

          <div
            className={classes.inputContainer}
            onClick={() => organizerRef.current.focus()}
          >
            <label className={classes.inputLabel}>Organizer</label>
            <input
              ref={organizerRef}
              type="text"
              id="eventTitle"
              style={{ fontSize: "0.85rem" }}
              name="eventTitle"
              maxLength="75"
              required
              placeholder="Tell attendees who is organizing this event."
            />
          </div>

          <p
            className={classes.para}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            This profile describes a unique organizer and shows all of the
            events on one page.{" "}
            <a href="https://www.eventbrite.com/myprofile">
              <span style={{ color: "blue", textDecoration: "underline" }}>
                View Organizer Info
              </span>
            </a>
          </p>

          <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
            <div
              className={classes.inputContainer}
              style={{ marginRight: "1rem", padding: "5px", width: "33%" }}
            >
              <div className={classes["form-group"]}>
                <select
                  ref={eventTypeRef}
                  id="eventType"
                  name="eventType"
                  required
                >
                  <option value="Type">Type</option>
                  <option value="Appearance or Signing">
                    Appearance or Signing
                  </option>
                  <option value="Attraction">Attraction</option>
                  <option value="Camp, Trip or Retreat">
                    Camp, Trip or Retreat
                  </option>
                  <option value="Class, Training or Workshop">
                    Class, Training or Workshop
                  </option>
                  <option value="Concert or Performance">
                    Concert or Performance
                  </option>
                  <option value="Conference">Conference</option>
                  <option value="Convention">Convention</option>
                  <option value="Dinner or Gala">Dinner or Gala</option>
                  <option value="Festival or Fair">Festival or Fair</option>
                  <option value="Game or Competition">
                    Game or Competition
                  </option>
                  <option value="Meeting or Networking Event">
                    Meeting or Networking Event
                  </option>
                  <option value="Other">Other</option>
                  <option value="Party or Social Gathering">
                    Party or Social Gathering
                  </option>
                  <option value="Race or Endurance event">
                    Race or Endurance event
                  </option>
                  <option value="Rally">Rally</option>
                  <option value="Screening">Screening</option>
                  <option value="Seminar or Talk">Seminar or Talk</option>
                  <option value="Tour">Tour</option>
                  <option value="Tournament">Tournament</option>
                  <option value="Trade Show, Consumer Show or Expo">
                    Trade Show, Consumer Show or Expo
                  </option>
                </select>
              </div>
            </div>

            <div
              className={classes.inputContainer}
              style={{ padding: "5px", width: "33%" }}
            >
              <div className={classes["form-group"]}>
                <select
                  onChange={(d) => {
                    setEventCategory(d.target.value);
                  }}
                  id="eventCategory"
                  name="eventCategory"
                >
                  <option value="Category">Category</option>
                  <option value="Auto, Boat and Air">Auto, Boat and Air</option>
                  <option value="Business and Professional">
                    Business and Professional
                  </option>
                  <option value="Charity & Causes">Charity & Causes</option>
                  <option value="Community and Culture">
                    Community and Culture
                  </option>
                  <option value="Family & Education">Family & Education</option>
                  <option value="Fashion & Beauty">Fashion & Beauty</option>
                  <option value="Film, Media & Entertainment">
                    Film, Media & Entertainment
                  </option>
                  <option value="Food & Drink">Food & Drink</option>

                  <option value="Government & Politics">Government & Politics</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Hobbies & Special Interest">Hobbies & Special Interest</option>
                  <option value="Home & Lifestyle">Home & Lifestyle</option>
                  <option value="Music">Music</option>
                  <option value="Performing & Visual Arts">Performing & Visual Arts</option>
                  <option value="Religion & Spirituality">Religion & Spirituality</option>
                  <option value="School Activities">School Activities</option>
                  <option value="Science & Technology">Science & Technology</option>
                  <option value="Seasional & Holiday">Seasional & Holiday</option>
                  <option value="Sports & Fitness">Sports & Fitness</option>
                  <option value="Travel & Outdoor">Travel & Outdoor</option>
                  <option value="Other">Other</option>

                </select>
              </div>
            </div>

            {eventCategory === "Government & Politics" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Country / Muncipal Government">Country / Muncipal Government</option>
                    <option value="Democratic Party">Democratic Party</option>
                    <option value="Federal Government">Federal Government</option>
                    <option value="International Affairs">International Affairs</option>
                    <option value="Military">Military</option>
                    <option value="National Security">National Security</option>
                    <option value="Non-partisan">Non-partisan</option>
                    <option value="Others">Others</option>
                    <option value="Other Party">Other Party</option>
                    <option value="Republican Party">Republican Party</option>
                    <option value="State Government">State Government</option>
                  </select>
                </div>
              </div>
            )}

{eventCategory === "Health & Wellness" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Medical">Medical</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Others">Others</option>
                    <option value="Personal Health">Personal Health</option>
                    <option value="Spa">Spa</option>
                    <option value="Yoga">Yoga</option>
                  </select>
                </div>
              </div>
            )}



{eventCategory === "Hobbies & Special Interest" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Adult">Adult</option>
                    <option value="Anime / Comics">Anime / Comics</option>
                    <option value="Books">Books</option>
                    <option value="DIY">DIY</option>
                    <option value="Drawings & Paintings">Drawings & Paintings</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Knitting">Knitting</option>
                    <option value="Other">Other</option>
                    <option value="Photography">Photography</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Home & Lifestyle" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Dating">Dating</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Other">Other</option>
                    <option value="Pets & Animal">Pets & Animal</option>
                  </select>
                </div>
              </div>
            )}



{eventCategory === "Music" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Acoustic">Acoustic</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Americana">Americana</option>
                    <option value="Bluegrass">Bluegrass</option>
                    <option value="Blues">Blues</option>
                    <option value="Blues & Jazz">Blues & Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Country">Country</option>
                    <option value="Cultural">Cultural</option>
                    <option value="DJ / Dance">DJ / Dance</option>
                    <option value="EDM">EDM</option>
                    <option value="EDM / Electronic">EDM / Electronic</option>
                    <option value="Experimental">Experimental</option>
                    <option value="Folk">Folk</option>
                    <option value="Hip Hop / Rap">Hip Hop / Rap</option>
                    <option value="Indie">Indie</option>
                    <option value="Jazz">Jazz</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Other" && (
  <div>
  </div>
)}






{eventCategory === "Performing & Visual Arts" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Ballet">Ballet</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Craft">Craft</option>
                    <option value="Dance">Dance</option>
                    <option value="Design">Design</option>
                    <option value="Fine Art">Fine Art</option>
                    <option value="Jewelery">Jewelery</option>
                    <option value="Literary Arts">Literary Arts</option>
                    <option value="Musical">Musical</option>
                    <option value="Opera">Opera</option>
                    <option value="Orchestra">Orchestra</option>
                    <option value="Other">Other</option>
                    <option value="Painting">Painting</option>
                    <option value="Sculpture">Sculpture</option>
                    <option value="Theater">Theater</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Religion & Spirituality" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Agnosticism">Agnosticism</option>
                    <option value="Athiesm">Athiesm</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Eastern Religion">Eastern Religion</option>
                    <option value="Folk Religions">Folk Religions</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Islam">Islam</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Mormonism">Mormonism</option>
                    <option value="Mysticism and Occult">Mysticism and Occult</option>
                    <option value="New Age">New Age</option>
                    <option value="Other">Other</option>
                    <option value="Shintoism">Shintoism</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Unaffiliated">Unaffiliated</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "School Activities" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="After School Care">After School Care</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Fund Raiser">Fund Raiser</option>
                    <option value="Parking">Parking</option>
                    <option value="Public Speaker">Public Speaker</option>
                    <option value="Raffle">Raffle</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Science & Technology" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="BioTech">BioTech</option>
                    <option value="HiTech">HiTech</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Other">Other</option>
                    <option value="Robotics">Robotics</option>
                    <option value="Science">Science</option>
                    <option value="Social Media">Social Media</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Seasional & Holiday" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Channukah">Channukah</option>
                    <option value="Christmas">Christmas</option>
                    <option value="Easter">Easter</option>
                    <option value="Fall Events">Fall Events</option>
                    <option value="Halloween / Haunt">Halloween / Haunt</option>
                    <option value="Independence Day">Independence Day</option>
                    <option value="New Years Eve">New Years Eve</option>
                    <option value="Other">Other</option>
                    <option value="Saint Patrics Day">Saint Patrics Day</option>
                    <option value="Thanksgiving">Thanksgiving</option>
                  </select>
                </div>
              </div>
            )}




{eventCategory === "Sports & Fitness" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Baseball">Baseball</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Camps">Camps</option>
                    <option value="Cheer">Cheer</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Exercise">Exercise</option>
                    <option value="Fighting & Martial Arts">Fighting & Martial Arts</option>
                    <option value="Football">Football</option>
                    <option value="Golf">Golf</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}



{eventCategory === "Travel & Outdoor" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Canoeing">Canoeing</option>
                    <option value="Climbing">Climbing</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Kayaking">Kayaking</option>
                    <option value="Other">Other</option>
                    <option value="Rafting">Rafting</option>
                    <option value="Travel">Travel</option>
                  </select>
                </div>
              </div>
            )}



            {eventCategory === "Auto, Boat and Air" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Air">Air</option>
                    <option value="Auto">Auto</option>
                    <option value="Boat">Boat</option>
                    <option value="Motorcycle/ATV">Motorcycle/ATV</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Business and Professional" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Careers">Careers</option>
                    <option value="Design">Design</option>
                    <option value="Educators">Educators</option>
                    <option value="Environment & Sustainability">
                      Environment & Sustainability
                    </option>
                    <option value="Finance">Finance</option>
                    <option value="Investment">Investment</option>
                    <option value="Media">Media</option>
                    <option value="Non Profit & NGO's">
                      Non Profit & NGO's
                    </option>
                    <option value="Other">Other</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Startups and Small Businesses">
                      Startups and Small Businesses
                    </option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Charity & Causes" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Animal Welfare">Animal Welfare</option>
                    <option value="Disaster Relief">Disaster Relief</option>
                    <option value="Education">Education</option>
                    <option value="Environment">Environment</option>
                    <option value="Relief Care">Relief Care</option>
                    <option value="Human Right">Human Right</option>
                    <option value="International Aid">International Aid</option>
                    <option value="Others">Others</option>
                    <option value="Poverty">Poverty</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Community and Culture" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="City/Town">City/Town</option>
                    <option value="Country">Country</option>
                    <option value="Heritage">Heritage</option>
                    <option value="Historic">Historic</option>
                    <option value="LGBT">LGBT</option>
                    <option value="Language">Language</option>
                    <option value="Medieval">Medieval</option>
                    <option value="Nationality">Nationality</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Family & Education" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Baby">Baby</option>
                    <option value="Children/Youth">Children/Youth</option>
                    <option value="Education">Education</option>
                    <option value="Parenting">Parenting</option>
                    <option value="Parents Association">
                      Parents Association
                    </option>
                    <option value="Reunion">Reunion</option>
                    <option value="Senior Citizen">Senior Citizen</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Fashion & Beauty" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Film, Media & Entertainment" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Adult">Adult</option>
                    <option value="Anime">Anime</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Comics">Comics</option>
                    <option value="Film">Film</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Other">Other</option>
                    <option value="TV">TV</option>
                  </select>
                </div>
              </div>
            )}

            {eventCategory === "Food & Drink" && (
              <div
                className={classes.inputContainer}
                style={{ marginLeft: "1rem", padding: "5px", width: "33%" }}
              >
                <div className={classes["form-group"]}>
                  <select
                    onChange={(d) => {
                      setSubCategory(d.target.value);
                    }}
                    id="subCategory"
                    name="subCategory"
                  >
                    <option value="Sub Category">Sub Category</option>
                    <option value="Beer">Beer</option>
                    <option value="Food">Food</option>
                    <option value="Others">Others</option>
                    <option value="Spirits">Spirits</option>
                    <option value="Wine">Wine</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* TAGS INFORMATION __________________________________________ */}

          <div>
            <h2 className={classes.secondaryTitle}>Tags</h2>
            <p
              className={classes.para}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              Improve discoverability of your event by adding tags relevant to
              the subject matter.
            </p>
            <div>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <div
                  className={classes.inputContainer}
                  style={
                    tagError
                      ? {
                          borderColor: "red",
                          width: "90%",
                          marginRight: "1rem",
                          marginTop: 0,
                        }
                      : { width: "90%", marginRight: "1rem", marginTop: 0 }
                  }
                >
                  <label className={classes.inputLabel} htmlFor="eventTag">
                    Press Enter to add a tag.
                  </label>
                  <input
                    type="text"
                    style={{ fontSize: "0.85rem" }}
                    id="eventTag"
                    name="eventTag"
                    maxLength="30"
                    placeholder="Add a tag"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)}
                  />
                </div>
                <button
                  type="tag"
                  onClick={handleAddTag}
                  style={{
                    width: "10%",
                    height: "3rem",
                    justifySelf: "center",
                    alignSelf: "center",
                    backgroundColor: "white",
                    border: "2px solid rgb(160, 160, 160)",
                    borderRadius: "5px",
                    color: "rgb(60, 60, 60)",
                    fontWeight: "bold",
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <div>
              <p style={{ color: "red", width: "80%" }}>
                {tagError && "Tag already exists."}
              </p>
              <p style={{ textAlign: "right" }}>{tagCount}/30</p>
            </div>

            <div style={{ width: "100%", justifyItems: "left" }}>
              {tags.length > 0 && (
                <ul
                  style={{
                    listStyle: "none",
                    flexDirection: "row",
                    display: "flex",
                    marginTop: "2rem",
                    flexWrap: "wrap",
                  }}
                >
                  {tags.map((tag, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor: "rgb(232, 232, 232)",
                        width: "max-content",
                        padding: "1rem",
                        height: "2.5rem",
                        // marginRight: '1rem',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        borderRadius: "2rem",
                        margin: "0.3rem",
                      }}
                    >
                      {tag}
                      <button
                        type="tag"
                        style={{
                          marginLeft: "5px",
                          border: "none",
                          background: "none",
                        }}
                        onClick={() => handleRemoveTag(tag)}
                      >
                        x
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/*________________________________________________________________________________________________________________________________________________ */}

      {/* 2nd PART OF PAGE _____________________________________________________________________________________________________________________________ */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgb(212, 212, 212)",
        }}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{ color: "#d8d8d8", marginRight: "2rem", marginTop: "2rem" }}
          size="5x"
        />

        {/* TITLE AND ORGANIZER INFORMATION _______________________________________________*/}
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {/* LOCATION INFORMATION _________________________________________________ */}

          <div>
            <h2 className={classes.title} style={{ marginTop: "3rem" }}>
              Location
            </h2>
            <p className={classes.para} style={{ marginBottom: "1rem" }}>
              Help people in the area discover your event and let attendees know
              where to show up.
            </p>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <button
                type="button"
                className={
                  myLocation === "Venue"
                    ? classes.active
                    : classes.locationButton
                }
                onClick={() => {
                  setMyLocation("Venue");
                }}
              >
                Venue
              </button>

              <button
                type="button"
                className={
                  myLocation === "Online Event"
                    ? classes.active
                    : classes.locationButton
                }
                onClick={() => {
                  setMyLocation("Online Event");
                }}
              >
                Online Event
              </button>

              <button
                type="button"
                className={
                  myLocation === "To be announced"
                    ? classes.active
                    : classes.locationButton
                }
                onClick={() => {
                  setMyLocation("To be announced");
                }}
              >
                To be announced
              </button>
            </div>
            {myLocation === "Venue" && (
              <React.Fragment>
                <label className={classes.para} htmlFor="venueLocation">
                  <b>Venue location</b>
                </label>
                <div className={classes.inputContainer}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifySelf: "center",
                      alignSelf: "center",
                      verticalAlign: "center",
                      flex: "1",
                      minHeight: "3rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{
                        color: "#8d8d8d",
                        justifySelf: "center",
                        alignSelf: "center",
                        marginRight: "1.5rem",
                      }}
                    />
                    <input
                      type="text"
                      id="venueLocation"
                      name="venueLocation"
                      maxLength="75"
                      required
                      placeholder="Search for a venue or address."
                      value={location}
                      onChange={handleLocationChange}
                      style={{ fontSize: "0.85rem" }}
                    />
                  </div>
                  {suggestions.length > 0 && (
                    <div className={classes.selectContainer} ref={selectRef}>
                      <select
                        className={classes.select}
                        size={suggestions.length}
                      >
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
            )}
            {myLocation === "Online Event" && (
              <p>
                Online events have unique event pages where you can add links to
                livestreams and more
              </p>
            )}
          </div>
        </div>
      </div>

      {/*________________________________________________________________________________________________________________________________________________*/}

      {/* 3rd PART OF PAGE _____________________________________________________________________________________________________________________________ */}

      <div style={{ display: "flex", flexDirection: "row" }}>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          style={{ color: "#d8d8d8", marginRight: "2rem", marginTop: "2rem" }}
          size="5x"
        />

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {/* DATE AND TIME INFORMATION _________________________________________________________________*/}

          <React.Fragment>
            <h2 className={classes.title}>Date & Time</h2>
            <p className={classes.para} style={{ marginBottom: "1.5rem" }}>
              Tell event-goers when your event starts and ends so they can make
              plans to attend.
            </p>
            <div
              style={{ flexDirection: "row", display: "flex", width: "100%" }}
            >
              <button
                type="button"
                className={
                  date === "Single Event"
                    ? classes.active
                    : classes.locationButton
                }
                onClick={() => {
                  setDate("Single Event");
                }}
              >
                Single Event
              </button>

              <button
                type="button"
                className={
                  date === "Recurring Event"
                    ? classes.active
                    : classes.locationButton
                }
                onClick={() => {
                  setDate("Recurring Event");
                }}
              >
                Recurring Event
              </button>
            </div>

            {date === "Single Event" ? (
              <React.Fragment>
                <p
                  className={classes.para}
                  style={{ marginBottom: "1rem", marginTop: "1rem" }}
                >
                  Single event happens once and can last multiple days.
                </p>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    className={classes.inputContainer}
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "40%",
                    }}
                  >
                    <label className={classes.inputLabel}>Event Starts</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>

                  <div
                    className={classes.inputContainer}
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "40%",
                    }}
                  >
                    <label className={classes.inputLabel}>Start Time</label>
                    <select
                      style={{ maxHeight: "5rem" }}
                      onChange={(date) => setStartTime(date.target.value)}
                      id="startTime"
                      name="startTime"
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
                    className={classes.inputContainer}
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "40%",
                    }}
                  >
                    <label className={classes.inputLabel}>Event Ends</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>

                  <div
                    className={classes.inputContainer}
                    style={{
                      marginRight: "1rem",
                      marginBottom: "1rem",
                      width: "40%",
                    }}
                  >
                    <label className={classes.inputLabel}>End Time</label>
                    <select
                      onChange={(date) => setEndime(date.target.value)}
                      style={{ maxHeight: "5rem" }}
                      id="endTime"
                      name="endTime"
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
                  <input
                    onChange={(date) => setDisplayStart(!displayStart)}
                    type="checkbox"
                    id="displayStartTime"
                    name="displayStartTime"
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
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal" }}
                      htmlFor="displayStartTime"
                    >
                      Display start time.
                    </label>
                    <p className={classes.para}>
                      The start time of your event will be displayed to
                      attendees.
                    </p>
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
                  <input
                    ref={displayEndRef}
                    type="checkbox"
                    id="displayEndTime"
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
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal" }}
                      htmlFor="displayEndTime"
                    >
                      Display end time.
                    </label>
                    <p className={classes.para}>
                      The end time of your event will be displayed to attendees.
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
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
                    ref={displayEndRef}
                    type="checkbox"
                    id="displayEndTime"
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
                      style={{ color: "rgb(60, 60, 60)", fontWeight: "normal" }}
                      htmlFor="displayEndTime"
                    >
                      Display end time.
                    </label>
                    <p className={classes.para}>
                      The end time of your event will be displayed to attendees.
                    </p>
                  </div>
                </div>
              </React.Fragment>
            )}

            {/* TIMEZONE AND LANGUAGE INFORMATION __________________________________________*/}

            <div
              style={{
                flexDirection: "column",
                display: "flex",
                width: "50%",
                marginBottom: "2rem",
              }}
            >
              <div className={classes.inputContainer}>
                <label className={classes.inputLabel}>Time Zone</label>
                <select ref={timeZoneRef} id="timeZone" name="timeZone">
                  <option value="(GMT-11:00) Midway Island">
                    (GMT-11:00) Midway Island
                  </option>
                  <option value="(GMT-11:00) Samoa">(GMT-11:00) Samoa</option>
                  <option value="(GMT-10:00) Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="GMT-09:00) Alaska">(GMT-09:00) Alaska</option>
                  <option value="(GMT-08:00) Pacific Time (US & Canada)">
                    (GMT-08:00) Pacific Time (US & Canada)
                  </option>
                  <option value="(GMT-07:00) Arizona">
                    (GMT-07:00) Arizona
                  </option>
                  <option value="(GMT-07:00) Mountain Time (US & Canada)">
                    (GMT-07:00) Mountain Time (US & Canada)
                  </option>
                  <option value="(GMT-06:00) Central Time (US & Canada)">
                    (GMT-06:00) Central Time (US & Canada)
                  </option>
                  <option value="(GMT-05:00) Eastern Time (US & Canada)">
                    (GMT-05:00) Eastern Time (US & Canada)
                  </option>
                  <option value="(GMT-04:00) Caracas">
                    (GMT-04:00) Caracas
                  </option>
                  <option value="(GMT-04:00) Santiago">
                    (GMT-04:00) Santiago
                  </option>
                  <option value="(GMT-04:00) Atlantic Time (Canada)">
                    (GMT-04:00) Atlantic Time (Canada)
                  </option>
                  <option value="(GMT-03:00) Buenos Aires">
                    (GMT-03:00) Buenos Aires
                  </option>
                  <option value="(GMT-01:00) Cape Verde Is.">
                    (GMT-01:00) Cape Verde Is.
                  </option>
                  <option value="(GMT) London, Edinburgh, Dublin, Lisbon">
                    (GMT) London, Edinburgh, Dublin, Lisbon
                  </option>
                  <option value="(GMT+01:00) Amsterdam, Berlin, Rome, Vienna">
                    (GMT+01:00) Amsterdam, Berlin, Rome, Vienna
                  </option>
                  <option value="(GMT+02:00) Cairo">(GMT+02:00) Cairo</option>
                  <option value="(GMT+03:00) Moscow, St. Petersburg, Volgograd">
                    (GMT+03:00) Moscow, St. Petersburg, Volgograd
                  </option>
                  <option value="(GMT+04:00) Abu Dhabi, Muscat">
                    (GMT+04:00) Abu Dhabi, Muscat
                  </option>
                  <option value="(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi">
                    (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                  </option>
                  <option value="(GMT+05:30) Sri Jayawardenapura">
                    (GMT+05:30) Sri Jayawardenapura
                  </option>
                  <option value="(GMT+05:45) Kathmandu">
                    (GMT+05:45) Kathmandu
                  </option>
                  <option value="(GMT+06:00) Astana, Dhaka">
                    (GMT+06:00) Astana, Dhaka
                  </option>
                  <option value="(GMT+07:00) Bangkok, Hanoi, Jakarta">
                    (GMT+07:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="(GMT+08:00) Beijing, Hong Kong, Singapore">
                    (GMT+08:00) Beijing, Hong Kong, Singapore
                  </option>
                  <option value="(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk">
                    (GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk
                  </option>
                  <option value="(GMT+10:30) Adelaide">
                    (GMT+10:30) Adelaide
                  </option>
                  <option value="(GMT+11:00) Sydney, Melbourne, Brisbane">
                    (GMT+11:00) Sydney, Melbourne, Brisbane
                  </option>
                  <option value="(GMT+12:00) Auckland, Wellington">
                    (GMT+12:00) Auckland, Wellington
                  </option>
                </select>
              </div>

              <div className={classes.inputContainer}>
                <label className={classes.inputLabel}>
                  Event Page Language
                </label>
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

          <button
            className={classes.active}
            type="submit"
            style={{
              alignSelf: "center",
              transition: "transform 0.1s linear",
              scale: "1.2",
              marginTop: "2rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* ___________________________________________________________________________________________________________________________________________ */}
    </form>
  );
};

export default CreateEventForm;

// ___________________________________________________________ THE END ___________________________________________________________________________
