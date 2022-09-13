import Footer from "./footer";
import Header from "./header";

function Drive() {
  return (
    <>
      <Header></Header>
      <div className="drive-section1">
        <div className="drive-section1-part1">
          <img
            src="\images\drive-section1-part1.png"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="drive-section1-part2">
          <span>Contact Comfort Trips</span> <br />
          <p>
            Have questions about driving with us? We’re <br /> here to give you
            answers.
          </p>
        </div>
      </div>
      <div className="drive-section2">
        <div className="drive-section2-part1">
          <h2>Get In Touch</h2>
          <div className="drive-section2-part1-input-container">
            <div className="drive-section2-part1-input-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile Number" />
            <input
              type="text"
              placeholder="Type your message here"
              id="drive-section2-part1-input-message"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
        <div className="drive-section2-part2">
          <h2>Get Directions</h2>
          <img
            src="\images\drive-section2-part2.png"
            className="img-responsive"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Drive;
