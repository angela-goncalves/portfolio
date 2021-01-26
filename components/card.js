

export default function Card({ title, description, image, href }) {
    return (
        <div className="flex flex-col items-center m-4">
            <h2 className="project-tile p-4 font-paragraph text-subsubtitle underline text-2xl" id="titleProject">{title}</h2>
            <a href={href}><img src={image} alt={title} className="w-72 py-4 px-2" /> </a>
            <p className="w-72 py-4 px-2 sm:w-full sm:py-6 sm:px-8 text-justify">{description}</p>
        </div>
    )
}