import React from "react";

export default function ProjectPage({ projects }) {
  return (
    <>
      <div className="container">
        <h1 class="display-3 mt-5">Projects</h1>

        <a type="button" class="btn btn-outline-secondary mt-3 mb-5">
          Start New Project +
        </a>
      </div>

      {projects.length > 0 &&
        projects.map((value, index) => (
          <div class="container">
            <div class="card mt-3">
              <div class="card-header">
                <span>Member Type(Owner/Member or Member)</span>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">{value.name}</h5>
                  </div>
                  <div class="col-4 d-flex card-text justify-content-end">
                    Members: <span>{value.currentMembers}</span>/
                    <span>{value.maxLimit}</span>{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <p class="card-text">{value.description}</p>
                  </div>
                </div>
                <a href="#" class="btn btn-primary mt-2">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
