import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function CardsContainer() {
  const [arr, setArr] = useState([]);

  const getProd = async () => {
    // Using async/await for cleaner syntax
    let api = import.meta.env.VITE_API;

    try {
      const response = await fetch(api);
      const data = await response.json();
      setArr(data.values);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const convertToArray = (str) => {
    return str
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((item) => item.trim().replace(/['"]/g, ""));
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <div className="mainProducts">
      <h1 className="text-white bg-black p-5 px-20 font-bold text-3xl">
        All Products :
      </h1>
      <div className="flex gap-10 flex-wrap bg-black p-2 justify-center pt-5 bg-blend-overlay">
        {arr.length > 0 &&
          arr.map((item, index) => (
            <Card
              key={index}
              title={item[0]}
              impression={item[1]}
              gender={item[2]}
              price={item[3]}
              imageArr={convertToArray(item[4])}
              prevPrice={item[5]}
            />
          ))}
      </div>
    </div>
  );
}

export default CardsContainer;
