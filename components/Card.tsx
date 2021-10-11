export default function Card({ title, description, bgImage, href, youtube }) {
  const bg =
    bgImage === "lightPink"
      ? "bg-cardLightPink bg-no-repeat bg-contain"
      : bgImage === "lightBlue"
      ? "bg-cardLightBlue bg-no-repeat bg-contain"
      : bgImage === "DarkPink"
      ? "bg-cardDarkPink bg-no-repeat"
      : bgImage === "DarkBlue"
      ? "bg-cardDarkBlue bg-no-repeat"
      : "";
  return (
    <div
      className={`${bg} w-full max-w-lg h-96 flex flex-col items-center justify-center  transition-shadow duration-600 ease-in-out transform hover:scale-105 mt-28`}
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <h2 className="pb-4 font-paragraph text-2xl text-center font-bold ">
          {title}
        </h2>
        <p className="w-full text-justify font-normal text-xl">{description}</p>
        <div className="flex mt-6 space-x-8">
          <a
            href={youtube}
            className="underline text-lg text-darkPurple font-bold"
          >
            Youtube
          </a>
          <a
            href={href}
            className="underline text-lg text-darkPurple font-bold"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
