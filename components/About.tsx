import Image from "next/image";
export default function About() {
  return (
    <div id="about" className="flex flex-col mt-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="p-2 pt-0 text-3xl md:text-7xl text-center text-darkPurple font-medium">
            Hello! I'm Angela Goncalves
          </h1>
          <h2 className="p-2 mb-8 text-2xl sm:p-3 md:text-5xl text-darkPurple">
            and I'm a Frontend Developer
          </h2>
          <div className="text-justify text-base md:text-xl max-w-4xl mt-12 mb-8">
            <p>I am venezuelan living in Buenos Aires Argentina.</p>
            <p>
              I started studying Programming HTML and CSS with Free Code Camp
              and I learn the basics of JavaScript with a tutor. Now, I'm part
              of a study group of React.js and Next.js, we build individual
              projects and help each other to know more about this technology.
            </p>
            <p>
              Thanks to that, I could work in bigger pojects like CMYK 3, in a
              Freelance and CMYK 4.
            </p>
          </div>
          <div className="flex space-x-8 w-full max-w-3xl">
            <a
              href="https://github.com/angela-goncalves"
              className="p-3 text-base md:text-xl font-semibold text-darkPink underline focus:outline-none hover:text-darkPurple"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/angela-goncalves-6009a518a/"
              className="p-3 text-base md:text-xl font-semibold text-darkPink underline focus:outline-none hover:text-darkPurple"
            >
              Linkedin
            </a>
          </div>
        </div>
        <Image
          className="rounded-xl"
          src="/png/me.jpg"
          alt="Picture of the author"
          width={340}
          height={456}
        />
      </div>
    </div>
  );
}
