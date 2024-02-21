// FlightCard.jsx

import React, { useState, useEffect } from 'react';

const FlightCard = ({ flightSearchParams }) => {
  const { journeyDate } = flightSearchParams;
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../../public/Flight.json');
        const data = await response.json();
        setFlightData(data);
      } catch (error) {
        console.error('Error loading flight data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if there's flight data and find the flightsInfo for the selected journeyDate
  const selectedDateFlights = flightData && flightData.find((item) => item.date === journeyDate);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Flight Search Parameters:</h2>
      <ul>
        {/* Display flightSearchParams details */}
        <li>
          <strong>Journey Date:</strong> {journeyDate}
        </li>
      </ul>

      {/* Display selected date flights details or show a message if no flights are found */}
      {selectedDateFlights ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Flights on {journeyDate}:</h2>
          <ul>
            {selectedDateFlights.flightsInfo.map((flight, index) => (
              <li key={index}>
                <strong>Airline:</strong> {flight.airline},
                <strong> Departure:</strong> {flight.departureTime},
                <strong> Arrival:</strong> {flight.arrivalTime},
                <strong> Price:</strong> ${flight.ticketPrice}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No flights found for the selected date.</p>
      )}
    </div>
  );
};

export default FlightCard;
