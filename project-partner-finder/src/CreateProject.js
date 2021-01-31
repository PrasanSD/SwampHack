import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { Multiselect } from "multiselect-react-dropdown";

export default function CreateProject() {
  const history = useHistory();
  const LOCALSTORAGE_KEY = "projectJSON";

  const defaultJSON = {
    name: "",
    description: "",
    tags: [],
    repo: "",
  };

  useEffect(() => {
    if (json == undefined || json == null) {
      setJSON(defaultJSON);
    }
  }, []);

  // useEffect(() => {
  //   let newJSON = setJSON([json]);
  //   localStorage.setItem("projectJSON", JSON.stringify(newJSON));
  //   setJSON(newJSON);
  // }, [json]);

  const tagsOptions = [
    {
      name: "C",
      id: "1",
    },
    {
      name: "C++",
      id: "2",
    },
    {
      name: "Python",
      id: "3",
    },
    {
      name: "Web",
      id: "4",
    },
    {
      name: "ML",
      id: "5",
    },
    {
      name: "VR",
      id: "6",
    },
  ];

  const setDefaultStatus = (x) => {
    return x;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [json, setJSON] = useState(setDefaultStatus(defaultJSON));
  const [tagsOption, settagsOption] = useState(tagsOptions);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createList();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    console.log(json);
    setJSON({
      ...json,
      [e.target.name]: e.target.value,
    });
  };

  function handleTagRemove(selectedList, removedItem) {
    setJSON({
      ...json,
      tags: selectedList,
    });
  }

  function handleTagChange(selectedList, selectedItem) {
    setJSON({
      ...json,
      tags: selectedList,
    });
  }

  const createList = () => {
    try {
      var data = json;
      saveJSON(data);
    } catch (err) {
      console.log(err);
    }
  };

  const validate = () => {
    let err = {};
    if (!json.name) {
      err.name = "Name is required";
    }
    if (!json.description) {
      err.description = "Decription is required";
    }
    if (!json.tags) {
      err.tags = "Tags is required";
    }
    if (!json.repo) {
      err.repo = "Repo is required";
    }

    return err;
  };

  const saveJSON = (json) => {
    let newJSON = setJSON([json]);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newJSON));
    setJSON(newJSON);
    history.push("/");
  };

  return (
    <>
      <Navbar />
      <div class="container">
        <h1 class="display-3 mt-5">Create Project</h1>

        <form action="" onSubmit={handleSubmit}>
          <div class="mt-5">
            <label for="projectName" class="form-label">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="name"
              class="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div class="mt-3">
            <label for="projectDescription" class="form-label">
              Project Description
            </label>
            <textarea
              class="form-control"
              id="projectDescription"
              rows="3"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div class="mt-3">
            <label for="projectTags" class="form-label">
              Tags(Separated by space)(Optional)
            </label>
            {/* <input
              type="text"
              id="projectTags"
              class="form-control"
              name="tags"
              onChange={handleTagChange}
            ></input> */}
            <Multiselect
              id="projectTags"
              class="form-control"
              options={tagsOptions}
              onSelect={handleTagChange}
              onRemove={handleTagRemove}
              displayValue="name"
            />
          </div>
          <div class="mt-3">
            <label for="projectRepo" class="form-label">
              Project Repository(Optional)
            </label>
            <input
              type="text"
              id="projectRepo"
              class="form-control"
              name="repo"
              onChange={handleChange}
            ></input>
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            Create!
          </button>
        </form>
      </div>
    </>
  );
}
