import { Container, Row, Col, Card } from 'react-bootstrap';
import './Project.css';

const Project = (projectList) => {
  return (
    <>
      <Container className="section navbar-dark mt-4 p-4">
      <Row className="px-3">
          <h1 className="m-auto">Portfolio</h1>
        </Row>
        <Row className="px-3">
          <hr />
        </Row>
        <Row className="px-3">
          {projectList.projects.map(project => (
            <Col lg={6} md={12} className="mb-3" key={project.repo}>
              <Card>
                  <Card.Title>{project.title} | <a href={project.repo} target="blank"><i className="fab fa-github"></i></a></Card.Title>

                <a href={project.link} target="blank">
                  <Card.Img variant="bottom" src={project.img} />
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Project;
