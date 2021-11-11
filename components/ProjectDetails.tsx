import React from "react";
import Image from "next/image";
import { ProjectTypes } from "../types";

export default function ProjectDetails(project: ProjectTypes) {
  const { title, image, date, technologies, href, gitHub, youtube } = project;
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row space-x-16 w-full bg-darkblue shadow-box p-3 rounded-tr-xl rounded-tl-xl ">
        <img src="/svg/Group297.svg" alt="three circles" />
        <h1 className="text-2xl md:text-5xl font-medium text-white">{title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-16 my-12 items-center">
        <Image src={image} alt={title} width={600} height={300} />
        <div className="flex flex-col text-2xl md:text-3xl font-medium text-darkPurple space-y-3">
          <div className="flex items-baseline space-x-6">
            <h2>Date:</h2>
            <p className="text-lg md:text-2xl">{date}</p>
          </div>
          <div className="flex items-baseline space-x-6">
            <h2>Demo:</h2>
            <a href={href} className="text-lg md:text-2xl underline">
              {href}
            </a>
          </div>
          <div
            className={`flex items-baseline space-x-6 ${
              gitHub.length === 0 ? "hidden" : "flex items-baseline space-x-6"
            }`}
          >
            <h2>GitHub:</h2>
            <a href={gitHub} className="text-lg md:text-2xl underline">
              {gitHub}
            </a>
          </div>
          <div
            className={`${
              youtube.length === 0 ? "hidden" : "flex items-baseline space-x-6"
            }`}
          >
            <h2>Youtube:</h2>
            <a href={youtube} className="text-lg md:text-2xl underline">
              {youtube}
            </a>
          </div>
          <div className="flex space-x-4">
            <h2>Techonologies:</h2>
            {technologies.map((elem: any, index: any) => {
              const size =
                elem.name === "html"
                  ? "w-8 md:w-12"
                  : elem.name === "react"
                  ? "w-10 md:w-12"
                  : elem.name === "css"
                  ? "w-8 md:w-12"
                  : elem.name === "firebase"
                  ? "w-8 md:w-10"
                  : elem.name === "javaScript"
                  ? "w-10 md:w-12"
                  : elem.name === "bootstrap"
                  ? "w-10 md:w-14"
                  : elem.name === "next"
                  ? "w-8 md:w-12"
                  : elem.name === "tailwind"
                  ? "w-10 md:w-14"
                  : elem.name === "sass"
                  ? "w-10 md:w-14"
                  : "";
              return <p key={index}> {elem.name},</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
