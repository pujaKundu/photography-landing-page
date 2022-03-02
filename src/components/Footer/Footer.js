import React from 'react';
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
      <div className="bg-slate-200 py-16">
        <h3 className="text-3xl text-purple-600">Serene</h3>
        <div>
          <ul className="flex justify-center mt-4">
            <li className="text-sm">
              {" "}
              <SocialIcon className="mr-4" url="https://facebook.com/" />{" "}
            </li>
            <li className="text-sm">
              {" "}
              <SocialIcon className="mr-4" url="https://instagram.com/" />{" "}
            </li>
            <li className="text-sm">
              {" "}
              <SocialIcon url="https://twitter.com/" />{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <p>Mirpur-12, Dhaka, Bangladesh</p>
          <p>Contact: +8801234567</p>
          <p>Email: info@serenephotography.com</p>
          <p className='mt-12'>© All rights reserved, 2022</p>
        </div>
      </div>
    );
};

export default Footer;