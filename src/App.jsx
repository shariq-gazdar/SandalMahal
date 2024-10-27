import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";

function App() {
  const [blur, setBlur] = useState(false);
  let blurClass = "opacity-100";
  function handleBlur(value) {
    setBlur(value);
  }
  if (blur) {
    blurClass = "blur-xl";
    console.log("In blur");
  } else {
    blurClass = "blur-0";
  }
  return (
    <div className="mainApp  ">
      <Nav change={handleBlur} />
      <div className={blurClass}>
        <Hero />
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
