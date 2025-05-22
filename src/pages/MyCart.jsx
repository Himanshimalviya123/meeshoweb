import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { CiSquarePlus } from "react-icons/ci";
import meesho4 from "../images/meesho4.png";
import { CiSquareMinus } from "react-icons/ci";
import { qtyDecr,qtyIncr,proRemove } from "../cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MyCart =()=>{
    const cartData = useSelector(state=>state.mycart.cart);
    const dispatch = useDispatch();

    let TotAmount=0;
    const ans= cartData.map((key)=>{
      TotAmount+=key.qnty*key.price;
        return(
            <>
              <tr>
                <td> 
                    <img src={key.image} width="100" height="100" />
                 </td>
                <td> {key.name} </td>
                <td> {key.category} </td>
                <td style={{fontSize:"20px"}}> 
                <CiSquareMinus   onClick={()=>{dispatch(qtyDecr({id:key.id}))}} style={{cursor:"pointer"}} />   
                    {key.qnty}
               <CiSquarePlus 
                onClick={()=>{dispatch(qtyIncr({id:key.id}))}} style={{cursor:"pointer"}} />
                     </td>
                <td> {key.price} </td>
                <td>
                    {key.qnty * key.price}
                </td>
                <td>
                  <button onClick={()=>{dispatch(proRemove({id:key.id}))}}>Remove</button>
                </td>
              </tr>
            </>
        )
    })
    return(
      <>
       <img src={meesho4} width="100%" height="400px" /> 

        
           <h1 className="original"> My Cart Products</h1> 
           <h2 align="center"><FaIndianRupeeSign/>  : {TotAmount}</h2> 
           <hr />
           <Table id="tab" >
      <thead id="table">
        <tr >
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th> Quantity</th>
          <th>Price</th>
          <th> Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>
        </>
    )
}
export default MyCart;
