import React from "react";
import Carousel from "./components/carousel";
import Destinations from "./components/destinations";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
