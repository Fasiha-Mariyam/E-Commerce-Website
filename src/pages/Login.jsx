import React from 'react'
import { Link } from 'react-router-dom'
// import login from '../Components/login.css'
import Swal from 'sweetalert2'


export default function Login() {

const LinkStyle ={textDecoration:'none' , marginLeft:'100px'};

const submit = () => {
   
  Swal.fire({
    title: 'Succesfully Login',
    text: 'ThankYou For Connecting With Us',
    icon: 'success',
    confirmButtonText: 'Done!'
  })  

}


  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className='form_container p-5 rounded bg-white'>
    <form>
    <div className="h1 text-center text-primary">Login</div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check d-flex">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Remember me   
      </label>
      <div>
      <Link style={LinkStyle}  to={"#"}>Forget Password?</Link>
      </div>
    </div>
    <button className="btn btn-primary" onClick={submit}>
      Submit
    </button>
    <div className='mt-3 d-flex text-primary'>
        Not a member? 
        <div className=" fw-bold text-primary"><Link style={{textDecoration: 'none', marginLeft:5 , color:'primary'}} to={"/signup"}>SignUp</Link></div>
    </div>
  </form>
  </div>
  </div>
  )
}


