import React from 'react';

const HotelCard = ({ hotelSearchParams }) => {
  const {
    checkInDate,
    checkOutDate,
    city,
    numberOfRooms,
    numberOfAdults,
    numberOfChildren,
  } = hotelSearchParams;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Hotel Search Parameters:</h2>
      <ul>
        <li>
          <strong>Check-In Date:</strong> {checkInDate}
        </li>
        <li>
          <strong>Check-Out Date:</strong> {checkOutDate}
        </li>
        <li>
          <strong>City:</strong> {city}
        </li>
        <li>
          <strong>Number of Rooms:</strong> {numberOfRooms}
        </li>
        <li>
          <strong>Number of Adults:</strong> {numberOfAdults}
        </li>
        <li>
          <strong>Number of Children:</strong> {numberOfChildren}
        </li>
      </ul>
    </div>
  );
};

export default HotelCard;
