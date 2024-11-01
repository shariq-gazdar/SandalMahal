import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";
import Order from "./components/Order";
import Footer from "./components/Footer";

function AppLayout({ handleBlur, blurClass }) {
  return (
    <div className="mainApp">
      <Nav change={handleBlur} />
      <div className={blurClass}>
        <Hero />
        <CardsContainer />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [blur, setBlur] = useState(false);
  const blurClass = blur ? "blur-xl" : "blur-0";

  function handleBlur(value) {
    setBlur(value);
  }

  return (
    <Router>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route
          path="/"
          element={<AppLayout handleBlur={handleBlur} blurClass={blurClass} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
