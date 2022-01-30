import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Layout.css";
import Home from "components/Home/Home";

import Schedule from "components/Schedule/Schedule";

const StyledNavBar = styled(Navbar)`
  background-color: #e3fed2;
`;

function Layout() {
  return (
    <BrowserRouter>
      <StyledNavBar expand="lg">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/schedule">
          Schedule
        </Nav.Link>
      </StyledNavBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default Layout;
