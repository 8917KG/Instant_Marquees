import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Umbrella() {
 return (
   <div className="umbrella-container">
     <h1 className="text-center">Umbrellas</h1>
     <div className="row justify-content-center">
       <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
         <div className="umbrella-card">
           <div className="umbrella-content text-center">
             <h2 className="umbrella-size">2.8 meter Umbrella</h2>
             <img className="umbrella-image" src="./images/default.png" alt="" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Nulla aliquet porttitor lacus luctus accumsan tortor posuere.</p>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
         <div className="umbrella-card">
           <div className="umbrella-content text-center">
             <h2 className="umbrella-size">3 meter Umbrella</h2>
             <img className="umbrella-image" src="./images/default.png" alt="" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Nulla aliquet porttitor lacus luctus accumsan tortor posuere.</p>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
         <div className="umbrella-card">
           <div className="umbrella-content text-center">
             <h2 className="umbrella-size">5 meter Umbrella</h2>
             <img className="umbrella-image" src="./images/default.png" alt="" />
             <p className="umbrella-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="subheading">Wind Rating:</div>
             <p className="subheading-text">Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Nulla aliquet porttitor lacus luctus accumsan tortor posuere.</p>
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
