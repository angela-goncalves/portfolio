import Card from "./Card";

const projectsData = [
  {
    title: "Colab Orange",
    description:
      "An App where designers and developers can publish their own projects and contribute to others.",
    href: "https://cmyk-orange.vercel.app/",
    image: "lightBlue",
    youtube: "https://www.youtube.com/watch?v=YG0m_E9qb9s",
    gitHub: "https://github.com/frontendcafe/cmyk-orange",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-14",
      },
      {
        src: "../png/java-script.png",
        width: "w-14",
      },
      {
        src: "../svg/firebase.svg",
        width: "w-12",
      },
      {
        src: "../svg/bootstrap.svg",
        width: "w-16",
      },
    ],
  },
  {
    title: "Task tracker (To-do list)",
    description:
      "Add tasks and edit them if necessary, they will be saved in the localStorage.",
    image: "lightPink",
    href: "https://react-task-tracker-angela-goncalves.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/react-task-tracker",
    youtube: "",
    technologies: [
      {
        src: "../svg/react-icon.svg",
        width: "w-14",
      },
      {
        src: "../svg/tailwind.svg",
        width: "w-14",
      },
    ],
  },
  {
    title: "Fichap",
    description: "Freelance in team. Landing page about Fichap's service",
    image: "lightPink",
    href: "https://fichap-ivory.vercel.app/",
    gitHub: "https://github.com/pukiti/fichap",
    youtube: "",
    technologies: [
      {
        src: "../svg/react-icon.svg",
        width: "w-14",
      },
      {
        src: "../svg/tailwind.svg",
        width: "w-14",
      },
      {
        src: "../svg/next-js.svg",
        width: "w-14",
      },
    ],
  },
  {
    title: "Marvel-Store/CMYK-sunset",
    description: "Ecommerce to buy Marvel's comics.",
    href: "https://marvel-store.vercel.app/",
    image: "lightBlue",
    youtube: "https://www.youtube.com/watch?v=5Ykdu-njQwM&t=179s",
    gitHub: "https://github.com/frontendcafe/cmyk-sunset",
    technologies: [
      {
        src: "../svg/react-icon.svg",
        width: "w-14",
      },
      {
        src: "../svg/logo-Sass.svg",
        width: "w-14",
      },
      {
        src: "../svg/next-js.svg",
        width: "w-14",
      },
      {
        src: "../svg/firebase.svg",
        width: "w-12",
      },
    ],
  },
  {
    title: "Survey Form",
    description: "Survey of restaurant's custumer satisfaction.",
    image: "lightBlue",
    href: "https://fcc-survey-form-page.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-survey-form-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-14",
      },
    ],
  },
  {
    title: "Product Landing Page",
    description:
      "Products for Skin Care. All about skincare, from products, offers and news.",
    image: "lightPink",
    href: "https://fcc-landing-page-nine.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-Landing-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-14",
      },
    ],
  },
  {
    title: "Technical Documentation Page",
    description:
      "Introduction of Inmunology in spanish. Concepts and principal definitions.",
    image: "lightPink",
    href: "https://fcc-documentation-page.angela-goncalves.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-Documentation-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-14",
      },
    ],
  },
  {
    title: "Tribute Page",
    description:
      "I built it about my mom's favorite spanish singer, Juan Gabriel.",
    image: "lightBlue",
    href: "https://fcc-tribute-page-eosin.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-tribute-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-14",
      },
    ],
  },
];

export default function allCards() {
  return (
    <div id="projects" className="flex flex-col mt-72 mb-28 items-center">
      <div className="w-full flex flex-row justify-around">
        <h2 className="text-2xl md:text-5xl font-medium text-darkPurple">
          Projects
        </h2>
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
            technologies={project.technologies}
            github={project.gitHub}
          />
        ))}
      </div>
    </div>
  );
}
