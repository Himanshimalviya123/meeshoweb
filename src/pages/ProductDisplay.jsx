import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductDisplay=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/products/${id}`;
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

    return(
        <>
        <div style={{width:"600px", margin:"auto"}}>
         <h1> My Product</h1>
         <h2>Product name : {mydata.name} </h2>
         <h4>Description :  {mydata.description}</h4>
         <img src={mydata.image} width="300" height="300" />
          <h4> Price : {mydata.price}</h4>
         </div>
        </>
    )
}
export default ProductDisplay;