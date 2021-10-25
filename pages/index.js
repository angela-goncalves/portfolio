import Head from "next/head";
import About from "../components/About.tsx";
import AllCards from "../components/ProjectCards.tsx";
import Contact from "../components/ContactMe.tsx";

export default function Home() {
  return (
    <div>
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
