import Button from "react-bootstrap/Button";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./footer";
import Header from "./header";

function Signup() {
  return (
    <>
      <Header></Header>
      <div className="login-container ">
        <Container>
          <div className="login-poster">
            <img src="src\assets\images\poster.png" alt="" />
          </div>
        </Container>

        <Container>
          <div className="form-container mt-3">
            <h3 className="mb-4">Log In for Ride</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter " />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Full Name " />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Mobile Number " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Terms  Conditions" />
              </Form.Group>
              <Link to={"/"}>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Link>
              <p className="mt-2">
                Already have an account?<Link to={"/"}> Log In</Link>
              </p>
            </Form>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Signup;
