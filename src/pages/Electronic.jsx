import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from '../cartslice';
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

           

      <h1> Our Latest Watches for Kids</h1>
      <div id='cardData'>
      {ans}
      </div>
      
        </>
    )
}

export default Electronic;
