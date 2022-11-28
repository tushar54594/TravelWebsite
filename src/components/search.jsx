import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="uppercase">
            Escape to the epitome of luxury, packed with signature amenities and
            services
          </h2>
          <p>
            Our hotel search allows users to compare hotel prices in just a few
            clicks from more than 300 booking sites for more than 5.0 million
            hotels and other types of accommodation in over 190 countries. We
            help millions of travelers each year compare deals for hotels and
            accommodations. Get information for weekend trips to cities like
            Mumbai or Bengaluru and you can find the right hotel quickly and
            easily. Delhi and its surrounding area are great for trips that are
            a week or longer with the numerous hotels available.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                This is the leading website for last 20 years
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">BEST FACILITIES</h3>
              <p className="py-1">This has all the facilities a user wants</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="py-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">ONLY 12 HOURS LEFT</p>
          <p className="bg-black text-gray-200 py-2">BOOK NOW</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Delhi</option>
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Goa</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
