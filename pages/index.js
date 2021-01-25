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
      </Head>
      <Nav />
      <main id="about" className="pt-24 sm:pt-8">
        <div id="welcome-section" className="h-screen flex flex-col sm:flex-row sm:items-center sm:justify-center">
          <img src="png/yop.jpg" alt="Angela's profile image" className="w-56 h-auto rounded-full self-center sm:pl-2 sm:w-1/3" />
          <div className="flex flex-col p-4 sm:w-1/2">
            <h1 className="self-center p-2">
              Angela Goncalves
            </h1>
            <h2 className="self-center p-2">Front-end Developer</h2>
            <p className="text-justify">I met programming during my university studies in Education.
            My desire to learn it again and turn
            it into my career was during the curentena and from there I began to study Html and css
            </p>
          </div>
        </div>
      </main>
      <AllCards />
      <Contact />
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
