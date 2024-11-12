import { useNavigate } from 'react-router-dom'
import '../App.css'
import React from 'react'

const Marklist = () => {
  const navigate = useNavigate()
  const home = ()=>{
    navigate('/home')
  }
  return (
    <div className='container-fluid vh-100 bg-white'>

<h1 style={{color:'black',textAlign:'center'}}>Marklist</h1>

<div  style={{width:'70%',height:'500px',marginLeft:'15%',borderRadius:'50px',display:'flex',alignItems:'center',justifyContent:'center'}} className=" bg-secondary ">

    {/* <div style={{width:'80%',height:'20%',background:'black',borderRadius:'50px'}}></div> */}
    <div className='marke ' style={{width:'50%',height:'10%',borderRadius:'50px',background:'black'}}></div>
<span>
      <div className='marke main ' style={{width:'20%',height:'10%',borderRadius:'50px',background:'orange'}}></div>
  
</span>
 <h1 style={{color:'greenyellow'}}>mark : 45/100</h1>
 <div onClick={home} style={{marginTop:'300px'}} className="btn btn-primary">Back To Home</div>
</div>

    </div>
  )
}

export default Marklist