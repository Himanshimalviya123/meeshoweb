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

const Bags=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/bags");
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
        <Card.Title> {key.name} </Card.Title><br/>
        <Card.Text>
       Material :{key.Material}<br/>
         Price : {key.price}<br/>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, Material:key.Material,   image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
 })







    return(
        <>

           

      <h1> Our Latest Watches for Kids</h1>
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

export default Bags;
