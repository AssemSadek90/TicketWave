import React from 'react';
import './NavigationBar.css'
import EventbriteLogo from './EventbriteLogo.jpg';
import MagnifyingIcon from './MagnifyingIcon.png';


function NavigationBar(){

    return (
      <nav className='NavBar'>
        <div id='logoAndSearch'>
            <img id='logo' src={EventbriteLogo} alt='Eventbrite'></img>
            <div className="SearchBar">
            <form>
              <button type="submit" className="SearchButton"><img id='SearchIcon' src={MagnifyingIcon} alt='Search'></img></button>
              <input type="text" placeholder="Search Events" className="SearchInput"></input>
            </form>
          </div>
        </div>
        <div id='NavBarButtons'>
          <div><button>Browse Events</button></div>
          <div><button>Create an Event</button></div>
        <ul>
          <li>
            <select>
              <option value="option1">Email:</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
          <li>
            <select>
              <option value="option1">Help</option>
              <option value="option2">Find</option>
              <option value="option3">Contact</option>
              <option value="option3">Visit</option>
            </select>
          </li>
          <li>
            <select>
              <option value="option1">Organize</option>
              <option value="option2">Create events</option>
              <option value="option3">Pricing</option>
              <option value="option3">Resources</option>
              <option value="option3">Contact Sales</option>
            </select>
          </li>
        </ul>
        </div>
      </nav>
    );
}

export default NavigationBar;
