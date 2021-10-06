import Head from "next/head";
import About from "../components/About";
import AllCards from "../components/ProjectCards";
import Contact from "../components/ContactMe";
import Nav from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Angela's portfolio</title>
        <meta name="description" content="Front-end Developer Portfolio"></meta>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Adamina&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <About />
      <AllCards />
      <Contact />
    </div>
  );
}
