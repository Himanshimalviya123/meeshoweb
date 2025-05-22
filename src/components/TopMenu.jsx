
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
            <Nav.Link as={Link} to="home">Home</Nav.Link>

            {/* <Nav.Link as={Link} to="menwatches">Men Watches</Nav.Link> */}
            {/* <Nav.Link as={Link} to="womenwatches">Women Watches</Nav.Link> */}
           
            <Nav.Link as={Link} to="Womenethnic">Women & Ethnic</Nav.Link>
             
            <Nav.Link as={Link} to="kitchen">Kitchen </Nav.Link>
            <Nav.Link as={Link} to="Beauty">Beauty </Nav.Link>
             <Nav.Link as={Link} to="jewellery">Jewellery</Nav.Link>
            <Nav.Link as={Link} to="bags">Bags</Nav.Link>

            <Nav.Link as={Link} to="Electronic">Electronic  </Nav.Link>
            <Nav.Link as={Link} to="Womenwestern">Women & western</Nav.Link>
            <Nav.Link as={Link} to="watches">Watches</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>


             

            <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
           
           
          </Nav>
       
        
         
        

      </Container>
    </Navbar>
               {/* <Nav.Link as={Link} to="kidswatches">kidswatches</Nav.Link> */}

        </>
    )
}

export default Topmenu;
