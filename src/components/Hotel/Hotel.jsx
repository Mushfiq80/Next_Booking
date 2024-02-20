// Hotel.jsx

import React, { useState } from 'react';


const Hotel = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [city, setCity] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [numberOfAdults, setNumberOfAdults] = useState('');
    const [numberOfChildren, setNumberOfChildren] = useState('');

    const handleCheckInDateChange = (event) => {
        setCheckInDate(event.target.value);
    };

    const handleCheckOutDateChange = (event) => {
        setCheckOutDate(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleNumberOfRoomsChange = (event) => {
        setNumberOfRooms(event.target.value);
    };

    const handleNumberOfAdultsChange = (event) => {
        setNumberOfAdults(event.target.value);
    };

    const handleNumberOfChildrenChange = (event) => {
        setNumberOfChildren(event.target.value);
    };

    const handleSearchSubmit = () => {
        // Implement the hotel search logic here
        console.log('Hotel search submitted:', {
            checkInDate,
            checkOutDate,
            city,
            numberOfRooms,
            numberOfAdults,
            numberOfChildren,
        });
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Hotel Booking</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <label className="mb-2">
                    Check-In Date:
                    <input
                        type="date"
                        name="checkInDate"
                        value={checkInDate}
                        onChange={handleCheckInDateChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Select date"
                    />
                </label>

                <label className="mb-2">
                    Check-Out Date:
                    <input
                        type="date"
                        name="checkOutDate"
                        value={checkOutDate}
                        onChange={handleCheckOutDateChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Select date"
                    />
                </label>

                <label className="mb-2">
                    City:
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleCityChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter city"
                    />
                </label>

                <label className="mb-2">
                    Number of Rooms:
                    <input
                        type="number"
                        name="numberOfRooms"
                        value={numberOfRooms}
                        onChange={handleNumberOfRoomsChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of rooms"
                    />
                </label>

                <label className="mb-2">
                    Number of Adults:
                    <input
                        type="number"
                        name="numberOfAdults"
                        value={numberOfAdults}
                        onChange={handleNumberOfAdultsChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of adults"
                    />
                </label>

                <label className="mb-2">
                    Number of Children:
                    <input
                        type="number"
                        name="numberOfChildren"
                        value={numberOfChildren}
                        onChange={handleNumberOfChildrenChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of children"
                    />
                </label>

                <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Hotel;
