
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
      <main id="about" className="mt-16 sm:mt-6">
        <div className="flex flex-col h-screen sm:flex-row sm:items-center sm:justify-center" id="welcome-section">
          <img src="png/yop.jpg" alt="Angela's profile image" className="w-56 h-auto rounded-full self-center sm:pl-2 sm:w-1/3" />
          <div className="flex flex-col p-4 sm:w-1/2">
            <h1 className="self-center">
              Angela Goncalves
            </h1>
            <h2 className="self-center">Front-end Developer</h2>
            <p className="text-justify">I have a degree in Education and during my studies I learned a bit of computer science. 
            During quarantine, saw very intersting  freecodecamp) I decided to enter the world 
            of programming. 
            I realized that starting as it should be in this new career was a bit difficult for me, so I took some mentoring where 
            I learned even more about HTML, CSS and Js. 
            Following wise advice I started to do the fcc projects (especially the responsive section) and the js section. 
            Now I continue with the Js exercises in fcc and at the moment I am learning React / Next, tailwind and typescript on my own.
            </p>
          </div>
        </div>
      </main>
      <AllCards  />
      <Contact />
      <Footer />
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
