export default function Nav() {
  return (
    <nav
      id="navbar"
      className="w-full flex justify-between bg-nav fixed top-0 p-1 z-10"
    >
      <a href="/">
        <img
          src="svg/personal-logo.svg"
          alt="Angela's Logo"
          className="w-12 mx-3"
        />
      </a>
      <ul className="w-full flex justify-around self-center font-subtitle text-2xl">
        <li>
          <a href="#about" className="hover:underline text-nav">
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline text-nav">
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline text-nav">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
