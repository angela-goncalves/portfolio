import Head from 'next/head'
import Nav from '../components/nav'


export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main >
        <div className="flex space-x-8">
          <img src="" alt="Angela's profile image"/>
          <div>
            <h1 className="title">
              Angela Goncalves
            </h1>
            <h2>Front-end Developer</h2>
            <h3>I am a graduate in Education and now I'm dedicated 100% to front-end development doing some
              stuff like this portfolio with HTML, CSS, JS, React/Next, tailwind and some animations.
              I'm looking for a job where I can continue to learn more about this blowing-mind carrer
            </h3>
          </div>
        </div>
      </main>
 </div>
  )
}
