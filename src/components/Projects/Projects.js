import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lab from "../../Assets/Projects/lab.jfif";
import emotion from "../../Assets/Projects/emotion.png";
import pharmacy from "../../Assets/Projects/pharmacy.jfif";
import chatify from "../../Assets/Projects/chatify.png";
import task from "../../Assets/Projects/task.jfif";
import suicide from "../../Assets/Projects/suicide.png";
import pwa from "../../Assets/Projects/pwa.jfif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Management"
              description="A robust task management tool built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers features for secure user authentication, task CRUD operations, prioritization, and categorization. Users can manage tasks efficiently through a responsive interface, with real-time updates ensuring seamless interaction and organization."
              ghLink="https://github.com/kamalprajapat21/task-manager-master"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pwa}
              isBlog={false}
              title="Patient Web Application"
              description="  A Patient Web Application built with React and MongoDB. It manages patient details, handles urgent medical cases, and facilitates home care bookings. The app supports real-time updates, notifications, and cost calculations for various care type"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://user.dooper.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmacy}
              isBlog={false}
              title="Pharmacy"
              description="A web application developed with React and MongoDB for efficient pharmacy management. It handles prescription processing, inventory tracking, and order management. Features include real-time updates, user-friendly interfaces, and integration with medical records for streamlined operations."
              demoLink="http://pharmacy.dooper.in/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lab}
              isBlog={false}
              title="LAB"
              description="A web application created with React and MongoDB for managing laboratory operations. It streamlines sample tracking, test result processing, and lab reports generation. Features include real-time data updates, user management, and integration with medical records for efficient lab management."
              demoLink="https://lab.dooper.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
