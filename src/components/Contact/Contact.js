import React from "react";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-page">
      <Particle />
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="project-heading">
              Let's <strong className="purple">Connect</strong>
            </h1>
            <p style={{ color: "white" }}>
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </Col>
        </Row>

        {/* Contact Info & Form */}
        <Row className="mb-5">
          {/* Contact Information */}
          <Col md={4} className="mb-4">
            <div className="contact-info-card p-4">
              <h3 className="purple mb-4">Contact Information</h3>
              
              <div className="contact-info-item mb-3">
                <AiOutlineMail size={24} className="purple me-3" />
                <div>
                  <h6 className="text-white mb-1">Email</h6>
                  <a 
                    href="mailto:kamal@example.com" 
                    className="text-muted"
                  >
                    kamal@example.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item mb-3">
                <FaMapMarkerAlt size={24} className="purple me-3" />
                <div>
                  <h6 className="text-white mb-1">Location</h6>
                  <p className="text-muted mb-0">India</p>
                </div>
              </div>

              <div className="contact-info-item mb-4">
                <h6 className="text-white mb-3">Follow Me</h6>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/kamalprajapat21"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-icon"
                  >
                    <AiOutlineGithub size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kamal-prajapat-b19192244/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-icon"
                  >
                    <AiFillLinkedin size={28} />
                  </a>
                  <a
                    href="https://x.com/KamalPraja7117"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-icon"
                  >
                    <AiOutlineTwitter size={28} />
                  </a>
                </div>
              </div>

              <div className="availability-badge">
                <span className="status-indicator"></span>
                <span className="text-white">Available for opportunities</span>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={8}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
