import React from 'react';
import './dashboard.css';
import Upperdashboard from './upperdashboard';
import Payout from './payout';
import Sales from './Sales';
function dashboard() {
  return(
  <div className="eds-l-mar-bot-8 snipcss-gpf4c">
  <div className="dashboard-insights eds-g-grid st-current snipcss-ynrSv" data-testid="dashboard-insights">
  <div className="eds-g-cell eds-g-cell-12-12 eds-text-hm__title dashboard-main-title eds-l-pad-hor-3">
  <h1 className="st-hover">Dashboard</h1>
  </div>
   <Upperdashboard/>
   <Payout/>
   <Sales/>
  </div>
  </div>
   
 



  )
}

export default dashboard;