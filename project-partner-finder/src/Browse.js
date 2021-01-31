import React from "react";
import AllProjects from "./AllProjects";
import Navbar from "./Navbar";

export default function Browse() {
  const projectjson = [
    {
      name: "Testproject",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
      maxLimit: "5",
      currentMembers: "4",
      tags: ["web", "C++"],
    },
    {
      name: "Another Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
      maxLimit: "10",
      currentMembers: "3",
      tags: ["java", "C"],
    },
    {
      name: "Test Project 3",
      description: "this is a sample project",
      maxLimit: "6",
      currentMembers: "2",
      tags: ["Python", "C#", "React"],
    },
  ];
  return (
    <>
      <Navbar />
      <AllProjects projects={projectjson} />
    </>
  );
}
