import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Payment = () => {
  const [spinner4,setspinner4] = useState(false)
  const navigate = useNavigate()
  const home=()=>{
    setspinner4(true)
    setTimeout(()=>{
      navigate('/home')
setspinner4(false)
    },2000)
  }
  return (
    <div className='container-fluid bg-white vh-100 '>
        <div className=" bg-warning  pay">
            <h1 className='text-center'> Payment</h1>
            <div onClick={home} style={{marginLeft:'80%',marginTop:'-50px'}} className="btn btn-primary">Back To Home
              {
                spinner4 && 
                <Spinner animation="border" variant="success" />

              }
            </div>
        </div>
           
           <img style={{marginLeft:'30%'}}  width={500} height={500} src="src\assets\Payment.jpg" alt="" />
    
    </div>
  )
}

export default Payment


