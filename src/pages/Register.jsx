import React, { useState } from 'react'
import '../App.css'
import { Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
 const navigate =useNavigate()
 const [spinner3,setSpinner3] = useState(false)
 const home=()=>{
  setSpinner3(true)
  setTimeout(()=>{
    navigate('/home')
setSpinner3(false)
  },2000)
 }
  return (
    <>
<div className=" d-flex flex-column ustify-content-center align-items-center vh-100 bg-white ">

<h1 style={{color:'rebeccapurple'}} className='my-5'>INSIGHT ACADEMY</h1>
<div className='w-50 h-50 bg-dark rounded'>

<input className='input shadow m-4 hv'  placeholder='UserName' type="text" style={{width:'80%',height:'40px',border:'shadow'}}/>
<input className='input shadow m-4 hv'  placeholder='Phone Number' type="text" style={{width:'80%' ,height:'40px',border:'shadow'}}/>
<input className='input shadow m-4 hv'  placeholder='email' type="text" style={{width:'80%',height:'40px',border:'shadow'}}/>

<Button onClick={home} style={{marginLeft:'60%'}} variant="primary">Register
  {
    spinner3 && 
    <Spinner animation="border" variant="success" />

  }
  </Button>{' '}
</div>
</div>


    </>
  )
}

export default Register