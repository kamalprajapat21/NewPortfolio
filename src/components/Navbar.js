// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//         <img src={logo} style={{ width: '150px', height: 'auto' }} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>

//             {/* <Nav.Item> */}
//               {/* <Nav.Link
//                 href="https://soumyajitblogs.vercel.app/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <ImBlog style={{ marginBottom: "2px" }} /> Blogs
//               </Nav.Link>
//             </Nav.Item> */}

//             {/* <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/soumyajit4419/Portfolio"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;



import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Replaced logo with text */}
        {/* <Navbar.Brand href="/" className="d-flex align-items-center">
          <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "White" }}>
            @Kamal
          </span>
        </Navbar.Brand> */}
        {/* <Navbar.Brand href="/" className="d-flex align-items-center">
  <span
    style={{
      fontSize: "1.8rem",
      fontWeight: "700",
      background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1px",
    }}
  >
    @Kamalprajapat
  </span>
</Navbar.Brand> */}


<Navbar.Brand href="/" className="d-flex align-items-center">
  <span
    style={{
      fontSize: "1.8rem",
      fontWeight: "700",
      background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1px",
      fontFamily: "'Pacifico', cursive",
      animation: "fadeInUp 1s ease-in-out",
      display: "inline-block",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(-1deg) scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
  >
    @Kamalprajapat
  </span>
</Navbar.Brand>



        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
