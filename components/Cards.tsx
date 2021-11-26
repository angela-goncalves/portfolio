import Card from "./Card";

export default function Cards({ projects }: any) {
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
            <Card
              id={project.id}
              title={project.title}
              bgColor={project.bgColor}
              description={project.description}
              href={project.href}
              youtube={project.youtube}
              technologies={project.technologies}
              gitHub={project.gitHub}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
