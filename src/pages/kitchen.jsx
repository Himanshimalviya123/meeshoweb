import myimg25 from "../images/image11.webp";
import meesho7 from "../images/meesho7.jpg";

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

const Kitchen=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/home");
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

                  <img src={meesho7} width="100%" height="300px" />
           

      <h1 className="original1"> Our Latest Watches for Kids</h1>
      <div className='cardData1'>
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

export default Kitchen;
