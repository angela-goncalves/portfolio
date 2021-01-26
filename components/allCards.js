import Card from '../components/card'

const projectsData = [
    {
        image: "../gifs/survey-form.gif/",
        title: "Survey Form",
        description: "Survey of customer satisfaction after visiting a recently opened restaurant wich costumers opinions would improve their products or services, their brand, and their customer support.",
        href: "https://fcc-survey-form-page.vercel.app/",
    },
    {
        image: "../gifs/landing-page.gif/",
        title: "Product Landing Page",
        description: "Home page to find skin care products, offers or some information about skin care of brands asossiated with the page.",
        href: "https://fcc-landing-page-nine.vercel.app/",
    },
    {
        image: "../gifs/documentation-page.gif/",
        title: "Technical Documentation Page",
        description: "I like biology, so I tried to capture some concepts about Inmunology in spanish in this documentation page.",
        href: "https://fcc-documentation-page.angela-goncalves.vercel.app/",
    },
    {
        image: "../gifs/tribute-page.gif/",
        title: "Tribute Page",
        description: "This is my first fcc project that I did during mentoring. As it's a so simple page and I built it thinking about my mom's favorite singer, it didn't take me much time so I really enjoyed doing it",
        href: "https://fcc-tribute-page-eosin.vercel.app/",
    },
]

export default function allCards() {
    return (
        <div id="projects" className="py-16">
            <h2 className="p-4 font-subtitle text-2xl text-subtitle">Projects</h2>
            <div className="sm:w-1/2">
                <p className="p-4  text-justify sm:px-4 ">I have been bulding the <em>Freecodecamp Responsive Projects</em> with HTML and CSS (posted in <strong className="text-strong">GitHub</strong>) and coding some algoritms with JavaScript in <strong className="text-strong">codepen</strong>. This portfolio is build with fcc instructions and React/Next and Tailwind.
            </p>
                <div className="flex justify-around">
                    <a href="https://codepen.io/angela-goncalves">
                        <img src="../svg/codepenicon.svg" className="w-16 m-4" />
                    </a>
                    <a href="https://github.com/angela-goncalves">
                        <img src="../svg/github.svg" className="w-16 m-4" />
                    </a>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
                {projectsData.map((project) =>
                    <Card title={project.title}
                        image={project.image}
                        description={project.description}
                        href={project.href}
                    />
                )}
            </div>
        </div>
    )
}