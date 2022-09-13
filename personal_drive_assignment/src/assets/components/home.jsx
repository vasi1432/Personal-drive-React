import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./footer";
import Header from "./header";
function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="home-container">
        <section className="section1">
          <div className="section1-left">
            <h3>
              Everyday life,
              <br /> made simple.
            </h3>
            <div className="flex">
              <Link to={"/signup"}>
                <Button variant="dark">Sign Up to ride</Button>
              </Link>
              <Link to={"/drive"}>
                <Button variant="light">Apply to drive</Button>
              </Link>
            </div>
            <p>Download our app from Applestore and Playstore</p>
            <div className="flex">
              <img src="src\assets\images\section4-left-app.png" alt="" />
              <img src="src\assets\images\section4-left-gplay.png" alt="" />
            </div>
          </div>
          <div className="section1-right">
            <Container>
              {" "}
              <img
                src="src\assets\images\home-section1 (3).png"
                className="img-responsive"
                alt=""
              />
            </Container>
          </div>
        </section>
        <section className="section2">
          <img
            src="src\assets\images\home-section2.png"
            className="img-responsive"
            alt=""
          />
          <h3 className="section2-text">Invest and Earn</h3>
        </section>
        <section className="section3">
          <h3>Get an estimate.</h3>
          <input placeholder="Pick up Point"></input>
          <input placeholder="Drop Point"></input>
          <Button>Get Estimate</Button>
        </section>
        <section className="section4">
          <div className="section4-top">
            <div className="section4-left">
              <img
                src="src\assets\images\home-section4.png"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="section4-right">
              <div>
                <h4>DRIVE WITH COMFORT TRIPS</h4>
              </div>
              <div>
                <h3>Set your own hours. Earn on your own terms.</h3>
              </div>
              <div>
                <h6> Reliable earnings:</h6> Make money, keep your tips, and
                cash out when you want.
              </div>
              <div>
                <h6> A flexible schedule:</h6> Be your own boss and drive
                whenever it works for you.
              </div>
              <div>
                <h6> Get paid instantly:</h6> Cash out your earnings whenever
                you want.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default HomePage;
