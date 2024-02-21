import React from 'react';

const FlightCard = ({ flightSearchParams }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Flight Search Parameters:</h2>
      <ul>
        <li>
          <strong>Departure Airport:</strong> {flightSearchParams.departureAirport}
        </li>
        <li>
          <strong>Arrival Airport:</strong> {flightSearchParams.arrivalAirport}
        </li>
        <li>
          <strong>Journey Date:</strong> {flightSearchParams.journeyDate}
        </li>
        <li>
          <strong>Return Date:</strong> {flightSearchParams.returnDate}
        </li>
        <li>
          <strong>Traveler:</strong> {flightSearchParams.traveler}
        </li>
        <li>
          <strong>Class:</strong> {flightSearchParams.flightClass}
        </li>
      </ul>
    </div>
  );
};

export default FlightCard;
