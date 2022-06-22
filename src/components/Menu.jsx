import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react"; // Hook para modificar botón

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);// estado hook
  console.log("🚀 ~ file: Menu.jsx ~ line 9 ~ Menu ~ openMenu", openMenu) 
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Button onClick={() => setOpenMenu(!openMenu)}>
            <span>
            <svg
            style={{ width: "2rem", height: "1.5rem" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
            </span>
          </Button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          {/* para mostrar el menu en estado true */}
          {openMenu && (<span>Hola</span>)} 
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
