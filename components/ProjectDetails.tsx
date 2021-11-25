import React from "react";
import Image from "next/image";
import { ProjectTypes } from "../types";

export default function ProjectDetails(project: ProjectTypes) {
  const { title, image, date, technologies, href, gitHub, youtube } = project;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-darkblue shadow-box p-6 rounded-tr-xl rounded-tl-xl">
        <img src="/svg/Group297.svg" alt="three circles" />
      </div>
      <div className="w-full flex flex-col mt-12 items-center">
        <h1 className="text-3xl md:text-5xl font-medium text-darkPurple mb-12">
          {title}
        </h1>
        <div className="px-6">
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="w-full max-w-6xl text-2xl md:text-3xl font-medium space-y-3 mt-12 px-6">
          <div className="">
            <h2>Date:</h2>
            <p className="text-lg md:text-2xl">{date}</p>
          </div>
          <div className="">
            <h2>Demo:</h2>
            <a href={href} className="text-lg md:text-2xl underline">
              {href}
            </a>
          </div>
          <div className={`${gitHub.length === 0 ? "hidden" : "block"}`}>
            <h2>GitHub:</h2>
            <a href={gitHub} className="text-lg md:text-2xl underline">
              {gitHub}
            </a>
          </div>
          <div className={`${youtube.length === 0 ? "hidden" : "block"}`}>
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
                  ? "w-10 md:w-12"
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
              return (
                <img
                  src={elem.src}
                  key={index}
                  className={`flex flex-wrap ${size}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
