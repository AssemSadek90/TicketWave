import React, {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavPage from "./components/NavPage";
import AdmissionPage from "./components/AdmissionPage";
import PromoMain from "./promoPage/PromoMain";
import Sidebar from "./Sidebar/Sidebar";
import { useLocation } from 'react-router-dom';
import "./Tickets.css";
import AddAttendees from "./AddAttendees/AddAttendees";
import SoldTickets from "./SoldTickets/SoldTickets";
import SoldTicketsMain from "./SoldTickets/SoldTicketsMain";


import Dashboard from "./Dashboard/Dashboard";



function Tickets() {

 
  const [promoData, setPromoData] = useState([]);
  const [capacity, setCapacity] = useState(null); 
  const [padding, setPadding] = useState('5rem') ;
  const [visible, setVisible] = useState(true) ;
  const [submitted, setSubmitted] = useState('Not Submitted')


  // _________________________________________________ THESE TWO ARE FOR THE BACKEND CURRENTLY ______________________________________________________


  const [ticketData, setTicketData] = useState([]);
  const [soldTicketData, setSoldTicketData] = useState([]);




// __________________________________________________________________________________________________________________________________________________






  useEffect(() => {
    setSoldTicketData(prevSoldTickets => ticketData.map(obj => {
      const prevSoldTicket = prevSoldTickets.find(ticket => ticket.id === obj.id);
      const prevSoldQuantity = prevSoldTicket ? prevSoldTicket.soldTickets : 0;
      return {
        ...obj,
        soldTickets: obj.chosenQuantity + prevSoldQuantity
      };
    }));
  }, [ticketData]);
  
  


  

function TicketHandler(e, a){
  setTicketData(e);
  setCapacity(a);
  // console.log(e);
}
  function promoHandler(b){
    setPromoData(b)
    // console.log(b);
  }



  function addAttendeeData(e){

    setSoldTicketData(prevSoldTickets => ticketData.map(obj => {
      const prevSoldTicket = prevSoldTickets.find(ticket => ticket.id === obj.id);
      const prevSoldQuantity = prevSoldTicket ? prevSoldTicket.soldTickets : 0;
      return {
        ...obj,
        soldTickets: obj.chosenQuantity + prevSoldQuantity
      };
    }));

    setTicketData(e)
    // console.log("ADDED")
  }

  function submitHandler(){
    console.log("Ticket Data",
    ticketData
    )
    console.log("Promo Data",
    promoData
    )
    console.log("Capacity",
    capacity
    )




    const data = {TicketData: ticketData, PromoData: promoData, Capacity: capacity}
    // handleSignUp(data);
  }



  // const handleSignUp = (data) => {
  //   const requestOptions = {
  //     headers: { 'Content-Type': 'application/json' },
  //   };

  //   server
  //     .post('/Events', data, requestOptions)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };


  useEffect(() => {window.scrollTo(0,0)}, [])


  return (
    // <BrowserRouter>
    <React.Fragment>
      <Sidebar visible={visible} isShowing={(e) => {e && setPadding('16rem')}} />
      <div style={{paddingLeft: padding}}>
        <Routes>
          <Route exact={true} path='/' element={<div></div>} />
          <Route exact={true} path='/Events' element={<div></div>} />
          <Route exact={true} path='/Home' element={<div></div>} />
          <Route exact={true} path='/Orders' element={<div></div>} />
          <Route exact={true} path='/Marketing' element={<div></div>} />
          <Route exact={true} path='/Reports' element={<div></div>} />
          <Route exact={true} path='/Finance' element={<div></div>} />
          <Route exact={true} path='/Settings' element={<div></div>} />
          <Route exact={true} path='/App-Marketplace' element={<div></div>} />








{/* ____________________________________________________ YOUR MENTIONED PAGES_______________________________________________________________ */}


          <Route path='/Events/basic-info' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Basic Info Page</div></React.Fragment>
      )
    }
  }   />



<Route path='/Events/publish' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Publish Page</div></React.Fragment>
      )
    }
  }   />



<Route path='/Events/Dashboard' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><Dashboard soldTicketData={soldTicketData}/></React.Fragment>
      )
    }
  }   />






{/* _________________________________________________________________________________________________________________________________________ */}






<Route path='/Events/details' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Details Page</div></React.Fragment>
      )
    }
  }   />


<Route path='/Events/Order-Options' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Order Options Page</div></React.Fragment>
      )
    }
  }   />


<Route path='/Events/Payments-and-Tax' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Payments and Tax Page</div></React.Fragment>
      )
    }
  }   />

<Route path='/Events/Marketing' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><div>Marketing Page</div></React.Fragment>
      )
    }
  }   />



          <Route path='/Events/Tickets/admission' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (
        <React.Fragment><NavPage /><AdmissionPage soldTicketData={soldTicketData} finalCapacity={capacity} finalData={ticketData} Ticket={TicketHandler}  finalSubmission={submitHandler}/></React.Fragment>
      )
    }
  }   />
          <Route path='Events/Tickets/add-ons' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><NavPage /><div></div></React.Fragment>)
    }
  } 
    />
          <Route path='/Events/Tickets/promo-codes' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><NavPage /><PromoMain finalData={promoData} Promo={promoHandler}/></React.Fragment>)
    }
  }  />
          <Route path='/Events/Tickets/holds' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><NavPage /><div></div></React.Fragment>)
    }
  } />
          <Route path='/Events/Tickets/event-settings' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><NavPage /><div></div></React.Fragment>)
    }
  } />

          <Route path='/Events/Add-Attendees' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><AddAttendees submitted={submitted} soldTickets={soldTicketData}  finalData={ticketData} addAttendee={addAttendeeData} /></React.Fragment>)
    }
  } />


          <Route path='/Events/Sold-Tickets' Component={
    () => {
      setPadding('16rem');
      setVisible(true);
      return (<React.Fragment><SoldTicketsMain data={soldTicketData}  /></React.Fragment>)
    }
  }  />


          <Route
  path="/:id"
  exact={true}
  Component={
    () => {
      setPadding('0rem');
      setVisible(false);
      return (
        <React.Fragment>
          <SoldTickets data={soldTicketData} />
        </React.Fragment>
      )
    }
  }
/>



          

        </Routes>
      </div>
    </React.Fragment>
  // </BrowserRouter>
  );
}

export default Tickets;
