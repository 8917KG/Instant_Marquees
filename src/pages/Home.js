import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../src/styling/Home.css';

export function Home(props) {
  return (
    <div className="home-container">
      <Carousel autoPlay infiniteLoop renderThumbs={() => null} className="slider">
        <div>
          <img className="img-fluid" src="./images/default.png" />
          <p className="legend">Gallery</p>
        </div>
        <div>
          <img className="img-fluid" src="./images/default.png" />
          <p className="legend">Gallery</p>
        </div>
        <div>
          <img className="img-fluid" src="./images/default.png" />
          <p className="legend">Gallery</p>
        </div>
        <div>
          <img className="img-fluid" src="./images/default.png" />
          <p className="legend">Gallery</p>
        </div>
        <div>
          <img className="img-fluid" src="./images/default.png" />
          <p className="legend">Gallery</p>
        </div>
      </Carousel>

      {/* For Pickups */}
      <Container className="mt-5 section">
        <h3 className="text-center mb-4">DIY MARQUEES</h3>
        <Row>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 1"
            />
            <div className="diy-info">
              <Link className="nav-link" to ="/diy-marquees">3x3m Marquee</Link>
            </div>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 2"
            />
            <Link className="nav-link" to ="/diy-marquees">3x4.5m Marquee</Link>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 3"
            />
            <Link className="nav-link" to ="/diy-marquees">3x6m Marquee</Link>
          </Col>
        </Row>
      </Container>

      {/* For event hire */}
      <Container className="mt-5 section">
        <h3 className="text-center mb-4">Pop-up MARQUEES</h3>
        <Row>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 1"
            />
            <div className="diy-info">
            <Link className="nav-link" to ="/popup-marquees">3x3m Marquee</Link>
            </div>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 2"
            />
            <Link className="nav-link" to ="/popup-marquees">3x4.5m Marquee</Link>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 3"
            />
            <Link className="nav-link" to ="/popup-marquees">3x6m Marquee</Link>
          </Col>
        </Row>
      </Container>

      {/* Structure marquees for events */}
      <Container className="mt-5 section">
        <h3 className="text-center mb-4">STRUCTURE MARQUEES</h3>
        <Row>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 1"
            />
            <div className="diy-info">
            <Link className="nav-link" to ="/structure-marquees">3x3m Structure Marquee</Link>
            </div>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 2"
            />
            <Link className="nav-link" to ="/structure-marquees">6x3m Structure Marquee</Link>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 3"
            />
            <Link className="nav-link" to ="/structure-marquees">9x3m Structure Marquee</Link>
          </Col>
        </Row>
      </Container>

      {/* Umbrellas for hire */}
      <Container className="mt-5 section">
        <h3 className="text-center mb-4">UMBRELLAS</h3>
        <Row>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 1"
            />
            <div className="diy-info">
            <Link className="nav-link" to ="/umbrellas">2.8m Umbrella</Link>
            </div>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 2"
            />
            <Link className="nav-link" to ="/umbrellas">3m Umbrella</Link>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 3"
            />
            <Link className="nav-link" to ="/umbrellas">5m Umbrella</Link>
          </Col>
        </Row>
      </Container>

      {/* Accessories for tables, chairs and weights. */}
      <Container className="mt-5 section">
        <h3 className="text-center mb-4">ACCESSORIES</h3>
        <Row>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 1"
            />
            <div className="diy-info">
            <Link className="nav-link" to ="/accessories">Chairs</Link>
            </div>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 2"
            />
            <Link className="nav-link" to ="/accessories">Tables</Link>
          </Col>
          <Col className="items">
            <img
              className="img-fluid"
              src="./images/default.png"
              alt="DIY 3"
            />
            <Link className="nav-link" to ="/accessories">Plastic Tables</Link>
          </Col>
        </Row>
      </Container>
      <div className="google-container">
        <div className="google-headlines">
          <p>Find us here:</p>
        </div>
        <div className="google-maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100700.83825487418!2d145.06439442995304!3d-37.93273862529728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b8a40399107%3A0x1f7a00b2e1094397!2sInstant%20Marquees%20-%20Marquee%20Hire%20Melbourne%20and%20Party%2C%20Events%20Hire!5e0!3m2!1sen!2sau!4v1692130249566!5m2!1sen!2sau"
            width="1000"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <Container className="mt-5">
        <Row>
          <Col md={6} className="mb-4">
            <div className="enquiry">
              <h3>Get in touch today for an instant quote</h3>
              <Button variant="primary" as={Link} to="/contact">Contact Us</Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="call-quotes">
              <h3>Call 03 9988 0921 or Enquiry now</h3>
              <Button variant="info" href="tel:+61399880921">Call Now</Button>{' '}
              <Button variant="outline-info" as={Link} to="/contact">Enquiry Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}