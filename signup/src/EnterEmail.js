import React from 'react';
import { useState } from 'react';

function CreateAccount() {
  const [email, setEmail] = useState('');

  return (
    <div class="create-account-main">
      <div class="split-container-primary">
        <div class="split-container-content">
          <div class="header-create-element">
            <h1>TicketWave</h1>
            <h1>Create an account</h1>
          </div>
          <form>
            <div id="create-account">
              <input type="text" id="create-ccount-first-email"></input>
              <button id="continue-button">Continue</button>
            </div>
          </form>
        </div>
      </div>
      <div class="split-container-secondary"></div>
    </div>
  );
}

export default CreateAccount;
