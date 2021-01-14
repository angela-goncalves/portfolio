import Head from 'next/head'
import Nav from '../components/nav'
import AllCards from '../components/allCards'
import Footer from '../components/footer'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main id="about" className="mt-16">
        <div className="flex flex-col mt-2 h-screen" id="welcome-section">
          <img src="png/yop.jpg" alt="Angela's profile image" className="w-52 h-auto rounded-full self-center pt-2"/>
          <div className="flex flex-col p-2">
            <h1 className=" self-center">
              Angela Goncalves
            </h1>
            <h2 className="self-center">Front-end Developer</h2>
            <h3>I am a graduate in Education and now I'm dedicated 100% to front-end development doing some
              stuff like this portfolio with HTML, CSS, JS, React/Next, tailwind and some animations.
              I'm looking for a job where I can continue to learn more about this blowing-mind carrer. 
              <a href="#aboutMe"> Know more about me</a>
            </h3>
          </div>
        </div>
      </main>
        <AllCards id="work"/>
        <Contact/>
        <Footer/>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
 </div>
  )
}
