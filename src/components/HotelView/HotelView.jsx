
import React from 'react';

const HotelView = ({ hotel }) => {
  const { _id, hotel_pic, h_name, rating, location, price, size_for } = hotel;

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg mx-2 mb-4 bg-purple-300 bg-opacity-85 p-4">
      <img className="w-full h-48 object-cover" src={hotel_pic} alt={h_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{h_name}</div>
        <p className="text-gray-900 font-semibold text-base mb-2">Location: {location}</p>
        <p className="text-gray-900 font-semibold text-base mb-2">Rating: {rating}</p>
        <p className="text-gray-900 font-semibold text-base mb-2">Price: ${price.toFixed(2)}</p>
        <p className="text-gray-900 font-semibold text-base mb-2">Size for: {size_for} persons</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{_id}
        </span>
      </div>
    </div>
  );
};

export default HotelView;
