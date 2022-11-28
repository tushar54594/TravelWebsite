import React from "react";
import Bengaluru from "../assets/bengaluru.jpg";
import Bodhgaya from "../assets/bodhgaya.jpg";
import Kerela from "../assets/kerela.jpg";
import Ladakh from "../assets/ladakh.jpg";
import Tajmahal from "../assets/tajmahal.jpg";

function Destinations() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="py-4">Famous places to visit</h1>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Bodhgaya}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={Kerela} alt="/" />
        <img className="w-full h-full object-cover" src={Bengaluru} alt="/" />
        <img className="w-full h-full object-cover" src={Ladakh} alt="/" />
        <img className="w-full h-full object-cover" src={Tajmahal} alt="/" />
      </div>
    </div>
  );
}

export default Destinations;
