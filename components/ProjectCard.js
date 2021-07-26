export default function Card({ title, description, image, href }) {
  return (
    <a href={href}>
      <div className="w-80 h-96 z-0 flex flex-col items-center justify-between m-4 pt-4 px-4 border-2 rounded-2xl border-card transition-shadow duration-600 ease-in-out transform hover:scale-105">
        <img src={image} alt={title} className="w-48 rounded-2xl" />
        <p className="p-2 w-full text-justify font-description text-base">
          {description}
        </p>

        <h2
          className="p-2 font-paragraph text-subsubtitle text-2xl tracking-wider font-bold"
          id="titleProject"
        >
          {title}
        </h2>
      </div>
    </a>
  );
}
