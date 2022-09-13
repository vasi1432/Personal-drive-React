import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Navbar.Brand href="#home">
        <img src="\images\logo.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{ gap: "0px" }}>
        <Nav
          className="flex text-nowrap "
          style={{ alignItems: "center", gap: "70px" }}
        >
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="About">About CTPD</Nav.Link>
          <Nav.Link href="Ride">Ride with us</Nav.Link>
          <Nav.Link href="Drive">Drive with us</Nav.Link>
          <Nav.Link href="SAFETY">SAFETY</Nav.Link>
          <Nav.Link href="pricing">
            <img src="\images\globe.png" alt="" /> EN
          </Nav.Link>

          <Nav className="flex">
            <Link to={"/"}>
              <Button variant="dark">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="light">Sign up</Button>
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
