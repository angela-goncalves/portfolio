import React from "react";
import type { GetStaticProps } from "next";
import data from "../../api/projects/projects.json";

interface Props {
  projects: any;
}

export const getStaticProps: GetStaticProps<Props, any> = async ({
  params,
}) => {
  const projects = data.find((elem) => elem.id === params.id);
  console.log(data);
  return {
    props: {
      projects,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default function ProjectsPage({ projects }: any) {
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-medium text-darkPurple">
        {projects.title}
      </h1>
    </div>
  );
}
