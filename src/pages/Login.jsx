import React, { useState } from 'react'
import '../App.css'
import { Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // for spinner
const [spinner1,setspinner1] = useState(false)
const [spinner, setspinner] = useState(false)

  const navigate = useNavigate()
  const home = ()=>{
    setspinner(true)
    setTimeout(() => {
      navigate('/home')
      setspinner(false)
 
    }, 3000);
  }
  const register = ()=>{
    setspinner1(true)
    setTimeout(()=>{
      navigate('/register')
setspinner1(false)
    },2000)
  }
  return (
    <>

<div className=" d-flex flex-column ustify-content-center align-items-center vh-100 bg-white ">

<h1 style={{color:'rebeccapurple'}} className='my-5'>INSIGHT ACADEMY</h1>
<div className='w-50 h-50 bg-dark rounded'>

<input className='input shadow m-5 hv'  placeholder='UserName' type="text" style={{width:'80%',height:'40px',border:'shadow'}}/>
<input className='input shadow m-5 hv'  placeholder='Phone Number' type="text" style={{width:'80%' ,height:'40px',border:'shadow'}}/>
<Button onClick={home} style={{marginLeft:'500px'}} variant="primary">Login
  
{ 
spinner &&
<Spinner animation="border" variant="success" />
}  

  </Button>{' '}
<Button onClick={register}  style={{marginLeft:'80%',marginTop:'-65px'}} variant="primary">Register
  
  {
    spinner1 &&  <Spinner animation="border" variant="warning" />

  }
  </Button>{' '}

</div>
</div>
    </>
  )
}

export default Login