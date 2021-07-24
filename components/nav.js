export default function Nav() {
  return (
    <nav className="w-full flex bg-nav fixed top-0 p-2 z-10">
      <img
        src="svg/personal-logo.svg"
        alt="Angela's Logo"
        className="w-12 lg:w-14 mx-3"
      />
      <ul className="w-full flex self-center justify-around font-subtitle text-xl lg:text-2xl">
        <li>
          <a href="#about" className="hover:underline hover:text-nav">
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline hover:text-nav">
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline hover:text-nav">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
