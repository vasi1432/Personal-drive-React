import { Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Footer() {
  return (
    <div className="contain">
      <div className="content-left">
        <div>
          <img src="\images\logo.png" alt="" />
        </div>

        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="About">About CTPD</Nav.Link>
        <Nav.Link href="Ride">Ride with us</Nav.Link>
        <Nav.Link href="Drive">Drive with us</Nav.Link>
        <Nav.Link href="SAFETY">SAFETY</Nav.Link>
        <Nav.Link href="#pricing">
          <img src="\images\globe.png" alt="" /> EN
        </Nav.Link>
      </div>
      <div className="content-right">
        <div>Signup for newsletter</div>
        <div className="footer-input">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="footer-icons">
          <img src="\images\facebook.png" alt="" />
          <img src="\images\twitter.png" alt="" />
          <img src="\images\instagram.png" alt="" />
          <img src="\images\linkedin.png" alt="" />
          <img src="\images\youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
