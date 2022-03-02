import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
      <div className="my-24 " id='about'>
        <Fade bottom>
          <h1 className="text-6xl mb-20 text-purple-500">About Us</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <img
                className="px-8 drop-shadow-xl"
                src="https://img.freepik.com/free-photo/close-up-professional-digital-camera-tripod_169016-10266.jpg?t=st=1646149934~exp=1646150534~hmac=04a7e3c37845a181779b10c8c4f838580e1f3a5990f18d1087af73ec0df6342e&w=740"
                alt="camera"
              />
            </div>

            <div className="text-justify px-8 pr-14 pt-5">
              <p className="mb-5">
                Serene was created by a group of young photographers who chose
                their passion as their profession and this incident of their
                life have been pushing them constantly to expand their
                potentiality.
              </p>{" "}
              <p className="mb-5">
                Serene has a large number of people who love and appreciate our
                work . Among many other achievements we recognize this as the
                most important one as it directly indicates how many people are
                relating with us personally.
              </p>
              <p className="mb-5">
                In the last 6 years we have covered more than 6800+ events. Our
                team is now a strong team of 68 Photographers, cinematographers
                & Editors. All our photographers are highly educated.
              </p>
              <p>
                Recently we have taken Serene to an international level by
                launching our oce in Singapore , Malaysia and Greece specially
                for the client who want their pre/post wedding abroad.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
};

export default About;