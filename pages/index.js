import Head from "next/head";
import About from "../components/About";
import AllCards from "../components/ProjectCards";
import Contact from "../components/ContactMe";
import Nav from "../components/Navegation";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Angela's portfolio</title>
        <meta name="description" content="Front-end Developer Portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overlock:ital@1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap"
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
