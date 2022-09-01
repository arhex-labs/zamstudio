import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { name } = useSelector(state => state.login);
  return (
    <Navbar sticky="top" bg="light" variant="light" expand="sm" className="mb-3">
      <Container className="d-flex justify-content-space-between">
        <Navbar.Brand>ZamStudio</Navbar.Brand>
        <Nav>
          <Nav.Item>{name}</Nav.Item>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Main Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link><i className="fa fa-sign-out" /></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
