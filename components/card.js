

export default function Card({ title, description, image, href }) {
    return (
        <a href={href}><div className="project-tile flex flex-col items-center m-6 p-6 rounded-2xl bg-card transition-shadow duration-600 ease-in-out transform hover:scale-105">
            <h2 className=" p-4 font-paragraph text-subsubtitle underline text-2xl text-center" id="titleProject">{title}</h2>
            <img src={image} alt={title} className="w-full p-2" />
            <p className="p-2 w-full text-justify font-description text-base">{description}</p>
        </div>
        </a>
    )
}