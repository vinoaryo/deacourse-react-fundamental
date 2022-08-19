import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";

const Navigation = () => {
  const pathName = window.location.pathname;
  const path = pathName.substring(1);
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="">
          <Navbar.Brand
            href="/"
            className={path === "" ? "navbar-link active nav-brand m-2" : "navbar-link m-2 nav-brand"}
          >
            Victure
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-2">
              <Nav.Link
                href="/albums"
                className={
                  path === "albums"
                    ? "navbar-link active underline"
                    : "navbar-link"
                }
              >
                ALBUMS
              </Nav.Link>
              <Nav.Link
                href="/posts"
                className={
                  path === "posts"
                    ? "navbar-link active underline "
                    : "navbar-link"
                }
              >
                POST
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
