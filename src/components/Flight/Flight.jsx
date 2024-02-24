import React, { useState } from 'react';
import FlightCard from '../ShowResult/FlightCard/FlightCard';
import FlightBg from '../../assets/bg-flight.jpg'
import './Flight.css';

const Flight = () => {
  const [formData, setFormData] = useState({
    departureAirport: '',
    arrivalAirport: '',
    journeyDate: '',
    returnDate: '',
    traveler: '',
    flightClass: '',
  });

  const [flightSearchParams, setFlightSearchParams] = useState({
    departureAirport: '',
    arrivalAirport: '',
    journeyDate: '',
    returnDate: '',
    traveler: '',
    flightClass: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearchSubmit = () => {
    // Format dates to "yyyy-MM-dd" before updating the main state
    const formattedJourneyDate = new Date(formData.journeyDate).toLocaleDateString('en-CA');
    const formattedReturnDate = new Date(formData.returnDate).toLocaleDateString('en-CA');

    setFormData((prevData) => ({
      ...prevData,
      journeyDate: formattedJourneyDate,
      returnDate: formattedReturnDate,
    }));

    // Update the main state with the accumulated form data
    setFlightSearchParams(formData);

    // Implement the flight search logic here
    // console.log('Flight search submitted:', formData);
  };

  return (
    <div className="your-content pt-6"
      style={{
        backgroundImage: `url(${FlightBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '150vh',
        position: 'relative',
      }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-30"></div>
      <div className="flex flex-col container mx-auto p-8 shadow-lg rounded-lg relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">Flight Booking</h1>

        {/* <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white"> */}


        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative input-text-bl ">
          <label className="mb-2">
            Departure Airport:
            <input
              type="text"
              name="departureAirport"
              value={formData.departureAirport}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
              placeholder="Enter departure airport"
            />
          </label>

          <label className="mb-2">
            Arrival Airport:
            <input
              type="text"
              name="arrivalAirport"
              value={formData.arrivalAirport}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
              placeholder="Enter arrival airport"
            />
          </label>

          <label className="mb-2">
            Journey Date:
            <input
              type="date"
              name="journeyDate"
              value={formData.journeyDate}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
              placeholder="Select journey date"
            />
          </label>

          <label className="mb-2">
            Return Date:
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
              placeholder="Select return date"
            />
          </label>

          <label className="mb-2">
            Traveler:
            <input
              type="number"
              name="traveler"
              value={formData.traveler}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
              placeholder="Enter number of travelers"
            />
          </label>

          <label className="mb-2">
            Class:
            <select
              name="flightClass"
              value={formData.flightClass}
              onChange={handleInputChange}
              className="block w-full p-2 border text-black rounded-md"
            >
              <option value="">Select class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </label>


        </form>
        <button
          type="button"
          onClick={handleSearchSubmit}
          className="w-96 mx-auto mt-4 bg-gradient-to-r from-green-400 to-yellow-400 text-black px-4 py-2 rounded-md hover:from-yellow-400 hover:to-green-500 "
        >
          Flight Search
        </button>
        <div className="mt-8 relative">
          {/* Show FlightCard only when flightSearchParams is not null */}
          {flightSearchParams && (
            <FlightCard flightSearchParams={flightSearchParams} />
          )}
        </div>
      </div>
    </div>

  );
};

export default Flight;
