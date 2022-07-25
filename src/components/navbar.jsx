
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,  useNavigate, Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { getAuth, signOut } from "firebase/auth";

function CollapsibleExample() {
  let navigate = useNavigate();
  const auth = getAuth();
  
  const handleSignout = async () => {  
  signOut(auth).then(function() {
   navigate("/",{replace: true})
  }).catch(function(error) {
   console.log(error)
  });
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Rental System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/homepage">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/cyclespage">Cycles</NavDropdown.Item>
              <NavDropdown.Item href="/electronicspage">Electronic Devices</NavDropdown.Item>
              <NavDropdown.Item href="/sportspage">Sports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutpage">About</Nav.Link>
            <Nav.Link onClick={handleSignout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;