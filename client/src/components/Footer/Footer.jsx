import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" expand="md" className="fixed-bottom">
          <Nav className="m-auto">
            <Nav.Item><i className="far fa-copyright"></i><span className="copyright"> Copyright</span></Nav.Item>
          </Nav>
      </Navbar>
    </>
  );
}

export default Footer;
