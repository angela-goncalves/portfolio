export default function Nav() {
  return (
    <nav className="flex justify-around md:justify-between py-5 px-0 md:py-8 md:px-10">
      <img
        src="svg/personal-logo.svg"
        alt="Angela's Logo"
        className="w-7 lg:w-12"
      />
      <ul className="flex text-sm space-x-8 self-center md:text-xl">
        <li>
          <a href="#" className="hover:underline">
            <p className="">About</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline ">
            <p className="">Projects</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline ">
            <p className="">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
