import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function CardsContainer() {
  const [arr, setArr] = useState([]);
  const getProd = () => {
    let api = import.meta.env.VITE_API;

    fetch(api).then((res) => {
      res.json().then((data) => {
        setArr(data.values);
        console.log(data.values);
      });
    });
  };

  useEffect(() => {
    getProd();
  }, []);
  return (
    <div className="flex gap-10 flex-wrap bg-black p-2 justify-center pt-5">
      {arr.map((item, index) => (
        <Card
          key={index}
          title={item[0]}
          impression={item[1]}
          gender={item[2]}
          price={item[3]}
        />
      ))}
      <Card />
    </div>
  );
}

export default CardsContainer;
