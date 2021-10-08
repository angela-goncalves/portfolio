import AboutLight from "../components/AboutLight";
export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-2 pt-0 font-title text-2xl md:text-5xl text-center text-darkPurple">
        Hello! I'm Angela Goncalves
      </h1>
      <h2 className="p-2 mb-8 font-title text-xl sm:p-3 md:text-4xl text-darkPurple">
        and I am Frontend Developer...
      </h2>
      <AboutLight />
      <div className="text-justify font-subtitle text-base md:text-2xl max-w-6xl my-28">
        <p>...living in Buenos Aires Argentina.</p>
        <p>
          I started studying Programming with Free Code Camp and mentoring. Now,
          I am part of a study group of React.js and we build individual
          projects, but in company, so we can help each other to know more about
          this technology.
        </p>
        <p>
          Thanks to that, I could work in bigger pojects like CMYK 3, in a
          Freelance and CMYK 4.
        </p>
      </div>
      <div className="flex space-x-8 self-end w-full max-w-3xl">
        <button className="border-0 rounded-xl w-24 h-10 md:w-40 md:h-12 p-3 text-base md:text-xl text-white  hover:bg-darkPink bg-middlePink hover:text-white ">
          GitHub
        </button>
        <button className="border-0 rounded-xl w-24 h-10 md:w-40 md:h-12 p-3 text-base md:text-xl text-white  hover:bg-darkPink bg-middlePink hover:text-white">
          Linkedin
        </button>
      </div>
    </div>
  );
}
