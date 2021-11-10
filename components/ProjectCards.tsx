import Card from "./Card";
import Link from "next/link";

export default function allCards({ projects }: any) {
  console.log(projects);
  return (
    <div id="projects" className="flex flex-col mt-40 items-center">
      <div className="w-full flex flex-row space-x-16 bg-lightPink shadow-box p-3 rounded-tr-lg rounded-tl-lg">
        <img src="/svg/Group297.svg" alt="three circles" />
        <h2 className="text-2xl md:text-5xl font-medium text-darkPurple">
          Projects
        </h2>
      </div>
      <div className="w-full my-2 grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center rounded-br-lg rounded-bl-lg">
        {projects.map((project: any) => (
          <div key={project.id}>
            <Link href={`projects/${project.id}`}>
              <a>
                <Card
                  title={project.title}
                  bgImage={project.image}
                  description={project.description}
                  href={project.href}
                  youtube={project.youtube}
                  technologies={project.technologies}
                  github={project.gitHub}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
