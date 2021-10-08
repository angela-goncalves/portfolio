import Card from "./ProjectCard";

const projectsData = [
  {
    image: "../svg/undraw_form.svg/",
    title: "Survey Form",
    description:
      "Survey of custumer satisfaction. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-survey-form-page.vercel.app/",
  },
  {
    image: "../svg/undraw_landing.svg/",
    title: "Product Landing Page",
    description:
      "Home page to find skin care products. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-landing-page-nine.vercel.app/",
  },
  {
    image: "../svg/undraw_docs.svg/",
    title: "Technical Documentation Page",
    description:
      "I like biology, so I tried to capture some concepts about Inmunology in spanish in this documentation page. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-documentation-page.angela-goncalves.vercel.app/",
  },
  {
    image: "../svg/undraw_tribute.svg/",
    title: "Tribute Page",
    description:
      "This is my first fcc project that I did with HTML and CSS. I built it about my mom's favorite singer, so I enjoyed make code of it. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-tribute-page-eosin.vercel.app/",
  },
  {
    image: "../svg/undraw_Add_tasks.svg/",
    title: "Task tracker (To-do list)",
    description:
      "Add tasks and edit them if necessary. Project built with Reactjs and tailwindcss and used localStorage to save the tasks.",
    href: "https://react-task-tracker-eight.vercel.app/",
  },
  {
    image: "../svg/undraw_marvel-store.svg",
    title: "Marvel-Store/CMYK-sunset",
    description:
      "I love study in group and in FrontEndCafe I could do it. I really enjoyed this project because I could learn how to develop like in a dev job and know more about Next.js, Reactjs, Sass, Postman, firebase and Mongo DB.",
    href: "https://marvel-store.vercel.app/",
  },
  // {
  //   image: "../svg/undraw_local-store.svg",
  //   title: "Local Store",
  //   description:
  //     "To do some practice before learn about typescript and next I try this project that still is in process. Big project that I'll finish soon, so it will work like a generator of stores and their products.",
  //   href: "https://local-store-git-main-angela-goncalves.vercel.app/",
  // },
];

export default function allCards() {
  return (
    <div id="projects" className="flex flex-col items-center pb-16 pt-24 px-6">
      <h2 className="p-4 font-subtitle text-2xl lg:text-3xl text-subtitle">
        Projects
      </h2>
      <p className="w-full max-w-xl text-justify">
        My first projects were made just with HTML and CSS to get my
        FreeCodeCamp web Responsive certification and the other ones were built
        with Reactjs or Nextjs and Tailwind.
      </p>
      <div className="flex items-center mt-10">
        <a href="https://codepen.io/angela-goncalves">
          <img
            src="../svg/codepenicon.svg"
            alt="e-mail icon"
            className="w-12 md:w-16 mx-4"
          />
        </a>
        <a href="https://github.com/angela-goncalves">
          <img
            src="../svg/github.svg"
            alt="github icon"
            className="w-12 md:w-16"
          />
        </a>
      </div>
      <div className="w-full flex flex-col items-center md:grid justify-items-center md:grid-cols-2 lg:grid-cols-3 mt-8 max-w-6xl">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}
