export default function Nav() {
  return (
    <nav className="flex justify-between py-5 px-10 md:py-8 ">
      <img
        src="svg/personal-logo.svg"
        alt="Angela's Logo"
        className="w-7 lg:w-12 mx-3"
      />
      <ul className="flex self-center font-subtitle md:text-xl">
        <li>
          <a href="#about" className="hover:underline">
            <p className="px-8">About</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline ">
            <p className="px-8">Projects</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline ">
            <p className="px-8">Blog</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline ">
            <p className="px-8">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
