import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <Container className="section navbar-dark mt-4 p-4">
        <Row className="px-3">
          <Col>
            <Navbar expand="md">
              <Navbar.Brand>Contact Me</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="mailto: dianalynshull@gmail.com" target="blank"><i className="fas fa-envelope"></i></Nav.Link>
                  <Nav.Link href="https://github.com/dianalynshull" target="blank"><i className="fab fa-github"></i></Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/diana-shull-3a8b58156" target="blank"><i className="fab fa-linkedin"></i></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row className="px-3">
          <hr />
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
