import React from 'react';
import { Link } from 'react-router-dom';
import hotelImage from '../../assets/home-hotel.jpg';  // Replace with the path to your hotel image
import flightImage from '../../assets/home-flight.jpg';  // Replace with the path to your flight image
import './Home.css';  // Import the CSS file

const Home = () => {
  const cardStyle = {
    backgroundImage: `url(${hotelImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardLargeStyle = {
    backgroundImage: `url(${flightImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-black h-screen ">
      <div className="text-white text-center py-4">
        <h1 className="text-6xl font-bold text-purple-500">Welcome to <span className='text-rose-600'>NEXT</span> Booking</h1>
        <p className="text-xl mt-4">Assessment for Front End Developers</p>
      </div>
      <div className='flex justify-around items-center'>
        <Link to="/hotel">
          <div className="card" style={cardStyle}>
            <div className="overlay"></div>
            <div className='mt-64 trans-text text-purple-400 relative'>
              <h2 className="text-4xl font-semibold ">Hotel Booking</h2>
              <p className="">Book your stay with us!</p>
            </div>
          </div>
        </Link>

        <Link to="/flight">
          <div className="card-large" style={cardLargeStyle}>
            <div className="overlay"></div>
            <div className='mt-64 trans-text text-lime-400 relative'>
              <h2 className="text-4xl font-semibold">Flight Booking</h2>
              <p className="">Fly high with great deals!</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
