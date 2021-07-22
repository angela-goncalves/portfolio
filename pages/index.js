import Head from "next/document";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AllCards from "../components/AllCards";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Angela's portfolio</title>
        <meta name="description" content="Front-end Developer Portfolio"></meta>
        <html lang="en" />
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
      <Header />
      <AllCards />
      <Contact />
    </div>
  );
}
