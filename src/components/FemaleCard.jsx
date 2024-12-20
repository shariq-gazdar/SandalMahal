import React from "react";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";

function MaleCard(props) {
  return (
    <div>
      <div className="bg-pink-900/90 text-white p-6 rounded-lg shadow-lg max-w-sm min-h-fit h-[45rem]">
        <ImageCarousel images={props.imageArr} />
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-400 mb-4">{props.impression}.</p>
        <p className="text-gray-400 mb-4">{props.gender}.</p>
        <div className="flex flex-col">
          {props.prevPrice ? (
            <div className="text-lg font-bold">Rs .{props.price}</div>
          ) : (
            <div className="text-lg font-bold mb-10">Rs .{props.price}</div>
          )}
          {props.prevPrice && (
            <p className="text-gray-400 mb-4 line-through">
              Rs.{props.prevPrice}
            </p>
          )}
          <div className="hover:ring-4 my-4 ring-yellow-400 rounded-full transition-all h-fit">
            <Link
              to="/order"
              state={{ title: props.title, description: props.impression }}
            >
              <button className="bg-white text-black px-4 py-2 rounded-2xl font-medium transition-all w-full hover:bg-yellow-400 hover:text-white">
                Order Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaleCard;
