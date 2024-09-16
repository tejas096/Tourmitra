import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Card = ({ image, name, rating, locations }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto air-card">
      <img src={image} alt={`${name}'s picture`} className="circle-image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="flex items-center mt-2">
          <span className="text-gray-700">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            </Stack>
          </span>
        </div>
        <p className="mt-2 text-gray-600">Locations : {locations}</p>
        <div className="mt-4 flex justify-between items-center"></div>
      </div>
    </div>
  );
};

export default Card;
