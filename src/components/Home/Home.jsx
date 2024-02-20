// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 flex justify-around">
      <Link to="/hotel">
        <div className="bg-white p-8 rounded-md shadow-md flex-1 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-4">Hotel Booking</h2>
          <p className="text-gray-700">Book your stay with us!</p>
        </div>
      </Link>

      <Link to="/flight">
        <div className="bg-white p-8 rounded-md shadow-md flex-1 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-4">Flight Booking</h2>
          <p className="text-gray-700">Fly high with great deals!</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
