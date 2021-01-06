import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Navbar bg="light" expand="md" className="fixed-bottom">
          <Nav className="m-auto">
            <Nav.Link href="/homepage">Copyright</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default Footer;
