import React, {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavPage from "./components/NavPage";
import AdmissionPage from "./components/AdmissionPage";
import PromoMain from "./promoPage/PromoMain";
import Sidebar from "./Sidebar/Sidebar";
import { useLocation } from 'react-router-dom';
import "./index.css";

function MainApp() {

  const [ticketData, setTicketData] = useState([]);
  const [promoData, setPromoData] = useState([]);
  const [capacity, setCapacity] = useState(null); 
  const [padding, setPadding] = useState('5rem') 

  // const location = useLocation();
  // const [currentUrl, setCurrentUrl] = useState(location.pathname);

  // useEffect(() => {
  //   setCurrentUrl(location.pathname);
  // }, [location.pathname]);

function TicketHandler(e, a){
  setTicketData(e);
  setCapacity(a);
  // console.log(e);
}
  function promoHandler(b){
    setPromoData(b)
    // console.log(b);
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





  return (
    // <BrowserRouter>
    <React.Fragment>
      <Sidebar isShowing={(e) => {e && setPadding('15rem')}} />
      <div style={{paddingLeft: padding}}>
        <Routes>
          <Route path='/' element={<div></div>} />

          <Route path='/Events/Tickets/admission' element={<React.Fragment><NavPage /><AdmissionPage finalCapacity={capacity} finalData={ticketData} Ticket={TicketHandler}  finalSubmission={submitHandler}/></React.Fragment>}  />
          <Route path='Events/Tickets/add-ons' element={<React.Fragment><NavPage /><div>Add-ons</div></React.Fragment>} />
          <Route path='/Events/Tickets/promo-codes' element={<React.Fragment><NavPage /><PromoMain finalData={promoData} Promo={promoHandler}/></React.Fragment>} />
          <Route path='/Events/Tickets/holds' element={<React.Fragment><NavPage /><div>Holds</div></React.Fragment>} />
          <Route path='/Events/Tickets/event-settings' element={<React.Fragment><NavPage /><div>Settings</div></React.Fragment>} />
        </Routes>
      </div>
    </React.Fragment>
  // </BrowserRouter>
  );
}

export default MainApp;
