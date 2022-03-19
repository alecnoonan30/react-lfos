import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg="clear" variant="light">
        <Container>
        <Navbar.Brand href="/"><img className="homeLogo" src="./images/Artboard3.png" alt="" /></Navbar.Brand>
        <Nav className="d-flex justify-content-end align-items-center">
          <Nav.Link className="thingsfont" href="./things">Things</Nav.Link>
          <Nav.Link className="contactfont" href="./contact">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

