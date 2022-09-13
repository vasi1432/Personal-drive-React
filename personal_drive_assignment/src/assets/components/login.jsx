import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./footer";
import Header from "./header";

function Login() {
  return (
    <>
      <Header></Header>
      <div className="login-container">
        <Container>
          <div className="login-poster">
            <img src="src\assets\images\poster.png" alt="" />
          </div>
        </Container>

        <Container>
          <div className="form-container">
            <h3>Log In for Ride</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Fogot Password?</p>
              </Form.Group>
              <Link to={"/home"}>
                <Button variant="primary" type="submit">
                  Log In
                </Button>
              </Link>
              <p>
                Don’t have an account?<Link to={"/signup"}> Sign Up</Link>
              </p>
            </Form>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
