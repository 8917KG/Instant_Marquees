import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../../src/styling/AboutUs.css'

export function AboutUs(props) {
  return (
    <div className="AboutUs">
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="text-center">About Us</h2>
            <p>
              At Instant Marquees we specialise in simple and affordable marquee and umbrella hire.
              We are Melbourne’s pop-up marquee specialists with the biggest range of instant marquees available.
            </p>
            <p>
              We provide marquees and umbrellas for a variety of events,
              from small family celebrations to large scale corporate or public events.
              We pride ourselves on providing great customer service, whether answering your initial phone
              enquiry right through to arriving on time to set up your marquee.
            </p>
            <p>
              Contact Us today and discover the Instant Marquees difference.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="text-center mt-4">
        <a href="/images/about.jpeg" target="_blank" rel="noopener noreferrer">
          <img src="/images/about.jpeg" alt="About Us" />
        </a>
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