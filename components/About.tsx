import AboutLight from "../components/AboutLight";
export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-2 pt-0 text-3xl md:text-7xl text-center text-darkPurple font-medium">
        Hello! I'm Angela Goncalves
      </h1>
      <h2 className="p-2 mb-8 text-2xl sm:p-3 md:text-5xl text-darkPurple">
        and I am Frontend Developer...
      </h2>
      <AboutLight />
      <div className="text-justify text-base md:text-2xl max-w-6xl mt-28 mb-16">
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
        <a
          href="https://github.com/angela-goncalves"
          className="border-2 border-middlePink rounded-xl w-24 md:w-40 p-3 text-base md:text-xl font-semibold text-darkPurple  text-center hover:underline focus:outline-none"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/angela-goncalves-6009a518a/"
          className="border-2 border-middlePink rounded-xl w-24 md:w-40 p-3 text-base md:text-xl text-darkPurple text-center hover:underline focus:outline-none font-semibold"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
