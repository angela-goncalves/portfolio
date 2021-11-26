import type { ProjectTypes } from "../types";
import Link from "next/link";

export default function Card({
  title,
  id,
  description,
  bgColor,
  href,
  youtube,
  technologies,
  gitHub,
}: ProjectTypes) {
  const bg =
    bgColor === "lightPink"
      ? "bg-pink2"
      : bgColor === "lightBlue"
      ? "bg-blue"
      : "";

  return (
    <div className="w-full max-w-sm my-8 md:mt-12 transform hover:scale-105">
      <div className={`${bg} rounded-tr-lg rounded-tl-lg p-2 shadow-box`}>
        <img src="/svg/Group297.svg" alt="three circles" />
      </div>
      <div className="w-full bg-gray-100 shadow-box rounded-br-lg rounded-bl-lg h-64 py-6 px-4  md:h-80 flex flex-col justify-between items-center">
        <Link href={`/projects/${id}`}>
          <a className="flex flex-col items-center">
            <h2 className="mb-2 md:mb-4 font-paragraph text-lg md:text-2xl text-center font-bold ">
              {title}
            </h2>
            <p className="md:w-full md:px-6 text-center font-normal text-base md:text-xl">
              {description}
            </p>
            <div className="flex space-x-5 my-4 md:my-6">
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
                    : elem.name === "mern"
                    ? "w-24 md:w-32"
                    : "";
                return (
                  <img
                    key={index}
                    src={elem.src}
                    className={`${size}`}
                    alt={`${elem.name} icon`}
                  />
                );
              })}
            </div>
          </a>
        </Link>
        <div className="flex m-0 space-x-8 underline text-sm md:text-lg text-black font-bold">
          <a href={href} target="_blank">
            Demo
          </a>
          <a
            href={gitHub}
            target="_blank"
            className={`${gitHub.length === 0 ? "hidden" : "block"}`}
          >
            GitHub
          </a>
          <a
            href={youtube}
            target="_blank"
            className={`${youtube.length === 0 ? "hidden" : "block"}`}
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}
