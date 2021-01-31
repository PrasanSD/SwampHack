import React from "react";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import StartNewProjectButton from "./StartNewProjectButton";
import ProjectDetails from "./ProjectDetails";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container className="m-auto pt-5">
        <div
          className="d-flex align-items-center mb-3"
          style={{ fontSize: "50px", fontWeight: "normal" }}
        >
          My Projects
        </div>
        <StartNewProjectButton />
        <ProjectDetails />
      </Container>
    </>
  );
}
