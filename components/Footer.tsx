import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-midPurple flex flex-col items-center p-4 md:p-11 mt-40 md:mt-56 text-white">
      {/* A goToTop button in process. 
      <a href="#about" className="self-end">
        <svg
          width="38"
          height="38"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#D9CBE2" />
          <path
            d="M36 30L24.1246 16.784C24.003 16.6486 23.5984 16.0992 23.3551 16.0315C22.734 15.8586 22.1859 16.4384 21.8754 16.784L10 30"
            stroke="#311643"
          />
        </svg>
      </a> */}
      <Link href="/">
        <a className="flex flex-col items-center">
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
            <line
              x1="16.5"
              y1="2.5"
              x2="16.5"
              y2="45.5"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="16.6733"
              y1="26.7729"
              x2="24.3729"
              y2="2.3267"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="25.4799"
              y1="1.85955"
              x2="37.4799"
              y2="42.8596"
              stroke="white"
            />
            <line
              x1="16.7007"
              y1="26.9053"
              x2="36.9053"
              y2="42.2993"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="32.62"
              y1="26.5"
              x2="24.5"
              y2="26.5"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="text-sm md:text-xl font-medium">Angela Goncalves</h2>
        </a>
      </Link>
      <div className=" flex flex-row space-x-4 md:space-x-10 text-sm md:text-lg mt-2 md:mt-8">
        <a href="#about" className="">
          About
        </a>
        <a href="#projects" className="">
          Projects
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </div>
      <div className="flex flex-row mt-4 mb-6 md:my-8 space-x-4 md:space-x-10">
        <a href="https://www.linkedin.com/in/angela-goncalves-6009a518a/">
          <img src="../svg/Linkedin.svg" alt="my linkedin profile" />
        </a>
        <a href="https://github.com/angela-goncalves">
          <img src="../svg/Github.svg" alt="my github profile" />
        </a>
      </div>
      <div className="w-full flex flex-row justify-between text-sm md:text-base">
        <p>Built with React, Next, Tailwind, Typescript.</p>
        <p className="text-center">Designed in figma and love. 2021</p>
      </div>
    </div>
  );
}
