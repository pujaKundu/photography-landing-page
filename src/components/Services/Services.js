import React from 'react';
import Fade from "react-reveal/Fade";

const Services = () => {
    return (
      <div
        className="bg-slate-100 mb-24 pb-24 "
        id="services"
      >
        {" "}
        <Fade bottom>
          <h1 className="text-6xl mb-20 text-purple-500 pt-20">Our Services</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade left>
              <div className=" text-gray-800 border border-gray-200 drop-shadow-3xl mx-8 mb-8 shadow-xl hover:shadow-2xl">
                <div className="border">
                  <h2 className="text-2xl font-semibold py-5">Minimal</h2>
                  <h3 className="text-xl pb-3">
                    <span className="font-semibold">Price:</span> $20
                  </h3>
                </div>
                <ul className="list-none mt-12 pb-8 text-center">
                  <li className="pb-3 ">One Top Photographer</li>
                  <li className="pb-3">
                    <span className="font-semibold">Event duration:</span>1 hour
                  </li>
                  <li className="pb-3">
                    <span className="font-semibold">Number of pictures:</span>
                    Unlimited
                  </li>
                  <li className="pb-3">
                    <span className="font-semibold">
                      Specially edited photos:
                    </span>
                    100
                  </li>
                </ul>
              </div>
            </Fade>

            <div className=" text-gray-800 border border-gray-200 drop-shadow-3xl mx-8 mb-8 shadow-xl hover:shadow-2xl">
              <div className="border">
                <h2 className="text-2xl font-semibold py-5">Standard</h2>
                <h3 className="text-xl pb-3">
                  <span className="font-semibold">Price:</span> $40
                </h3>
              </div>
              <ul className="list-none mt-12 pb-8 text-center">
                <li className="pb-3 ">Two Top Photographer</li>
                <li className="pb-3">
                  <span className="font-semibold">Event duration:</span>4 hour
                </li>
                <li className="pb-3">
                  <span className="font-semibold">Number of pictures:</span>
                  Unlimited
                </li>
                <li className="pb-3">
                  <span className="font-semibold">
                    Specially edited photos:
                  </span>
                  100
                </li>
              </ul>
            </div>
            <Fade right>
              <div className=" text-gray-800 border border-gray-200 drop-shadow-3xl mx-8 mb-8 shadow-xl hover:shadow-2xl">
                <div className="border">
                  <h2 className="text-2xl font-semibold py-5">Exclusive</h2>
                  <h3 className="text-xl pb-3">
                    <span className="font-semibold">Price:</span> $100
                  </h3>
                </div>
                <ul className="list-none mt-12 pb-8 text-center">
                  <li className="pb-3 ">Two Top Photographer</li>
                  <li className="pb-3">
                    <span className="font-semibold">Event duration:</span> All
                    Day
                  </li>
                  <li className="pb-3">
                    <span className="font-semibold">Number of pictures:</span>
                    Unlimited
                  </li>
                  <li className="pb-3">
                    <span className="font-semibold">
                      Specially edited photos:
                    </span>
                    150
                  </li>
                </ul>
              </div>
            </Fade>
          </div>{" "}
        </Fade>
      </div>
    );
};

export default Services;