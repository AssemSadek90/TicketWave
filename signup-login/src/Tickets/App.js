import React, {useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavPage from "./components/NavPage";
import AdmissionPage from "./components/AdmissionPage";
import PromoMain from "./promoPage/PromoMain";
import Sidebar from "./Sidebar/Sidebar";
import { useLocation } from 'react-router-dom';

function App() {

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


  // __________________________________________ ADD BACKEND FUNCTIONALITY HERE__________________________________________________________________

  function submitHandler(){

    const data = {TicketData: ticketData, PromoData: promoData, Capacity: capacity}
    console.log(data)
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


// _______________________________________________________________________________________________________________________________________________


  return (
    <BrowserRouter>
    <React.Fragment>
      <Sidebar isShowing={(e) => {e && setPadding('15rem')}} />
      <div style={{paddingLeft: padding}} >
        
        <div>
      <Route exact={true} path='/' render={() => <div></div>} />
    </div>
    <div>
      <Route exact={false} path='/Events/Tickets' component={() => <NavPage/>} />
    </div>
    <div>
      <Route exact={true} path='/Events/Tickets/admission' component={() => <AdmissionPage finalCapacity={capacity} finalData={ticketData} Ticket={TicketHandler}  finalSubmission={submitHandler}/>} />
    </div>
    <div>
      <Route exact={true} path='/Events/Tickets/add-ons' component={() => <div>Add-ons</div>} />
    </div>
    <div>
      <Route exact={true} path='/Events/Tickets/promo-codes' component={() => <PromoMain finalData={promoData} Promo={promoHandler}/>} />
    </div>
    <div>
      <Route exact={true} path='/Events/Tickets/holds' component={() => <div>Holds</div>} />
    </div>
    <div>
      <Route exact={true} path='/Events/Tickets/event-settings' component={() => <div>Settings</div>} />
    </div>
    </div>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
