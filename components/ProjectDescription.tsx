import React from "react";
import { ProjectTypes } from "../types";

export default function ProjectDescription(project: ProjectTypes) {
  const { descriptionPage, features, myTasks } = project;
  return (
    <div className="flex flex-col text-2xl md:text-3xl font-medium text-darkPurple self-start">
      <h2>Description</h2>
      <p className="text-lg md:text-2xl">{descriptionPage}</p>
      <div>
        <h2>The app contains:</h2>
        <ul>
          {features.map((elem: string, index: any) => (
            <li key={index} className="text-lg md:text-2xl">
              {elem}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My tasks were:</h2>
        <ul>
          {myTasks.map((elem: string, index: any) => (
            <li key={index} className="text-lg md:text-2xl">
              {elem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
