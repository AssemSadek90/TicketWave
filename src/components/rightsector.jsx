// // import React from "react";
// // var EventID = "";
// //   var Image = "";
// //   var Title = EventData.EventName;
// //   var EventState = "";
// //   var EventDate = "Date";
// //   var Price =" Price";
// //   var Availability = "Availability";
// // function RightSector(props){
// //     return(
 
// //     <section className="event-preview-card__content">
// //     <h1 className='eds-text-bl'> {Title}</h1>
// //     <div  className="event-preview-card__date eds-text--truncate eds-l-mar-top-1">{EventDate}</div>
// //     <div className="event-preview-card__venue eds-text--truncate eds-l-mar-top-1">{EventState}</div>
// //     <div className='eds-vector-image'>
// //     <svg  className='icon-1'    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,10V6c0-1.11-0.9-2-2-2H4C2.9,4,2.01,4.89,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-4c-1.1,0-2-0.9-2-2S20.9,10,22,10z M13,17.5h-2v-2h2V17.5z M13,13h-2v-2h2V13z M13,8.5h-2v-2h2V8.5z"/></g></g></g> </svg>
// //     <i className='eds-vector' > {Price}   </i> 
// //     <svg className='icon-1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> 
// //     <i className='eds-vector'> {Availability}</i>
// //     </div>
// //     </section>
// //         )
// //     }
// //  export default RightSector;
 


// function RadioApp() {
  
//   const [radioValue, setRadioValue] = useState("option1");
//   const [selectedOption, setSelectedOption] = useState("Publish-Now");
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedDropdownOption, setSelectedDropdownOption] = useState(" ");
//   const [textInputVisible, setTextInputVisible] = useState(false);
//   const [textInputValue, setTextInputValue] = useState("");
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [EnableDate, SetEnableDate] = useState(true);

  
  
//     const handleDateChange = (event) => {
//       console.log(selectedDate);
//       setSelectedDate(event.target.value);
//       SubmitTheData()

//     };
  
//     const handleTimeChange = (event) => {
//       setSelectedTime(event.target.value);
//       console.log(selectedTime)
//     };
//   function handleRadioButtonChange(event) {
//     const selectedOptionValue = event.target.value;
//     setSelectedOption(selectedOptionValue);
//     setDropdownVisible(selectedOptionValue === "option2");
//     if (selectedOptionValue === 'Scheduled') {
//       SetEnableDate(false);
//     } else {
//       SetEnableDate(true);
//     }
//   }

//   // Scheduled -> false
//   // keep-private & Publish-Now  -> true
//   const enableDate = () =>{
//     if (selectedOption === "keep-private" ||  selectedOption === "Publish-Now")
//     {
//       SetEnableDate(true);
//     }
//     else {
//       SetEnableDate(false);
//     }
//   }

//   const handleChange = (event) => {
//     setRadioValue(event.target.value);
//   };
//   function handleDropdownChange(event) {
//     const selectvalueDrop = event.target.value;
//     setSelectedDropdownOption(selectvalueDrop);
//     setTextInputVisible(selectvalueDrop === "option2");
//   }

//   function handleTextInputChange(event) {
//     setTextInputValue(event.target.value);
//     console.log(textInputValue);
//   }
  
//   function SubmitTheData(){
//         fetch('http://localhost:3000/Time', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer <your access token>'
//       },
//       body: JSON.stringify({
//         "EventDate": selectedDate,
//         "EventTime": selectedTime
//       })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // handle the response data
//       })
//       .catch(error => {
//         console.error('There was a problem with the push request:', error);
//       });
//   }
  
//   return (
//     <div>
//       <label>Who can see your event?</label>
//       <div>
//         <input
//           type="radio"
//           id="option1"
//           name="options"
//           value="option1"
//           onChange={handleChange}
//           defaultChecked={true}
//         />
//         <br />
//         <label htmlFor="option1">Public</label>
//         <br />
//         <span>Shared on TicketWave and search engines</span>
//       </div>
//       <div>
//         <div>
//           <input
//             type="radio"
//             id="option2"
//             name="options"
//             value="option2"
//             onChange={handleChange}
//           />
//           <br />
//           <label htmlFor="option2">private</label>
//           <br />
//           <span>Only available to a selected audience</span>
//         </div>
//       </div>
//       {radioValue === "option1" && (
//         <div>
//           {/* show additional options */}
//           <label>
//             <br />
//             When should we publish your event? <br />
//             <br />
//             <label>
//               <input
//                 type="radio"
//                 id="option3"
//                 name="options2"
//                 value="Publish-Now"
//                 onChange={handleRadioButtonChange}
//                defaultChecked={true}

//               />
//               Publish Now
//               <br />
//             </label>
//             <br />
//           </label>
//           <label>
//             <input
//               type="radio"
//               id="option4"
//               name="options2"
//               value="Scheduled"
//               onChange={handleRadioButtonChange}
//             />
//             Schedule for later
//           </label>

//         </div>
//       )}
//       {radioValue === "option2" && (
//         <div>
//           {/* show different additional options */}
//           <label>
//             Choose your Audience:
//             <br />
//           </label>
//           <select
//             value={selectedDropdownOption}
//             onChange={handleDropdownChange}
//           >
//             <option value="option1">Anyone with the link</option>
//             <option value="option2">only people with the password</option>
//           </select>
//           {textInputVisible && (
//             <label>
//               <br />
//               password:
//               <br />
//               <input
//                 type="password"
//                 value={textInputValue}
//                 onChange={handleTextInputChange}
//               />
//             </label>
//           )}
//           <br />
//           <label>
//             <br />
//             Will this event ever be public? <br /><br/>
//             <label>
//               <input
//                 type="radio"
//                 name="options3"
//                 value="keep-private"
//                 onChange={handleRadioButtonChange}
//                 defaultChecked={true}
//               />
//               No, keep it private
//               <br /><br/>
//             </label>
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="options3"
//               value="Scheduled"
//               onChange={handleRadioButtonChange}
            
//             />
//             Yes, schedule to share publicly
//           </label>
//         </div>
//       )}
//       <br/>
//        <div>
       
//          <input disabled={EnableDate} type="date" id="date-input" onChange={(e)=>handleDateChange(e)}   />
   
        
//          <input disabled={EnableDate} type="time" id="time-input" onChange={handleTimeChange} />
   
        
//        </div> 
//     </div>
//   );




// }

// export default RadioApp;