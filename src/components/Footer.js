import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styling/Footer.css';

export function Footer(props) {
  return (
    <footer className='footer'>
      <Container className='py-5 footer-container'>
        <Row>
          <Col className="footer-column">
            <h5>About Us</h5>
            <p>At Instant Marquees we specialise in simple and affordable marquee and umbrella hire.
              We are Melbourne’s pop-up marquee specialists with the biggest range of instant marquees available.</p>
          </Col>
          <Col className="footer-column">
            <h5>Categories</h5>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              {/* Add more categories */}
            </ul>
          </Col>
          <Col className="footer-column">
            <h5>Find Us in Socials</h5>
            <p>Social media links and information.</p>
          </Col>
          <Col className="footer-column">
            <h5>Gallery</h5>
            <p>Gallery images and information.</p>
          </Col>
        </Row>
        <div className='container-fluid'>
          <p>&copy; {props.year} all rights reserved Instant Marquees Unit Trust</p>
        </div>
      </Container>
    </footer>
  )
}