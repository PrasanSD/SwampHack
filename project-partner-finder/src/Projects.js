import React from "react";
import Navbar from "./Navbar";

export default function Projects() {
  const projectjson = [{
      "name": "Testproject",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
      "maxLimit":"5",
      "currentMembers":"4"
  },
  {
    "name": "Another Test",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.",
    "maxLimit":"10",
    "currentMembers":"3"
}]

  return (
    <>
      <Navbar />
      <div class="container">
        <h1 class="display-3 mt-5">Projects</h1>

        <a type="button" class="btn btn-outline-secondary mt-3 mb-5">Start New Project +</a>


        <div class="card mt-3">
            <div class="card-header">
                <span>Member Type(Owner/Member or Member)</span>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-8"><h5 class="card-title">Project Name</h5></div>
                    <div class="col-4 d-flex card-text justify-content-end">Members: <span>#</span>/<span>#</span> </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <p class="card-text">Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nibh eget eros suscipit, vitae imperdiet mauris ultrices. Vestibulum venenatis lorem at suscipit vestibulum.</p>
                    </div>
                </div>
                <a href="#" class="btn btn-primary mt-2">View Details</a>
            </div>
        </div>

    </div> 
    </>
  );
}
