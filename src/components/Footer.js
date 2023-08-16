import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styling/Footer.css';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              <li><Link className='nav-link' to="/about">About Us</Link></li>
              <li><Link className='nav-link' to="/contact">Contacts</Link></li>
              <li><Link className='nav-link' to="/contact">Enquiry</Link></li>
              <li><Link className='nav-link' to="/diy-marquees">DIY Marquees</Link></li>
              <li><Link className='nav-link' to="/popup-marquees">Pop-Up Marquees</Link></li>
              <li><Link className='nav-link' to="/structure-marquees">Structure Marquees</Link></li>
              <li><Link className='nav-link' to="/umbrellas">Umbrellas</Link></li>
              <li><Link className='nav-link' to="/accessories">Accessories</Link></li>
            </ul>
          </Col>
          <Col className="footer-column">
            <h5>Find Us in Socials</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/InstantMarqueesandUmbrellas/" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/marqueesmelbourne/" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
          <Col className="footer-column">
            <h5>Gallery</h5>
            <div className="gallery-images">
              <div className="gallery-item">
                <img src="./images/default.png" alt="Gallery 1" />
                <p className="gallery-subheading">Time of image</p>
              </div>
              <div className="gallery-item">
                <img src="./images/default.png" alt="Gallery 2" />
                <p className="gallery-subheading">Time of image</p>
              </div>
              <div className="gallery-item">
                <img src="./images/default.png" alt="Gallery 3" />
                <p className="gallery-subheading"> Time of image</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='container-fluid'>
          <p>&copy; {props.year} all rights reserved Instant Marquees Unit Trust</p>
        </div>
      </Container>
    </footer>
  )
}