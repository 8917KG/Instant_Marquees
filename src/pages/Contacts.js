import { useState } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import emailjs from 'emailjs-com';

import '../../src/styling/Contact.css';

export function Contacts(props) {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactEmail: '',
    contactNumber: '',
    contactOrganization: '',
    eventFor: '',
    eventSuburb: '',
    eventDate: '',
    marqueeSize: '',
    weightOption: '',
    hireOption: '',
    eventType: '',
    furtherEnquiry: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="Contacts">
      <Container>
        <h1>Contact Us</h1>
        <Form action="https://formspree.io/f/meqbadkw" method="POST">
          <Row>
            {/* First Column */}
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label className="label">First Name: *</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contactEmail">
                <Form.Label className="label">Email: *</Form.Label>
                <Form.Control
                  type="text"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contactOrganization">
                <Form.Label className="label">Organization/Url: *</Form.Label>
                <Form.Control
                  type="text"
                  name="contactOrganization"
                  value={formData.contactOrganization}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="eventSuburb">
                <Form.Label className="label">Event Suburb: *</Form.Label>
                <Form.Control
                  type="text"
                  name="eventSuburb"
                  value={formData.eventSuburb}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="marqueeSize">
                <Form.Label className="label">Marquee Size*</Form.Label>
                <Form.Control
                  type="text"
                  name="marqueeSize"
                  value={formData.marqueeSize}
                  onChange={handleChange}
                  required
                  placeholder="Please specify the area to be covered(in meters)"
                />
              </Form.Group>

              <Form.Group controlId="hireOption">
                <Form.Label className="label">To secure Marquee *</Form.Label>
                <Form.Control
                  as="select"
                  name="hireOption"
                  value={formData.hireOption}
                  onChange={handleChange}
                  placeholder="Please choose one"
                >
                  <option value=" " disabled>Please choose one</option>
                  <option value="On Site">On-Site Installation</option>
                  <option value="Self">Self Installation (Hire from us)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="furtherEnquiry">
                <Form.Label className="label">Further Enquiry</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="furtherEnquiry"
                  value={formData.furtherEnquiry}
                  onChange={handleChange}
                  placeholder="Please specify any other enquires here"
                />
              </Form.Group>
            </Col>

            {/* Second Column */}
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label className="label">Last Name: *</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contactNumber">
                <Form.Label className="label">Phone Number: *</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="eventFor">
                <Form.Label className="label">Event For: *</Form.Label>
                <Form.Control
                  type="text"
                  name="eventFor"
                  value={formData.eventFor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="eventDate">
                <Form.Label className="label">Event Date *</Form.Label>
                <Form.Control
                  type="text"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="weightOption">
                <Form.Label className="label">To secure Marquee *</Form.Label>
                <Form.Control
                  as="select"
                  name="weightOption"
                  value={formData.weightOption}
                  onChange={handleChange}
                  placeholder="Please choose one"
                >
                  <option value=" " disabled>Please choose one</option>
                  <option value="Steel Weights">Steel Weights</option>
                  <option value="Pegs">Pegs</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="eventType">
                <Form.Label className="label">To secure Marquee *</Form.Label>
                <Form.Control
                  as="select"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Please choose one"
                >
                  <option value=" " disabled>Please choose one</option>
                  <option value="In Home">In Home</option>
                  <option value="Party Venue">Party Venue</option>
                  <option value="In Public Area">In Public Area</option>
                  <option value="School">In School Event</option>
                  <option value="University">University Functions</option>
                  <option value="Wedding">Wedding Venue</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="button-submit">
                Submit Enquiry
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}