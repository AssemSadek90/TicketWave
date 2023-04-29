import React, { useState } from 'react';
import './dashboard.css';
import ExportCSV from './ExportCSV';
function MyComponent() {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const [data, setData] = useState([
    { orders: 1, Atendees: "available" },
    { orders: "2", Atendees: "available" },
    { orders: "3", Atendees: "available" }
  ]);

  

  return (
    <div className='row'>
      {/* <button  onClick={handleDropdownToggle}> */}
      <span className="eds-text-bm eds-text-weight--heavy atendeereport "  onClick={handleDropdownToggle} >
              Attendee summary report </span>
              {/* </span></button> */}
      {isDropdownOpen &&
        <div>
          <ExportCSV data={data} />
        </div>
      }
    </div>
  );
}



export default MyComponent;