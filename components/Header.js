export default function Header() {
  return (
    <main
      id="about"
      className="mt-24 md:pt-28 md:pb-20 px-6 flex flex-col items-center lg:flex-row justify-center space-x-5"
    >
      <img
        src="png/yop.jpg"
        alt="Angela's profile image"
        className="w-56 lg:w-80 h-auto rounded-full self-center"
      />
      <div className="flex flex-col">
        <h1 className="self-center p-2 font-display text-4xl sm:text-6xl text-center text-h1">
          Angela Goncalves
        </h1>
        <h2 className="self-center p-2 text-xl sm:p-3 sm:text-2xl">
          Front-End Developer
        </h2>
        <p className="w-full text-justify p-1 sm:p-2 max-w-xl">
          I am biology teacher and during quarantine I decided to start
          programming. After practicing with freecodecamp and mentoring I know
          about <strong>HTML, CSS and JavaScript</strong>. Currently, I am
          learning by myself <strong>Reactjs, Nextjs</strong> and{" "}
          <strong>tailwindcss</strong>.
        </p>
      </div>
    </main>
  );
}
