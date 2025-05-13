// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router';
// const TopMenu=()=>{
//     return(
//         <>
//         <Navbar bg="purple" data-bs-theme="dark">
//         <Container id='navbar'>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="menwatches">Men Watches</Nav.Link>
//             <Nav.Link as={Link} to="womenwatches">Women Watches</Nav.Link>
//             <Nav.Link as={Link} to="kidswatches">kidswatches</Nav.Link>
//             <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
           
           
//           </Nav>
//         </Container>
//       </Navbar>
         
//         </>
//     )
// }

// export default TopMenu;
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
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="menwatches">Men Watches</Nav.Link>
            <Nav.Link as={Link} to="womenwatches">Women Watches</Nav.Link>
            <Nav.Link as={Link} to="kidswatches">kidswatches</Nav.Link>
             <Nav.Link as={Link} to="jewellery">jewellery</Nav.Link>
            <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
           
           
          </Nav>
       
        
         
        

      </Container>
    </Navbar>
   
        </>
    )
}

export default Topmenu;
