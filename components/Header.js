export default function Header() {
  return (
    <div className="px-6">
      <main id="about" className="pt-20 md:pt-0">
        <div className="md:h-screen flex flex-col md:flex-row sm:items-center sm:justify-center">
          <img
            src="png/yop.jpg"
            alt="Angela's profile image"
            className="w-56 lg:w-80 h-auto rounded-full self-center"
          />
          <div className="flex flex-col p-3 md:w-1/2">
            <h1 className="self-center p-2 font-display text-4xl sm:text-6xl text-center text-h1 hover:text-h1hover cursor-default">
              Angela Goncalves
            </h1>
            <h2 className="self-center p-2 text-xl sm:p-3 sm:text-2xl">
              Front-End Developer
            </h2>
            <p className="text-justify p-1 sm:p-2">
              I am biology teacher and during quarantine I decided to start
              programming. After practicing with freecodecamp and mentoring I
              know about <strong>HTML, CSS and JavaScript</strong>. Currently, I
              am learning by myself <strong>Reactjs, Nextjs</strong> and{" "}
              <strong>tailwindcss</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
