import Head from 'next/head'
import Nav from '../components/nav'
import AllCards from '../components/allCards'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className="w-full sm:h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Overlock:ital@1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lateef&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <div className="px-5">
        <main id="about" className="pt-16 sm:pt-8">
          <div id="welcome-section" className="h-screen flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <img src="png/yop.jpg" alt="Angela's profile image" className="w-56 h-auto rounded-full self-center sm:pl-2 sm:w-1/3" />
            <div className="flex flex-col p-3 sm:w-1/2">
              <h1 className="self-center p-2 font-display text-4xl sm:text-6xl text-center text-h1 hover:text-h1hover cursor-default">
                Angela Goncalves
            </h1>
              <h2 className="self-center p-2 text-xl sm:p-3 sm:text-2xl">Front-End Developer</h2>
              <p className="text-justify p-1 sm:p-2">I am biology teacher and during quarantine I decided to resumed programming. After practicing with freecodecamp and mentoring I know a bit of <strong className="text-strong">HTML, CSS and JS</strong>. Currently, I am learning by myself <strong className="text-strong">React-Next</strong> and <strong className="text-strong">tailwind</strong>.
            </p>
            </div>
          </div>
        </main>
        <AllCards />
        <Contact />
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>
    </div>
  )
}
