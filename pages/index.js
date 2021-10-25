import Head from "next/head";
import About from "../components/About.tsx";
import AllCards from "../components/ProjectCards.tsx";
import Contact from "../components/ContactMe.tsx";

export default function Home() {
  return (
    <div className="font-asap m-4 mt-0 md:m-52 md:mt-28">
      <Head>
        <title>Angela's portfolio</title>
        <meta
          name="description"
          content="Angela's Front-end Developer Portfolio"
        ></meta>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <About />
      <AllCards />
      <Contact />
    </div>
  );
}
