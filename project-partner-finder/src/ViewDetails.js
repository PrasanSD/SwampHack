import React from "react";
import Navbar from "./Navbar";

export default function ViewDetails() {
  return (
    <>
      <Navbar />
      <div class="container">
        <h1 class="display-3 mt-5">Project Name</h1>
        <div class="d-flex flex-row mt-3">
          <div class="mx-1">Tags:</div>
          <div class="badge bg-dark mx-1" style={{ color: "white" }}>
            tag1
          </div>
          <div class="badge bg-dark mx-1" style={{ color: "white" }}>
            tag2
          </div>
        </div>
        <div class="p-2 mt-3 col-8">
          Project Description. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae
          imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit
          vestibulum.
        </div>
        <div class="mt-3">
          <a href="#">Link to Repository</a>
        </div>
        <h1 class="display-5 mt-5">
          Members: <span>#</span>/<span>#</span>
        </h1>
        <ul class="list-group mt-2 col-8">
          <li class="list-group-item">Member 1</li>
          <li class="list-group-item">Member 2</li>
          <li class="list-group-item">Member 3</li>
          <li class="list-group-item">Member 4</li>
          <li class="list-group-item">Member 5</li>
        </ul>
        <h1 class="display-5 mt-5">
          !Requests:<span>#</span>
        </h1>
        <div class="card mt-3 col-8">
          <h5 class="card-title mt-2">Requesting User</h5>
          <p class="card-text mt-2">
            Hi I'd like to join your team(Request message)
          </p>
          <div class="d-flex flex-row mb-3">
            <a href="#" class="card-link btn btn-primary">
              Accept
            </a>
            <a href="#" class="card-link btn btn-secondary">
              Reject
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
