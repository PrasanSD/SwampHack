import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div class="container">
        <h1
          class="display-1 d-flex justify-content-center"
          style={{ marginTop: "30%" }}
        >
          LastHour
        </h1>
        <h1 class="display-5 d-flex justify-content-center">
          Getting real projects and a team made quick and easy!
        </h1>
        <div class="d-flex flex-row justify-content-center mt-5">
          <Link to="/browse" class="btn btn-outline-dark mx-3">
            Browse Available Projects
          </Link>
          <Link to="/createProject" class="btn btn-outline-dark mx-3">
            Create a New Project
          </Link>
        </div>
      </div>
    </>
  );
}
