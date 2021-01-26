export default function Nav() {
    return (
        <nav id="navbar" className="w-full flex justify-between bg-nav fixed top-0 p-1">
            <img src="svg/personal-logo.svg" alt="Angela's Logo" className="w-12"/>
            <ul className="w-full flex justify-around self-center font-subtitle text-xl">
                <a href="#about" className="hover:underline text-nav hover:text-navhover">
                    <li>About</li>
                </a>
                <a href="#projects" className="hover:underline text-nav hover:text-navhover">
                    <li>Projects</li>
                </a>
                <a href="#contact" className="hover:underline text-nav hover:text-navhover">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    )
}
