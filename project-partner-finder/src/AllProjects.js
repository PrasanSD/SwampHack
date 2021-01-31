import { Button, Dropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function AllProjects({ projects }) {
  return (
    <>
      <div class="container">
        <h1 class="display-3 mt-5">Browse Projects</h1>
        <div class="col-4 mt-5 mb-4 d-flex">
          <input
            className="mr-5"
            type="text"
            class="form-control"
            placeholder="Search"
          />
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">1</Dropdown.Item>
              <Dropdown.Item href="/">2</Dropdown.Item>
              <Dropdown.Item href="/">3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {projects.length > 0 &&
          projects.map((project) => (
            <div class="card mt-3">
              <div class="card-header d-flex flex-row">
                {project.tags.length > 0 ? (
                  project.tags.map((tag, index) => (
                    <div class="badge bg-dark mx-1" style={{ color: "white" }}>
                      {tag}
                    </div>
                  ))
                ) : (
                  <div class="badge bg-dark mx-1"></div>
                )}
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">{project.name}</h5>
                  </div>
                  <div class="col-4 d-flex card-text justify-content-end">
                    Members: <span>{project.currentMembers}</span>/
                    <span>{project.maxLimit}</span>{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <p class="card-text">{project.description}</p>
                  </div>
                </div>
                <Link to="/viewDetails" class="btn btn-primary mt-2">
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
