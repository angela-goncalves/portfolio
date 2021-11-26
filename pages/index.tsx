import Head from "next/head";
import About from "../components/About";
import Cards from "../components/Cards";
import Contact from "../components/ContactMe";
import type { GetStaticProps } from "next";

interface Props {
  projects: any;
}
export const getStaticProps: GetStaticProps<Props, any> = async () => {
  const projects = await import("../api/projects/projects.json").then(
    (res) => res.default
  );
  return {
    props: {
      projects,
    },
  };
};
export default function Home({ projects }: any) {
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
      </Head>
      <About />
      <Cards projects={projects} />
      <Contact />
    </div>
  );
}
