import React from "react";

const Card = ({ image, name, rating, amount, locations }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21 16.54 14.47 22 10.3H15.82L12 4 8.18 10.3H2L7.46 14.47 5.82 21z" />
          </svg>
          <span className="ml-1 text-gray-700">{rating}</span>
        </div>
        <p className="mt-2 text-gray-600">{locations.join(", ")}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">{`$${amount}`}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
