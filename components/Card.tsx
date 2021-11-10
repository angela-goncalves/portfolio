import type { TypesCard } from "../types";
export default function Card({
  title,
  description,
  bgImage,
  href,
  youtube,
  technologies,
  github,
}: TypesCard) {
  const bg =
    bgImage === "lightPink"
      ? "bg-pink2"
      : bgImage === "lightBlue"
      ? "bg-blue"
      : "";

  return (
    <div className="w-full max-w-sm my-8 md:mt-12 transform hover:scale-105">
      <div className={`${bg} rounded-tr-lg rounded-tl-lg p-2 shadow-box`}>
        <img src="/svg/Group297.svg" alt="three circles" />
      </div>
      <div className="w-full bg-gray-100 shadow-box rounded-br-lg rounded-bl-lg h-64 py-6 px-4  md:h-80 flex flex-col justify-center items-center">
        <h2 className="mb-2 md:mb-4 font-paragraph text-lg md:text-2xl text-center font-bold ">
          {title}
        </h2>
        <p className="md:w-full md:px-6 text-center font-normal text-base md:text-xl">
          {description}
        </p>
        <div className="flex space-x-5 my-6">
          {technologies.map((elem: any, index: any) => (
            <img key={index} src={elem.src} className={`${elem.width}`} />
          ))}
        </div>
        <div className="flex m-0 space-x-8 underline text-sm md:text-lg text-black font-bold">
          <a href={href} target="_blank">
            Demo
          </a>
          <a
            href={github}
            target="_blank"
            className={`${github.length === 0 ? "hidden" : "block"}`}
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
