import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  const [blur, setBlur] = useState("opacity-100");
  return (
    <div className="mainApp   ">
      <Nav />
      <div className={blur}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
