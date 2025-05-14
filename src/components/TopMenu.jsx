
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import img1 from "../images/logo.png";
import { Link } from 'react-router';

const Topmenu=()=>{
    return(
        <>
         <Navbar expand="lg" className="bg-body-tertiary1">
      <Container fluid>

 <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">home</Nav.Link>

            <Nav.Link as={Link} to="menwatches">Men Watches</Nav.Link>
            <Nav.Link as={Link} to="womenwatches">Women Watches</Nav.Link>
            <Nav.Link as={Link} to="kidswatches">kidswatches</Nav.Link>
            <Nav.Link as={Link} to="jewellery">jewellery</Nav.Link>
            <Nav.Link as={Link} to="western dress">western dress</Nav.Link>
            <Nav.Link as={Link} to="Womenethnic">Women Ethnic</Nav.Link>
           
             <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="Kids">Kids</Nav.Link>
            <Nav.Link as={Link} to="Home$kitchen">Home & Kitchen</Nav.Link>
            <Nav.Link as={Link} to="Beautyhealth">Beauty & Health</Nav.Link>
             <Nav.Link as={Link} to="Bags$footwear">Bags & Footwear</Nav.Link>
                         <Nav.Link as={Link} to="Electronic">Electronic</Nav.Link>

            <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
           
           
          </Nav>
       
        
         
        

      </Container>
    </Navbar>
   
        </>
    )
}

export default Topmenu;
