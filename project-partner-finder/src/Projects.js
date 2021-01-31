import React from "react";
import Navbar from "./Navbar";
import ProjectPage from "./ProjectPage";

export default function Projects() {
  const projectjson = [
    {
      name: "Testproject",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
      maxLimit: "5",
      currentMembers: "4",
    },
    {
      name: "Another Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
      maxLimit: "10",
      currentMembers: "3",
    },
    {
      name: "Test Project 3",
      description: "this is a sample project",
      maxLimit: "6",
      currentMembers: "2",
    },
  ];

  return (
    <>
      <Navbar />
      <ProjectPage projects={projectjson} />
    </>
  );
}
