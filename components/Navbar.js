export default function Nav() {
  return (
    <nav className="w-full flex bg-nav fixed top-0 p-2 z-10">
      <img
        src="svg/personal-logo.svg"
        alt="Angela's Logo"
        className="w-12 lg:w-14 mx-3"
      />
      <ul className="w-full flex self-center justify-center font-subtitle text-lg lg:text-xl">
        <li>
          <a href="#about" className="hover:underline">
            <p className="mx-8">About</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline ">
            <p className="mx-8">Projects</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline ">
            <p className="mx-8">Blog</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline ">
            <p className="mx-8">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
