import React, { useState } from 'react';

const Home = () => {
  const [searchType, setSearchType] = useState('hotel'); // Default to hotel search

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle the search logic here, e.g., make API requests and display results
    console.log(`Performing ${searchType} search`);
  };

  return (
    <div className="container">
      <h1>Hotel & Flight Booking</h1>

      <form className="search-form">
        <label>
          Search for:
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="hotel">Hotel</option>
            <option value="flight">Flight</option>
          </select>
        </label>

        {/* Render input fields based on searchType */}
        {searchType === 'hotel' ? (
          <>
            <label>Check-In Date: <input type="date" /></label>
            <label>Check-Out Date: <input type="date" /></label>
            <label>City: <input type="text" /></label>
            <label>Number of Rooms: <input type="number" /></label>
            <label>Number of Adults: <input type="number" /></label>
            <label>Number of Children: <input type="number" /></label>
          </>
        ) : (
          <>
            <label>Departure City: <input type="text" /></label>
            <label>Arrival City: <input type="text" /></label>
            <label>Departure Date: <input type="date" /></label>
            <label>Return Date: <input type="date" /></label>
            <label>Number of Adults: <input type="number" /></label>
            <label>Number of Children: <input type="number" /></label>
          </>
        )}

        <button type="button" onClick={handleSearchSubmit}>Search</button>
      </form>
    </div>
  );
};

export default Home;