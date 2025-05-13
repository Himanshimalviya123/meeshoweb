// import Carousel from 'react-bootstrap/Carousel';
// import b1 from "../images/b1.webp";
// import b2 from "../images/b2.jpg";
// import b3 from "../images/b3.jpg";

import { useState, useEffect } from 'react';
// import BackendURL from "../config/backendUrl";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from '../cartslice';
import { useDispatch } from 'react-redux';

const MenWatches=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/products/?category=men");
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

           

      <h1> Our Latest Watches for Men</h1>
      <div id='cardData'>
      {ans}
      </div>
      
        </>
    )
}

export default MenWatches;
