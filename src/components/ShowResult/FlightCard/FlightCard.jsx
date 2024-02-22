import React, { useState, useEffect } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

const FlightCard = ({ flightSearchParams }) => {
  const { journeyDate, departureAirport, arrivalAirport } = flightSearchParams;
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
      <h2 className="text-2xl font-semibold mb-2">Searched Details</h2>
    
      {/* Display selected date flights details or show a message if no flights are found */}
      {selectedDateFlights ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Flights on {journeyDate}:</h2>
          <div>
            <span><strong></strong></span>
          </div>





          <ul>
            {selectedDateFlights.flightsInfo.map((flight, index) => (
              <li key={index} className='flex justify-between items-center bg-green-500 bg-opacity-45 mt-4 p-8 rounded font-bold '>
                <p>Airline:<br />{flight.airline}</p> 
                <div>
                  <p>{flight.departureTime}</p>
                  <p>{departureAirport}</p>
                </div>
                <MdFlightTakeoff className='text-5xl'/>
                < HiArrowLongRight className='text-5xl'/>
                <MdFlightLand className='text-5xl'/>
                <div>
                  <p>{flight.arrivalTime}</p>
                  <p>{arrivalAirport}</p>
                </div>
                <p> USD$ {flight.ticketPrice}</p>
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
