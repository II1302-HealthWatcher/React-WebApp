import {Navbar, Nav, Row, Col} from "react-bootstrap";
import {HouseFill} from "react-bootstrap-icons"
const NavigationView = ({component, toggleState, setToggleState, handleClose}) =>
  <Navbar expand="sm" bg="dark" variant="dark">
    <Navbar.Brand onClick = {(e) => handleClose()} href="/">
    <Row>
      <Col>
        <img width="50" height="40" src="android-chrome-192x192.png" alt="website logo"/>{" "}
      </Col>
      <Col classname="pl-0">
        <p className="font-weight-bold pl-0">HealthWatcher</p>
      </Col>
    </Row>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick = {(e) => setToggleState()}/>
    <Navbar.Collapse in = {toggleState} id="responsive-navbar-nav" onClick = {(e) => handleClose()}>
      <Nav className="ml-auto">
	  <Nav.Link href="#home" className = "navButton pr-3 pl-3"><HouseFill class="houseFill"  /> Home</Nav.Link>
        {component}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
;

export default NavigationView;
