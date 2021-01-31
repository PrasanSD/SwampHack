import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function StartNewProjectButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <Button
        variant="outline-secondary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        size="m"
        className="m-0 mr-2 mb-4"
      >
        <label className="pr-1" style={{ fontSize: "14px" }}>
          {isLoading ? "Loading…" : "Start New Project"}
        </label>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </Button>
    </>
  );
}
