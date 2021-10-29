import Card from "./Card";

const projectsData = [
  {
    id: 1,
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
        width: "w-10 md:w-12",
      },
      {
        src: "../png/java-script.png",
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/firebase.svg",
        width: "w-8 md:w-10",
      },
      {
        src: "../svg/bootstrap.svg",
        width: "w-10 md:w-14",
      },
    ],
  },
  {
    id: 2,
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
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/tailwind.svg",
        width: "w-10 md:w-12",
      },
    ],
  },
  {
    id: 3,
    title: "Fichap",
    description: "Freelance in team. Landing page about Fichap's service",
    image: "lightBlue",
    href: "https://fichap-ivory.vercel.app/",
    gitHub: "",
    youtube: "",
    technologies: [
      {
        src: "../svg/react-icon.svg",
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/tailwind.svg",
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/next-js.svg",
        width: "w-8 md:w-12",
      },
    ],
  },
  {
    id: 4,
    title: "Marvel-Store/CMYK-sunset",
    description: "Ecommerce to buy Marvel's comics.",
    href: "https://marvel-store.vercel.app/",
    image: "lightPink",
    youtube: "https://www.youtube.com/watch?v=5Ykdu-njQwM&t=179s",
    gitHub: "https://github.com/frontendcafe/cmyk-sunset",
    technologies: [
      {
        src: "../svg/react-icon.svg",
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/logo-Sass.svg",
        width: "w-10 md:w-12",
      },
      {
        src: "../svg/next-js.svg",
        width: "w-8 md:w-12",
      },
      {
        src: "../svg/firebase.svg",
        width: "w-8 md:w-10",
      },
    ],
  },
  {
    id: 5,
    title: "Survey Form",
    description: "Survey of restaurant's custumer satisfaction.",
    image: "lightBlue",
    href: "https://fcc-survey-form-page.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-survey-form-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-10 md:w-12",
      },
      {
        src: "../png/css-3.png",
        width: "w-10 md:w-12",
      },
    ],
  },
  {
    id: 6,
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
        width: "w-10 md:w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-10 md:w-14",
      },
    ],
  },
  {
    id: 7,
    title: "Technical Documentation Page",
    description:
      "Introduction of Inmunology in spanish. Concepts and principal definitions.",
    image: "lightBlue",
    href: "https://fcc-documentation-page.angela-goncalves.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-Documentation-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-10 md:w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-10 md:w-14",
      },
    ],
  },
  {
    id: 8,
    title: "Tribute Page",
    description:
      "I built it about my mom's favorite spanish singer, Juan Gabriel.",
    image: "lightPink",
    href: "https://fcc-tribute-page-eosin.vercel.app/",
    gitHub: "https://github.com/angela-goncalves/fcc-tribute-page",
    youtube: "",
    technologies: [
      {
        src: "../png/html5.png",
        width: "w-10 md:w-14",
      },
      {
        src: "../png/css-3.png",
        width: "w-10 md:w-14",
      },
    ],
  },
];

export default function allCards() {
  return (
    <div id="projects" className="flex flex-col mt-40 items-center">
      <div className="w-full flex flex-row space-x-16 bg-lightPink shadow-box p-3 rounded-tr-lg rounded-tl-lg">
        <img src="/svg/Group297.svg" alt="three circles" />
        <h2 className="text-2xl md:text-5xl font-medium text-darkPurple">
          Projects
        </h2>
      </div>
      <div className="my-2 w-full md:max-w-7xl grid justify-items-center md:grid-cols-2 rounded-br-lg rounded-bl-lg">
        {projectsData.map((project) => (
          <Card
            key={project.id}
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
