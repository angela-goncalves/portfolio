import Card from "./Card";

const projectsData = [
  {
    image: "lightBlue",
    title: "Survey Form",
    description:
      "Survey of custumer satisfaction. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-survey-form-page.vercel.app/",
  },
  {
    image: "lightPink",
    title: "Product Landing Page",
    description:
      "Home page to find skin care products. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-landing-page-nine.vercel.app/",
  },
  {
    image: "lightBlue",
    title: "Technical Documentation Page",
    description:
      "I like biology, so I tried to capture some concepts about Inmunology in spanish in this documentation page. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-documentation-page.angela-goncalves.vercel.app/",
  },
  {
    image: "lightPink",
    title: "Tribute Page",
    description:
      "This is my first fcc project that I did with HTML and CSS. I built it about my mom's favorite singer, so I enjoyed make code of it. A FreeCodeCamp project, build with HTML and CSS.",
    href: "https://fcc-tribute-page-eosin.vercel.app/",
  },
  {
    image: "lightBlue",
    title: "Task tracker (To-do list)",
    description:
      "Add tasks and edit them if necessary. Project built with Reactjs and tailwindcss and used localStorage to save the tasks.",
    href: "https://react-task-tracker-eight.vercel.app/",
  },
  {
    image: "lightPink",
    title: "Marvel-Store/CMYK-sunset",
    description:
      "I love study in group and in FrontEndCafe I could do it. I really enjoyed this project because I could learn how to develop like in a dev job and know more about Next.js, Reactjs, Sass, Postman, firebase and Mongo DB.",
    href: "https://marvel-store.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=5Ykdu-njQwM&t=179s",
  },
  {
    image: "lightBlue",
    title: "Colab Orange",
    description:
      "I love study in group and in FrontEndCafe I could do it. I really enjoyed this project because I could learn how to develop like in a dev job and know more about Next.js, Reactjs, Sass, Postman, firebase and Mongo DB.",
    href: "https://marvel-store.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=YG0m_E9qb9s&t=5476s",
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
    <div id="projects" className="flex flex-col mt-72 mb-28 items-center">
      <div className="w-full flex flex-row justify-around">
        <h2 className="text-2xl md:text-5xl font-medium">Projects</h2>
        <p className="text-justify text-2xl">You can take a look of my work.</p>
      </div>
      <div className="w-full md:max-w-7xl grid justify-items-center md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            bgImage={project.image}
            description={project.description}
            href={project.href}
            youtube={project.youtube}
          />
        ))}
      </div>
    </div>
  );
}
