// Hotel.jsx

import React, { useState } from 'react';
import HotelCard from '../ShowResult/HotelCard/HotelCard';


const Hotel = () => {
    const [formData, setFormData] = useState({
        checkInDate: '',
        checkOutDate: '',
        city: '',
        numberOfRooms: '',
        numberOfAdults: '',
        numberOfChildren: '',
    });

    const [hotelSearchParams, setHotelSearchParams] = useState({
        checkInDate: '',
        checkOutDate: '',
        city: '',
        numberOfRooms: '',
        numberOfAdults: '',
        numberOfChildren: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSearchSubmit = () => {
        // Update the main state with the accumulated form data
        setHotelSearchParams(formData);

        // Implement the hotel search logic here
        console.log('Hotel search submitted:', formData);
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
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Select date"
                    />
                </label>

                <label className="mb-2">
                    Check-Out Date:
                    <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Select date"
                    />
                </label>

                <label className="mb-2">
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter city"
                    />
                </label>

                <label className="mb-2">
                    Number of Rooms:
                    <input
                        type="number"
                        name="numberOfRooms"
                        value={formData.numberOfRooms}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of rooms"
                    />
                </label>

                <label className="mb-2">
                    Number of Adults:
                    <input
                        type="number"
                        name="numberOfAdults"
                        value={formData.numberOfAdults}
                        onChange={handleInputChange}
                        className="block w-full p-2 border rounded-md"
                        placeholder="Enter number of adults"
                    />
                </label>

                <label className="mb-2">
                    Number of Children:
                    <input
                        type="number"
                        name="numberOfChildren"
                        value={formData.numberOfChildren}
                        onChange={handleInputChange}
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

            {/* Pass hotelSearchParams to HotelCard component */}
            <HotelCard hotelSearchParams={hotelSearchParams} />
        </div>
    );
};

export default Hotel;
