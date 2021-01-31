import React from "react";
import Navbar from "./Navbar";

export default function CreateProject() {

  return (
    <>
      <Navbar />
      <div class="container">    
        <h1 class="display-3 mt-5">Create Project</h1>

        <form action="">
            <div class="mt-5">
                <label for="projectName" class="form-label">Project Name</label>
                <input type="text" id="projectName" class="form-control"></input>
            </div>
            <div class="mt-3">
                <label for="projectDescription" class="form-label">Project Description</label>
                <textarea class="form-control" id="projectDescription" rows="3"></textarea>
            </div>
            <div class="mt-3">
                <label for="projectTags" class="form-label">Tags(Separated by space)(Optional)</label>
                <input type="text" id="projectTags" class="form-control"></input>
            </div>
            <div class="mt-3">
                <label for="projectRepo" class="form-label">Project Repository(Optional)</label>
                <input type="url" id="projectRepo" class="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Create!</button>
        </form>
    </div>
    </>
  );
}
