import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PopupMarquees() {
 return (
   <div className="popup-marquees-container">
     <h1 className="text-center">Pop-Up Marquees</h1>
     <div className="row justify-content-center">
       <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="marquee-card">
           <div className="marquee-content text-center">
             <h2 className="marquee-size">3x3</h2>
             <img className="marquee-image" src="./images/default.png" alt="3x3 Marquee" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Designed to withstand moderate wind conditions.</p>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="marquee-card">
           <div className="marquee-content text-center">
             <h2 className="marquee-size">3x4.5</h2>
             <img className="marquee-image" src="./images/default.png" alt="3x4.5 Marquee" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Designed to withstand moderate wind conditions.</p>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="marquee-card">
           <div className="marquee-content text-center">
             <h2 className="marquee-size">3x6</h2>
             <img className="marquee-image" src="./images/default.png" alt="3x6 Marquee" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Designed to withstand moderate wind conditions.</p>
           </div>
         </div>
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
 );
}
