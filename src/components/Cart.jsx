import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../store/cartSlice';


const Cart = () => {
  
const dispatch = useDispatch()
const productCart = useSelector(state=>state.cart)

const removeFromCart = (product)=>{
dispatch(remove(product))
}

  return (
    <>
<div className="row">
      {productCart.map(product=>(
        <div className="col-md-12" style={{marginBottom:'10px'}}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{background:'white'}}>
          <Button variant="danger" onClick={()=>removeFromCart(product)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
      ))}
</div>
    </>
  )
}

export default Cart