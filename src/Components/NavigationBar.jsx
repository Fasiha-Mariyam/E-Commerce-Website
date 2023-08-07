import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar  className="bg-dark">
      <Container>
        <Link className='navbar-brand' to="#home"><img className="img-thumbnail" width={100} height={70} src="https://s3-eu-west-1.amazonaws.com/tpd/logos/46a1665e0000640005006937/0x0.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='nav-link text-white fs-5' to="/">Home</Link>
            <Link className='nav-link text-white fs-5' to="/products">Products</Link>
            </Nav>
            <Nav className="ms-auto ">
            <Link className='ms-3 btn btn-primary fs-5' to="/login">Login</Link>
            <Link className='ms-3 btn btn-primary fs-5  ' to="/signup">Signup</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;