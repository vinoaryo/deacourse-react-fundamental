import React from "react";
import { Container } from "react-bootstrap";
import Collections from "./collections.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <Collections />
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
      </Container>
    </React.Fragment>
  );
};

export default Albums;
