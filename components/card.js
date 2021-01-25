

export default function Card({ title, description, image }) {
    return (
        <div className="flex flex-col items-center w-full mt-12">
            <h2 className="project-tile p-4 font-display" id="titleProject">{title}</h2>
            <img src={image} alt={title} className="w-72" /> 
            <p className="w-72 pt-4 sm:w-full sm:px-4 text-justify">{description}</p>
        </div>
    )
}