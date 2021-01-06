import { Container, Row, Image } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <Container className="section navbar-dark mt-4 p-4">
        <Row className="px-3">
          <h1 className="m-auto">About Me</h1>
        </Row>
        <Row className="px-3">
          <hr />
        </Row>
        <Image className="profile" src="./img/profile.jpg" fluid />
        <div>
          <p>
            A technology enthusiast, I have been fascinated by computers since my dad helped me build my first computer. He worked hard to ensure that I would be knowledgable in a future where coding and tech would be integrated everywhere.
          </p>
          <p>
            In my professional career I have worked for a SaaS tech company for four years, starting as a Technical Support Engineer working with our techs to fix bugs for our customers. I have since moved on to being a Solutions Engineer, working with business parters to integrate with our software.
          </p>
          <p>
            My passion is problem solving and finding efficient solutions to daily problems. Nothing makes me happier than empowering others to be confident in their ability to navigate the software world.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Homepage;
