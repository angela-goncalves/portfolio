import React from "react";
import { ProjectTypes } from "../types";

export default function ProjectDescription(project: ProjectTypes) {
  const { descriptionPage, features, myTasks } = project;

  const handlerOnClick = () => {};

  return (
    <div className="w-full flex flex-col text-2xl md:text-3xl font-medium max-w-6xl text-justify px-6 mt-4 mb-16">
      <h2>Description</h2>
      <p className="text-lg md:text-2xl">{descriptionPage}</p>
      <div className="mt-4">
        <h2>The app contains:</h2>
        <ul>
          {features.map((elem: string, index: any) => (
            <li key={index} className="text-lg md:text-2xl">
              - {elem}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2>My tasks were:</h2>
        <ul>
          {myTasks.map((elem: string, index: any) => (
            <li key={index} className="text-lg md:text-2xl">
              - {elem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
