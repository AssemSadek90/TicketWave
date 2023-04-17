import React, { useState } from "react";
import "./Booking-popup.css";
import MEVS from "../EventDetails/Banner/MEVS.avif";

function Popup({ closeOverlay }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/userss", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });
    const data = await response.json();
    console.log(data); // do something with the response data
  };

  return (
    <div>
      <div className="overlay">
        <div className="overlay-content">
          {/* popup left side */}
          <div className="popup-left">
            <header className="popup-left-header">
              <button
                className="closing-button"
                onClick={() => closeOverlay(false)}
              >
                X
              </button>

              <div className="header-title">
                <h2>Checkout</h2>
              </div>
            </header>
            <main>
              <div>
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address:</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="footer">
                  <button className="register" type="submit">
                    register
                  </button>
                </div>
              </div>
            </main>
          </div>

          {/* popup right side */}
          <div className="popup-right">
            <div className="image-and-order-summary">
              <aside className="right-container">
                <div className="image">
                  <img src={MEVS} className="image"></img>
                </div>
                <div className="order-summary-container">
                  <div className="order-summary">
                    <div></div>
                    <div></div>
                    <hr />
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
