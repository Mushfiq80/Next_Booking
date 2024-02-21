// Flight.jsx

import React, { useState } from 'react';
import FlightCard from '../ShowResult/FlightCard/FlightCard';

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
        // Update the main state with the accumulated form data
        setFlightSearchParams(formData);

        // Implement the flight search logic here
        console.log('Flight search submitted:', formData);
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Flight Booking</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <label className="mb-2">
                    Departure Airport:
                    <input
                        type="text"
                        name="departureAirport"
                        value={formData.departureAirport}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
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
                        className="block w-full p-2 border rounded-md"
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
                        className="block w-full p-2 border rounded-md"
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
                        className="block w-full p-2 border rounded-md"
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
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of travelers"
                    />
                </label>

                <label className="mb-2">
                    Class:
                    <select
                        name="flightClass"
                        value={formData.flightClass}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                    >
                        <option value="">Select class</option>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                    </select>
                </label>

                <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none col-span-2"
                >
                    Search Flights
                </button>
            </form>

            {/* Pass flightSearchParams to FlightCard component */}
            <FlightCard flightSearchParams={flightSearchParams} />
        </div>
    );
};

export default Flight;
