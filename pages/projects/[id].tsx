import React from "react";
import Head from "next/dist/next-server/lib/head";
import type { GetStaticProps } from "next";
import data from "../../api/projects/projects.json";
import ProjectDetails from "../../components/ProjectDetails";
import { ProjectTypes } from "../../types";
import ProjectDescription from "../../components/ProjectDescription";
interface Props {
  project: any;
}

export const getStaticProps: GetStaticProps<Props, any> = async ({
  params,
}) => {
  const project = data.find((elem) => elem.id === params.id);
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export default function ProjectsPage({ project }: { project: ProjectTypes }) {
  return (
    <div className="w-full flex flex-col items-center ">
      <Head>
        <title>my portfolio</title>
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
      <div className="w-full flex flex-col items-center justify-center bg-gray-100">
        <ProjectDetails {...project} />
        <ProjectDescription {...project} />
      </div>
    </div>
  );
}
