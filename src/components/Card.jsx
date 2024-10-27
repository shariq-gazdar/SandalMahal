import React from "react";

function Card(props) {
  return (
    <div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
        <img
          src="https://fakeimg.pl/600x400"
          alt="Product"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-400 mb-4">{props.impression}.</p>
        <p className="text-gray-400 mb-4">{props.gender}.</p>
        <div className="flex flex-col">
          <div className="text-lg font-bold">Rs .{props.price}</div>
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
