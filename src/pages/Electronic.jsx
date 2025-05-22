import myimg25 from "../images/image11.webp";

import myimg26 from "../images/d1.webp";
import myimg27 from "../images/d2.webp";
import myimg28 from "../images/d3.webp";
import myimg29 from "../images/d4.webp";
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Electronic=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/Electronic");
    console.log(response.data);
    setMydata(response.data);
 }

 useEffect(()=>{
    loadData();
 }, []);

 const ans=mydata.map((key)=>{
    return(
        <>



     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <Card.Text>
        Charging Type :{key.ChargingType}<br/>
        Color :{key.Color}<br/>
       
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, ChargingType:key.ChargingType, Color:key.Color,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
 })







    return(
        <>

           
{/* <img src={myimg} width="100%" height="400px" /> */}



      <h1> Our electronic devices</h1><br/>
      <br/>
      <div id='cardData'>
      {ans}
      </div>
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
      
        </>
    )
}

export default Electronic;
