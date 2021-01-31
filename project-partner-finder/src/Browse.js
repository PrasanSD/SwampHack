import React from "react";
import Navbar from "./Navbar";

export default function Browse() {
  
  return (
    <>
      <Navbar />
      <div class="container">
        <h1 class="display-3 mt-5">Browse Projects</h1>
        <div class="col-4 mt-5 mb-4"><input type="text" class="form-control" placeholder="Search"/></div>

        <div class="card mt-3">
            <div class="card-header d-flex flex-row">
                <div class="badge bg-light mx-1">tag1</div>
                <div class="badge bg-light mx-1">tag2</div>
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
