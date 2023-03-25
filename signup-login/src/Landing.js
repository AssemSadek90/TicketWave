import React from 'react';
import './App.css';

const Home = () => {
  const userId = parseInt(localStorage.getItem('userId'));
  return (
    <div>
      <p>Welcome, User ID: {userId}!</p>
    </div>
  );
};

export default Home;
