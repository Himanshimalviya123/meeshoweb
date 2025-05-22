


import { GiReturnArrow } from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";

import myimg from "../images/image1.webp";
import myimg11 from "../images/image2.webp";

import myimg1 from "../images/p1.webp";
import myimg2 from "../images/p2.webp";
import myimg3 from "../images/p3.webp";
import myimg4 from "../images/p4.webp";
import myimg5 from "../images/p5.webp";
import myimg6 from "../images/p6.webp";
import myimg7 from "../images/p7.webp";
import myimg8 from "../images/p8.webp";

import myimg9 from "../images/b11.webp";
import myimg10 from "../images/b2.webp";
import myimg111 from "../images/b3.webp";
import myimg12 from "../images/b4.webp";
import myimg13 from "../images/b5.webp";
// import myimg14 from "../images/b6.webp";
// import myimg15 from "../images/b7.webp";
// import myimg16 from "../images/b8.webp";

import myimg17 from "../images/s1.webp";
import myimg18 from "../images/s2.webp";
import myimg19 from "../images/s3.webp";
import myimg20 from "../images/s4.webp";
import myimg21 from "../images/s5.webp";
import myimg22 from "../images/s7.webp";
import myimg23 from "../images/s8.webp";
import myimg24 from "../images/s9.webp";
import myimg25 from "../images/image11.webp";
import myimg26 from "../images/d1.webp";
import myimg27 from "../images/d2.webp";
import myimg28 from "../images/d3.webp";
import myimg29 from "../images/d4.webp";


import { useState, useEffect } from 'react';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from "../cartSlice";
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router';
const Home=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/multi");
    console.log(response.data);
    setMydata(response.data);
 }

 useEffect(()=>{
    loadData();
 }, []);

 const ans=mydata.map((key)=>{
    return(
        <>
     
     <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={key.image}
      style={{cursor:"pointer"}} onClick={()=>{navigate(`/prodisplay/${key.id}`)}} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <Card.Text>
         Description :{key.description}
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description, category:key.category,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    



  
        
        </>
    )
 })







    return(
        <>
        
            




     
            {/* <div className="image-container" > */}
            <img src={myimg} width="100%" height="400px" />
            <h1  className=" name">Smart Shopping<br/>Trusted by Millions</h1>
            <button  className=" button">SHOP NOW</button>
            {/* </div> */}
     <div id="next">
        <div className="nextdown">
        <div><GiReturnArrow />7 Days Easy Return</div>
        <div><HiCurrencyRupee />Cash on Delivery</div>
        <div><ImPriceTags />Lowest Prices</div>
        </div>
     </div>
     <div id="images">
<div><img src={myimg1} />
<h5>ethnic wear</h5></div>
<div><img src={myimg2}  />
<h5>western dressess</h5></div>
<div><img src={myimg3}  />
<h5>menswear</h5></div>
<div><img src={myimg4}  />
<h5>footwear</h5></div>
<div><img src={myimg5}  />
<h5>home decor</h5></div>



     </div>
     <img src={myimg11}  width="100%" height="400px" />
     <center><div className="original"><h1>ORIGINAL BRANDS</h1></div></center>
     <div id="brands">
      

      <div><img src={myimg9}/></div>
      <div><img src={myimg10}/></div>
      <div><img src={myimg111}/></div>
      <div><img src={myimg12}/></div>
      <div><img src={myimg13}/></div>
      
     </div>
     <marquee>
     <div id="brands-name">
     <div><img src={myimg17} width="150px" height="60px"/></div>
     <div><img src={myimg18} width="150px" height="60px"/></div>
     <div><img src={myimg19} width="150px" height="60px"/></div>
     <div><img src={myimg20} width="150px" height="60px"/></div>
     <div><img src={myimg21} width="150px" height="60px"/></div>
     <div><img src={myimg22} width="150px" height="60px"/></div>
     <div><img src={myimg23} width="150px" height="60px"/></div>
     <div><img src={myimg24} width="150px" height="60px"/></div>
     </div>
     </marquee>
<div className="image-container">
  <img src={myimg25}/>

  <div class="overlay-div top-left"><img src={myimg26} />
  <div className="sum">Summer Dresses</div></div>
  <div class="overlay-div bottom-right"><img src={myimg27} />
  <div className="sum">Baggy Jeans</div></div>
  <div class="overlay-div center"><img src={myimg28} />
  <div className="sum">Earrings</div></div>
  <div class="overlay-div center1"><img src={myimg29} />
  <div className="sum">Chic Flat </div></div>
</div>

 <h1 className="original"> OUR PRODUCTS</h1>
      <div className='cardData1'>
      {ans}
      </div>

        </>
    )
}

export default Home;
