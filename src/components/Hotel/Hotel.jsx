import React, { useEffect, useState } from 'react';
import HotelCard from '../ShowResult/HotelCard/HotelCard';
import './Hotel.css';
import HotelView from '../HotelView/HotelView';
import backgroundImage from '../../assets/bg-hotel.jpg';


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

    const [hotelData, setHotelData] = useState(null);
    const [matchLocations, setMatchLocations] = useState([]);
    const [searchHotel, setSearchHotel] = useState([]); // New state for filtered hotels
    const [hotelView, setHotelView] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../../public/Hotel.json');
                const data = await response.json();
                setHotelData(data);

                // Extract unique locations from the hotel data
                const locations = Array.from(new Set(data.map((hotel) => hotel.location)));
                setMatchLocations(locations);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Filter hotels based on the input city
        if (formData.city) {
            const filteredHotels = hotelData.filter((hotel) =>
                hotel.location.toLowerCase().includes(formData.city.toLowerCase())
            );
            setSearchHotel(filteredHotels);
        } else {
            setSearchHotel([]);
        }
    }, [formData.city, hotelData]);

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
        setHotelView(true);

    };

    return (
        <div className='relative pt-6' style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Ensure full height of the viewport
        }}>
            <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            <div className="flex flex-col container p-10 bg-purple-500 bg-opacity-85 relative shadow-lg text-white rounded-lg">
                <h1 className="mt-2 text-3xl font-bold mb-4">Hotel Booking</h1>

                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <label className="mb-2">
                        Check-In Date:
                        <input
                            type="date"
                            name="checkInDate"
                            value={formData.checkInDate}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded-md text-gray-400"
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
                            className="block w-full p-2 border text-gray-400 rounded-md"
                            placeholder="Select date"
                        />
                    </label>

                    <label className="mb-2">
                        City:
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="block w-full p-2 border text-gray-400 rounded-md"
                        >
                            <option value="">Select city</option>
                            {matchLocations.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="mb-2">
                        Number of Rooms:
                        <input
                            type="number"
                            name="numberOfRooms"
                            value={formData.numberOfRooms}
                            onChange={handleInputChange}
                            className="block w-full p-2 border text-gray-400 rounded-md"
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
                            className="block w-full p-2 border text-gray-400 rounded-md"
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
                            className="block w-full p-2 border text-gray-400 rounded-md"
                            placeholder="Enter number of children"
                        />
                    </label>


                </form>
                <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-96 mx-auto mt-5 px-4 py-2 bg-purple-700 bg-opacity-85 text-white  rounded-md hover:ring-4 hover:ring-purple-400 hover:shadow-lg transition-all"
                >
                    Search
                </button>

            </div>
            <div className='flex justify-center'>
                
                {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white 
                
                <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="flex mt-5 px-4 py-2 bg-blue-500 bg-opacity-85 text-white  rounded-md hover:ring-4 hover:ring-red-200 hover:shadow-lg transition-all"
                >
                    Search
                </button>
                
                
                
                dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Purple to pink////////////////////////
                    </span>
                </button> */}
            </div>
            <div className='relative'> 
                <HotelCard hotelSearchParams={hotelSearchParams} hotelData={hotelData} />
            </div>
            <div className='flex max-w-max mt-10 justify-center mx-auto relative gap-20'>
                {/* Pass the filtered hotels to HotelView component */}
                {hotelView &&
                    searchHotel.map((hotel) => (
                        <HotelView key={hotel._id} hotel={hotel} />
                    ))}
            </div>
        </div>
    );
};

export default Hotel;
