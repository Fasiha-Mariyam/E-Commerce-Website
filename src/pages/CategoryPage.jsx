import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default function CategoryPage() {

const {categoryName} = useParams()

const [data,setData] = useState([])

const [loader, setLoader] = useState(true)

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
  .then(
    json=>
    {
    setData(json.data)
    setLoader(false)
    }
  )
},[categoryName])

  return (
    <>
    {
            loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
            ) :
  <div className="container ">
    <div className='my-5'>
    <h1 className='text-center'>{categoryName}</h1>
    <div className="text-secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed eligendi voluptatibus assumenda in, magnam modi, voluptas error maxime quaerat necessitatibus omnis! In doloremque, blanditiis cumque sit quidem maxime nemo.
    </div>
    </div>
  
  <hr/>
  <div className="row">
  <h1 className='text-center text-decoration-underline bg-dark text-white'>Items</h1><hr />
    {
  data.map((value,key) => 
  <div className="col-md-4 my-4" key={key}>
<Link className='text-decoration-none' to={`/products/${value.id}`}>
    <Card>
     <Card.Img variant="top" height={300} src={value.image} />
     <Card.Body>
       <Card.Title>{value.title} - price:{value.price}$</Card.Title>
       <Card.Text >
         {value.description}
       </Card.Text>
     </Card.Body>
    </Card>
</Link>
  </div>)
 }   
</div>
</div>
}
  </>
  )
}
