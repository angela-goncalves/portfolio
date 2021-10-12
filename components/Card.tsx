export default function Card({
  title,
  description,
  bgImage,
  href,
  youtube,
  technologies,
  github,
}) {
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
        <p className="w-full text-center font-normal text-xl">{description}</p>
        <div className="flex space-x-5 my-6">
          {technologies.map((elem) => (
            <img
              src={elem.src}
              className={`${elem.width} bg-white rounded-xl p-2`}
            />
          ))}
        </div>
        <div className="flex m-0 space-x-8 ">
          <a
            href={href}
            target="_blank"
            className="underline text-lg text-black font-bold"
          >
            Demo
          </a>
          <a
            href={github}
            target="_blank"
            className="underline text-lg text-black font-bold"
          >
            GitHub
          </a>
          <a
            href={youtube}
            target="_blank"
            className={`${
              youtube.length === 0 ? "hidden" : "block"
            } underline text-lg text-black font-bold`}
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}
