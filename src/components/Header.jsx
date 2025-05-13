import { FaCartShopping } from "react-icons/fa6";
 import { useSelector } from "react-redux";
 import { useNavigate } from "react-router";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from "../images/logo.png";

const Header=()=>{
   const cartData = useSelector(state=>state.mycart.cart);
 const cartLength= cartData.length;
const navigate= useNavigate();
    return(
        <>
         
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <div id="meesho"><img src={img1} width="80%" height="50px" />
      </div>

        
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="try saree,kurti or search by product code"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
      
  
      <div id="oo">become a<br/> supplier</div>
     <div id="oo">Investor<br/> Relations</div>
     <div id="oo">profile</div>
     <div id="header"> 
           
            {cartLength}
          <FaCartShopping  onClick={()=>{navigate("/mycart")}}  style={{cursor:"pointer"}}/>
           </div>
  

      </Container>
    </Navbar>
   
        </>
    )
}

export default Header;