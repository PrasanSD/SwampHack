import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ProjectDetails() {
  return (
    <>
      <Card className="m-0 mr-2">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Subtitle className="d-flex justify-content-end">
            Member: 4/5
          </Card.Subtitle>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
