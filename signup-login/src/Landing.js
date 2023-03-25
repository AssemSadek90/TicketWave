import React from 'react';
import Navbar from './NavBar/Navbar';
import './App.css';

const Home = () => {
  const userId = parseInt(localStorage.getItem('userId'));
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
