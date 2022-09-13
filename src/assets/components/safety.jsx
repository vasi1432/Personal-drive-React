import Footer from "./footer";
import Header from "./header";

function Safety() {
  return (
    <>
      <Header></Header>
      <div className="safety">
        <div className="safety-section1">
          <div className="safety-section1-part1">
            <h1>Your Safety is important for us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="safety-section1-part2">
            <img
              src="\images\safety-section1-part-2.png"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
        <div className="safety-section2">
          <h1>Helping to keep each other safe during COVID-19</h1>
        </div>
        <div className="safety-section3">
          <div className="safety-section3-part1">
            <img
              src="\images\safety-injection.png"
              className="img-responsive"
              alt=""
            />
            <h3>Vaccinated Driver</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
          <div className="safety-section3-part2">
            <img
              src="\images\safety-temp.png"
              className="img-responsive"
              alt=""
            />
            <h3>Temprature Check</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
          <div className="safety-section3-part3">
            <img
              src="\images\safety-mask.png"
              className="img-responsive"
              alt=""
            />
            <h3>Wear Mask</h3>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
          </div>
        </div>
        <div className="safety-section4">
          <p>
            “Every day, our technology puts millions of people together in cars
            in cities around the world. Helping keep people safe is a huge
            responsibility and one we do not take lightly.”
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Safety;
