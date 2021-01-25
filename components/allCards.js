import Card from '../components/card'

const projectsData = [
    {
        image: "../gifs/survey-form.gif/",
        title: "Survey Form",
        description: "Survey of customer satisfaction after visiting the recently opened restaurant that wich costumers opinions would improve the service.",
    },
    {
        image: "../gifs/landing-page.gif/",
        title: "Product Landing Page",
        description: "Home page of what can be in the future a search engine for skin care products of brands asossiated with the page. This project is build with HTML and CSS with the Free Code Camp Responsive Project instructions",
    },
    {
        image: "../gifs/documentation-page.gif/",
        title: "Technical Documentation Page",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quisquam voluptatibus illo debitis, cum eos impedit cumque. Mollitia suscipit nobis nihil illum enim, debitis id porro consequatur ducimus quo necessitatibus?",
    },
    {
        image: "../gifs/tribute-page.gif/",
        title: "Tribute Page",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quisquam voluptatibus illo debitis, cum eos impedit cumque. Mollitia suscipit nobis nihil illum enim, debitis id porro consequatur ducimus quo necessitatibus?",
    },
]

export default function allCards() {
    return (
        <div id="projects" className="my-32 sm:py-16">
            <h2 className="p-4">Projects</h2>
            <p className="p-4 w-full text-justify sm:px-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quisquam voluptatibus illo debitis, cum eos impedit cumque.
            </p>
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
                {projectsData.map((project) =>
                    <Card title={project.title}
                        image={project.image}
                        description={project.description}
                    />
                )}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-around my-10">
                <div className="flex flex-col items-center">
                    <p className="py-4">Practicing in codepen with vanilla</p>
                    <a href="https://codepen.io/angela-goncalves/pen/zYKObdJc">
                        <img src="../svg/codepenicon.svg" className="w-16 " />
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="py-4">Other things in github</p>
                    <a href="https://github.com/angela-goncalves">
                        <img src="../svg/github.svg" className="w-16" />
                    </a>
                </div>
            </div>
        </div>
    )
}