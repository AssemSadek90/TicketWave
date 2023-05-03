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
import EventDetails from "../EventDetails/EventDetails";

// import Dashboard from "./Dashboard/Dashboard";
import Dashboard from '../Dashboard/dashboardinsights';
import CreateEventForm from '../Basic-info/CreateEventForm';



function Tickets({finalTicketData, finalSoldTicketData, finalTickets, finalSoldTickets}) {

 
  const [promoData, setPromoData] = useState([]);
  const [capacity, setCapacity] = useState(null); 
  const [padding, setPadding] = useState('5rem') ;
  const [visible, setVisible] = useState(true) ;
  const [showSecondSidebar, setShowSecondSidebar] = useState(true) ;

  const [submitted, setSubmitted] = useState('Not Submitted')


  // _________________________________________________ THESE TWO ARE FOR THE BACKEND CURRENTLY ______________________________________________________


  const [ticketData, setTicketData] = useState(finalTickets);
  const [soldTicketData, setSoldTicketData] = useState(finalSoldTickets);




// __________________________________________________________________________________________________________________________________________________



  useEffect(() => {
    finalTicketData(ticketData);
  }, [ticketData])

  useEffect(() => {
    finalSoldTicketData(soldTicketData);
  }, [soldTicketData])



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
      <Sidebar showSecond={showSecondSidebar} visible={visible} />
      <div style={{paddingLeft: padding}}>
        <Routes>


          <Route path='/Events' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div style={{padding: '5rem'}}>Events Page</div></React.Fragment>
      )
    }
  }   />

          <Route path='/home-orders' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />
  <Route path='/home-marketing' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />
          <Route path='/home-reports' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />
          <Route path='/home-finance' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />
          <Route path='/home-settings' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />
          <Route path='/home-app-Marketplace' Component={
    () => {
      setPadding('5rem');
      setVisible(true);
      setShowSecondSidebar(false)
      return (
        <React.Fragment><div></div></React.Fragment>
      )
    }
  }   />








{/* ____________________________________________________ YOUR MENTIONED PAGES_______________________________________________________________ */}





<Route path='/dashboard' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div style={{paddingBottom: '1rem'}}><Dashboard soldTicketData={soldTicketData} ticketData={ticketData}/></div></React.Fragment>
      )
    }
  }   />






{/* _________________________________________________________________________________________________________________________________________ */}






<Route path='/details' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div>Details Page</div></React.Fragment>
      )
    }
  }   />


<Route path='/Order-Options' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div>Order Options Page</div></React.Fragment>
      )
    }
  }   />


<Route path='/Payments-and-Tax' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div>Payments and Tax Page</div></React.Fragment>
      )
    }
  }   />

<Route path='/Marketing' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      setShowSecondSidebar(true)
      return (
        <React.Fragment><div>Marketing Page</div></React.Fragment>
      )
    }
  }   />



          <Route path='/Tickets/admission' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (
        <React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><NavPage /><AdmissionPage soldTicketData={soldTicketData} finalCapacity={capacity} finalData={ticketData} Ticket={TicketHandler}  finalSubmission={submitHandler}/></div></React.Fragment>
      )
    }
  }   />
          <Route path='/Tickets/add-ons' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><NavPage /><div></div></div></React.Fragment>)
    }
  } 
    />
          <Route path='/Tickets/promo-codes' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><NavPage /><PromoMain finalData={promoData} Promo={promoHandler}/></div></React.Fragment>)
    }
  }  />
          <Route path='/Tickets/holds' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><NavPage /><div></div></div></React.Fragment>)
    }
  } />
          <Route path='/Tickets/event-settings' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><NavPage /><div></div></div></React.Fragment>)
    }
  } />

          <Route path='/Add-Attendees' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><AddAttendees submitted={submitted} soldTickets={soldTicketData}  finalData={ticketData} addAttendee={addAttendeeData} /></div></React.Fragment>)
    }
  } />


          <Route path='/Sold-Tickets' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div style={{paddingTop: '1rem', paddingRight: '1rem', paddingBottom: '1rem'}}><SoldTicketsMain data={soldTicketData}  /></div></React.Fragment>)
    }
  }  />

<Route path='/Orders' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div> Orders Page</div></React.Fragment>)
    }
  }  />

<Route path='/Attendee-Credits' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div> Attendee-Credits</div></React.Fragment>)
    }
  }  />

<Route path='/Attendee-List' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div> Attendee-List</div></React.Fragment>)
    }
  }  />

<Route path='/Check-in' Component={
    () => {
      setPadding('18rem');
      setVisible(true);
      return (<React.Fragment><div> Check in</div></React.Fragment>)
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
