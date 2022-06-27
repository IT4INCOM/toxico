import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react"; // Hook para modificar botón
import TextField from "@mui/material/TextField";
const Logo = require("../images/Logo.png");

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false); // estado hook
  console.log("🚀 ~ file: Menu.jsx ~ line 9 ~ Menu ~ openMenu", openMenu);
  return (
    <>
  
      {/* <Navbar bg="light" expand="lg">
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
              <Nav.Link rel="icon" type="image/png" href=""></Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div>
                <TextField variant="standard" label="Username" />
                <TextField variant="outlined" label="Email" type="email" />
                <TextField variant="filled" label="Password" type="password" />
              </div>
              {/* <Nav.Link href="http://www.incom.mx"><img src={require("../images/Logo.png")} alt="" /></Nav.Link> */}
      {/* <Nav.Link href="http://www.incom.mx"><img src={Logo} alt="2" /></Nav.Link> */}
      {/* <button><img src="./imges/Logo.png" alt="my image" onClick={this.myfunction} /></button> */}
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
      {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
      {/* <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillrule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  cliprule="evenodd"
                ></path>
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg> */}
      {/* </Nav> */}
      {/* </Navbar.Collapse> */}
      {/* para mostrar el menu en estado true */}
      {/* {openMenu && <span>Hola</span>} */}
      {/* </Container> */}
      {/* </Navbar> */}
    </>
  );
};

export default Menu;
