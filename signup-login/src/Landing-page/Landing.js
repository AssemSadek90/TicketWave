import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import server from '../server';
import DisplayEvents from './DisplayEvents/Displayevents';
import {
  getUsername,
  getEmail,
  getFirstName,
  getLastName,
  getUserID,
  isValidSession,
} from '../Credentials/Credentials';
import '../App.css';
import CategoriesNav from './DisplayEvents/Categories';

/**
 * Represents the Home component, which displays the main page of the application.
 * @returns {JSX.Element} The Home component UI.
 */
const Home = () => {
  return (
    //this svg is temporary and is going to be replaced
    <div>
      <Navbar />
      <img
        fetchpriority="high"
        src="https://cdn.evbstatic.com/s3-build/fe/build/images/59cbebb97fce9742ccbefa46f5f930c8-2_mobile_659x494.jpg"
        alt="Homepage header"
        srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/d3d4264123031b703a6942b9f48d2758-2_web_1919x543.jpg 1920w,https://cdn.evbstatic.com/s3-build/fe/build/images/c55f99382ac372e9b95ac3ba6f6c1821-2_4K_1920x544.jpg 1924w,"
        sizes="(max-width: 1920px) 1920px, 1924px"
        style={{ backgroundColor: '#89A2BE', width: '100%', height: 'auto' }}
        loading="eager"
      ></img>
      <CategoriesNav id="categories-container" />
    </div>
  );
};

export default Home;
