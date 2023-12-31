/* eslint-disable @next/next/no-img-element */
import React from "react";
import LogoImage from "../../../public/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full  bg-gray-900 py-3">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-300 flex flex-col justify-center items-center">
          <Image
            src={LogoImage}
            // className="w-20 sm:w-20 rounded-full "
            alt="Hotel haven"
            width="144"
            height="68"
          />
          <ul
            role="list"
            className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Features
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Get started
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                About us
              </a>
            </li>
          </ul>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                {/* ... (SVG path data) */}
              </svg>
            </a>
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                {/* ... (SVG path data) */}
              </svg>
            </a>
            <a href="#" title="facebook" target="_blank" aria-label="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                {/* ... (SVG path data) */}
              </svg>
            </a>
            <a href="#" title="linkedin" target="_blank" aria-label="linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                {/* ... (SVG path data) */}
              </svg>
            </a>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright BookingHaven <span id="year"></span> | All rights
              reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
