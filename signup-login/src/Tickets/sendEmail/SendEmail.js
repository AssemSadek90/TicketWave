import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
// import { Button } from '@material-ui/core';


function SendEmail({data}){
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [filteredData, setFilteredData] = useState([]);


    
  const [totalCost, setTotalCost] = useState('');

    useEffect(() => {
        setTotalCost(data.reduce((acc, cur) => acc + cur.totalCost, 0));
      // console.log(totalCost)
      }, [data])


    useEffect(() => {
        const filtered = data.filter((item) => item.chosenQuantity > 0);
        setFilteredData(filtered);
        console.log(filtered);
    }, [data]);

    function sendEmail(e) {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log("Data to email is = ", filteredData)


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
        ${filteredData.map((item) => {
          return (
            `<tr>
            <td>${item.name}</td>
            <td>${item.chosenQuantity}</td>

            <td><a 
            
            









            href="https://react-ea708.web.app/Navigation/${item.id}"
            


            
            
            
            
            
            
            
            
            
            
            
            
            style="display: inline-block; padding: 6px 12px; background-color: #646464; color: #fff; text-align: center; text-decoration: none; border: none; border-radius: 3px;">Click here to view</a></td>
          </tr>
          `
          );
        }).join("")}
        <tr>
          <th></th>
          <th>Total:</th>
          <th>$${totalCost}</th>
        </tr>
      </table>
    </body>
  </html>
`;



        emailjs.send('service_raj17x9', 'template_pk6pl9g', {
            from_email: "ticketwave_01@outlook.com",
            message: message,
            to_name: name,
            to_email: email,
            subject: "You are Invited!"
        }, 'v1ACOVA6Mru8hH5xJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();

        navigate("/Navigation/Events/Add-Attendees")
    }

    return(
      <div style={{border: '1px solid #ccc', height: '100%', width: '100%', minWidth: '30rem'}}>
        <div style={{paddingBottom: '1.5rem', borderBottom: '1px solid #ccc', marginBottom: '1.5rem', textAlign: 'center', paddingTop: '1.5rem'}}>
           <span style={{fontSize: '1.5rem', fontWeight: '501'}}> Checkout</span> <br />
           <span style={{ fontSize: 'medium'}}> Time Left: 00:00</span>
        </div>

      <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
        <h2 style={{textAlign: 'left'}}>Contact Information</h2>

<div style={{flexDirection: 'row', display: 'flex', width: '100%', marginTop: '1rem', marginBottom: '1rem'}}>


        <div style={{width: '48%', marginRight: '4%'}} className="inputContainer">
        <label className="inputLabel">First Name</label>
        <input
          style={{ fontSize: "0.85rem" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>

      <div style={{width: '48%'}} className="inputContainer">
        <label className="inputLabel">Last Name</label>
        <input
          style={{ fontSize: "0.85rem" }}
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
    
    <div style={{width: '100%', marginBottom: '1rem'}} className="inputContainer">
        <label className="inputLabel">Enter Email</label>
        <input
          style={{ fontSize: "0.85rem" }}
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>


      <p>
        As a reminder, The creator is responsible for the compilance with privacy and marketing regulation when using this feature to upload email addresses for marketing communications <br/>
        <br/>
        
        Powered by <b>Ticketwave</b>
        
        <br/>
        <br/>
      </p>
      
      {/* <label style={{ marginBottom: '1rem' }}>Enter Email</label>
      <input type="email" required={true} onChange={(e) => { setEmail(e.target.value) }} value={email} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', marginBottom: '1rem', minWidth: '200px' }} /> */}
    
    <div className="mainButton">
      <button type="submit" >Send</button>
      </div>
    </form>
    
    </div>
    )
};

export default SendEmail;
