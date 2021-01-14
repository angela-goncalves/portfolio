export default function Nav() {
    return (
        <nav id="navbar" className="w-full flex justify-between bg-white fixed top-0 m-1">
            <img src="svg/personal-logo.svg" alt="Angela's Logo" className="w-14"/>
            <ul className="w-full flex justify-around self-center">
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Work</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    )
}
