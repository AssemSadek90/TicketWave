import React, {useState} from 'react';
import "./Booking-popup.css"

function Popup(){

    const [showOverlay, setShowOverlay] = useState(false);

    const handleButtonClick = () => {
      setShowOverlay(true);
    }
  
    const handleOverlayClose = () => {
      setShowOverlay(false);
    }

    return(
        <div>
        <button id='booking-button' onClick={handleButtonClick}>Reserve a spot</button>
        {showOverlay ? 
          <div className="overlay">
            <div className="overlay-content">
              <h2>Overlay Content</h2>
              <button onClick={handleOverlayClose}>Close Overlay</button>
            </div>
          </div> : null
        }
      </div>
    );

}
export default Popup;