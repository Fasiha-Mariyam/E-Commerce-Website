import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'

export default function ProductPage() {

const {productID} = useParams()
const [product,setProduct] = useState({})
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [review,setReview] = useState('')
const [ratingStars,setRatingStars] = useState(0)
const [productQuantity,setProductQuantity] = useState(1)

const ratingChanged = (newRating) => {
  setRatingStars(newRating)
}

const submitReview = () => {
  const payload = {
    productID : productID,
    name : name,
    email : email,
    review : review ,
    rating : ratingStars
  }
  console.log(payload)

  Swal.fire({
    title: 'Succesfully Commented',
    text: 'ThankYou For Reviewing Our Product',
    icon: 'success',
    confirmButtonText: 'Done!'
  }).then(()=>{
    setRatingStars(0)}
    )


}

const addToCart = ()=>{
 
  const payload ={
    ...product,
    productQuantity,
    totalPrice : product.price * productQuantity 
    
  }
  console.log( payload)
  Swal.fire({
    title: 'Added to Cart',
    icon: 'success',
    confirmButtonText: 'Countinue Shopping'
  })
}

useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/${productID}`)
.then(json=>
  setProduct(json.data)
    
    )
},[])

  return (
   <>
   <div className="container">
    <div className="text-center m-5">
    <h1>{product.title} - {product.price}$</h1>
    <p className="text-secondary">{product.description}</p>
    <div className='d-flex justify-content-center'>
    <ReactStars
  count={5}
  size={24}
  edit={false}
  value={product?.rating?.rate}
  color2={'#ffd700'} 
  />

    </div>
    <div className=" my-3">
    <button className="btn btn-dark mx-3" disabled={productQuantity<=1} onClick={()=>setProductQuantity(productQuantity-1)}>-</button>
    { productQuantity }
    <button className="btn btn-dark mx-3"onClick={()=>setProductQuantity(productQuantity+1)}>+</button>
    </div> 
    <button className='btn btn-dark' onClick={addToCart}>Add To Cart</button>
    </div>
   </div>
   <hr />
   <div className="row mx-5 mb-5 ">

    <div className="col-md-6  container mt-4 mb-5">
      <div><img width={600} height={400} src={product.image} alt="" /></div>
    </div>

    <div className="col-md-6">
    <div className="container">
    <h2>Review Us</h2> 
    <div >
    <Form>
      <div className="mb-3">
      <Form.Label>Name</Form.Label>
      <input type="text"  className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
    </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave Your Comment Here" 
        defaultValue={review} onChange={(e)=>setReview(e.target.value)}/>
      </Form.Group>
    </Form>
    <div className='d-flex align-items-center'>
    <ReactStars
  count={5}
  value={ratingStars}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  />({ratingStars})
    </div>
    <button className='my-2 btn btn-dark' onClick={submitReview}>Submit Review</button>
    </div>
    </div>
    </div>
   </div>
   
   
   </>


  )
}

