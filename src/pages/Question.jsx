import React from 'react'
import { useNavigate } from 'react-router-dom'

const Question = () => {
  const navigate = useNavigate()
  const home = ()=>{
    navigate('/home')
  }
  return (
    <div className='container-fluid bg-black vh-100 '>

       <div style={{height:'100px'}} className="bg-warning d-flex justify-content-between ">
        
        <img style={{marginLeft:'50px'}} width={100} src="src\assets\react.svg" alt="" />
        <h1>24<i class="fa-solid fa-xmark"></i>7 support</h1>
<span>
            <div onClick={home} className="btn btn-primary m-5">Back To Home</div>
    
</span>        
        </div> 

{/* chat */}

    </div>
  )
}

export default Question