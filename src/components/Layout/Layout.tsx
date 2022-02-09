import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Layout.css";
import About from "components/About/About";

import Schedule from "components/Schedule/Schedule";

const StyledNavBar = styled(Navbar)`
  border-bottom: 10px solid #ccdcf2;
`;

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: #ccdcf2;
  }
`;
const Wrapper = styled.div``;

function Layout() {
  return (
    <Wrapper>
      <BrowserRouter>
        <StyledNavBar sticky expand="lg" variant="light" bg="primary">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav.Link as={StyledLink} to="/">
              Schedule
            </Nav.Link>
            <Nav.Link as={StyledLink} to="/about">
              About
            </Nav.Link>
          </Navbar.Collapse>
        </StyledNavBar>
        <Container>
          <Routes>
            <Route path="/" element={<Schedule />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Wrapper>
  );
}

export default Layout;
