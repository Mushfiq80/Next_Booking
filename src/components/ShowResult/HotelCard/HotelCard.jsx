import React, { useState, useEffect } from 'react';

const HotelCard = ({ hotelSearchParams }) => {
  const { checkInDate, checkOutDate, city, numberOfRooms, numberOfAdults, numberOfChildren } = hotelSearchParams;

  // Check if any of the search parameters is present
  const hasSearchParams = checkInDate || checkOutDate || city || numberOfRooms || numberOfAdults || numberOfChildren;

  if (!hasSearchParams) {
    // If no search parameters are present, return null to hide the component
    return null;
  }

  // useEffect(() => {
  //   const fetchHotelData = async () => {
  //     try {
  //       const apiKey = '0e328d282636a33ab7a010f02070a1a6';
  //       const apiUrl = 'https://api.hotelbeds.com/hotel-api/1.0/hotels';

  //       const response = await fetch(apiUrl, {
  //         method: 'POST',
  //         headers: {
  //           'Api-Key': apiKey,
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           checkIn: checkInDate,
  //           checkOut: checkOutDate,
  //           destination: city,
  //           occupancy: [
  //             { adults: numberOfAdults, children: numberOfChildren }
  //           ],
  //           rooms: numberOfRooms,
  //         }),
  //       });

  //       const data = await response.json();
  //       console.log('Hotel API response:', data);

  //       // Set the hotel data in the state
  //       setHotelData(data);
  //     } catch (error) {
  //       console.error('Error fetching hotel data:', error);
  //     }
  //   };

  //   // Call the fetchHotelData function
  //   fetchHotelData();
  // }, [checkInDate, checkOutDate, city, numberOfRooms, numberOfAdults, numberOfChildren]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl text-center font-semibold mb-2">Hotel Search Parameters</h2>
      <ul className='flex justify-center space-x-4 mt-8'>
        {/* Display hotelSearchParams details */}
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>Check-In Date:  </strong> {checkInDate}
        </li>
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>Check-Out Date:</strong> {checkOutDate}
        </li>
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>City:</strong> {city}
        </li>
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>Number of Rooms:</strong> {numberOfRooms}
        </li>
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>Number of Adults:</strong> {numberOfAdults}
        </li>
        <li className="p-10 bg-purple-600 text-white font-light shadow-2xl rounded-lg">
          <strong>Number of Children:</strong> {numberOfChildren}
        </li>
      </ul>

      {/* Display hotel data */}
      {/* {hotelData && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Hotels:</h2>
         
        </div> */}
      {/* )} */}
    </div>
  );
};

export default HotelCard;
