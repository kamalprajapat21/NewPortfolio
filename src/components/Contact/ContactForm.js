import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { 
  AiOutlineMail, 
  AiOutlineUser, 
  AiOutlineMessage,
  AiOutlineSend 
} from "react-icons/ai";
import { motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setStatus({ 
        submitting: false, 
        success: true, 
        error: null 
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: error.message 
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="project-heading text-center mb-4">
                Get In <strong className="purple">Touch</strong>
              </h1>
              <p className="text-center text-white mb-5">
                Feel free to reach out to me for any questions or opportunities!
              </p>

              {/* Success Alert */}
              {status.success && (
                <Alert variant="success" className="mb-4">
                  <strong>Success!</strong> Your message has been sent. I'll get back to you soon!
                </Alert>
              )}

              {/* Error Alert */}
              {status.error && (
                <Alert variant="danger" className="mb-4">
                  <strong>Error!</strong> {status.error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                {/* Name Field */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="text-white">
                    <AiOutlineUser className="me-2" />
                    Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    disabled={status.submitting}
                    className="contact-input"
                  />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-white">
                    <AiOutlineMail className="me-2" />
                    Email Address *
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.submitting}
                    className="contact-input"
                  />
                </Form.Group>

                {/* Subject Field */}
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label className="text-white">
                    <AiOutlineMessage className="me-2" />
                    Subject
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter subject (optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={200}
                    disabled={status.submitting}
                    className="contact-input"
                  />
                </Form.Group>

                {/* Message Field */}
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-white">
                    <AiOutlineMessage className="me-2" />
                    Message *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    disabled={status.submitting}
                    className="contact-input"
                  />
                  <Form.Text className="text-muted">
                    {formData.message.length}/1000 characters
                  </Form.Text>
                </Form.Group>

                {/* Submit Button */}
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={status.submitting}
                    className="submit-btn"
                  >
                    {status.submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <AiOutlineSend className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactForm;
