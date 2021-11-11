import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-around md:justify-between py-5 px-0 md:py-8 md:px-10">
      <Link href="/">
        <a>
          <img
            src="/svg/personal-logo.svg"
            alt="Angela's Logo"
            className="w-7 lg:w-12"
          />
        </a>
      </Link>

      <ul className="flex text-sm space-x-8 self-center md:text-xl">
        <li>
          <Link href="/">
            <a href="#" className="hover:underline">
              <p className="">About</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a className="hover:underline ">
              <p className="">Projects</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a className="hover:underline">
              <p className="">Contact</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
