import React from "react";
import ImageCarousel from "./ImageCarousel";

function Card(props) {
  return (
    <div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
        <ImageCarousel images={props.imageArr} />

        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-400 mb-4">{props.impression}.</p>
        <p className="text-gray-400 mb-4">{props.gender}.</p>
        <div className="flex flex-col">
          <div className="text-lg font-bold">Rs .{props.price}</div>
          <button className="bg-white text-black px-4 py-2 my-2 rounded-2xl font-medium hover:bg-yellow-500 hover:text-white transition hover:ring-2 ring-yellow-500 ">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
