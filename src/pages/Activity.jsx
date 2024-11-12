import React from 'react'
import { useNavigate } from 'react-router-dom'


const Activity = () => {
    const navigate = useNavigate()
    const home=()=>{
        navigate('/home')
    }
  return (
    <>
<div className=" bg-white w-100 ">
    <div className="w-100 h-100 bg-warning"> 
<h1 style={{textAlign:'center'}}>Activity</h1>
<div onClick={home} style={{marginLeft:'80%', marginBottom:'20px'}} className="btn btn-primary ">Back To Home</div>

    </div>
<div className='container'>
        <h5 style={{color:'black',margin:'30px',}}>1) MERN Project Abstract  : A Detailed explanation of your MERN Project. 
    Including its features, pages , components and number of collections used
     to store data in database</h5>
    <div className='d-flex  '>
            <img className='im m-5' width={300} src="src\assets\upload.jpg" alt="" />
        
        {/*  */}
            <input className='input shadow  hv mt-5 spc'  placeholder='github link' type="text" style={{width:'40%',height:'40px',border:'shadow'}}/>
            <input className='input shadow  hv sp '  placeholder='netlify link' type="text" style={{width:'40%',height:'40px',border:'shadow',}}/>
            
    
</div>        
    
</div>

{/* 2 */}

<div className='container'>
        <h5 style={{color:'black',margin:'30px',}}>2) Design a Doc App using React ,Material  UI, Firebase, React Quill and React router DOM.
        </h5>
    <div className='d-flex  '>
            <img className='im m-5' width={300} src="src\assets\upload.jpg" alt="" />
        
        {/*  */}
            <input className='input shadow  hv mt-5 spc'  placeholder='github link' type="text" style={{width:'40%',height:'40px',border:'shadow'}}/>
            <input className='input shadow  hv sp '  placeholder='netlify link' type="text" style={{width:'40%',height:'40px',border:'shadow',}}/>
            
    
</div>        
    
</div>

{/* 3 */}

<div className='container'>
        <h5 style={{color:'black',margin:'30px',}}>3) In this React project you have to build your very own real-time chat app, which is challenging but also rewarding. To do this, you'll use web sockets for real-time user communication.  You'll also need to manage state by using Redux, and build a responsive and attractive user interface.
        </h5>
    <div className='d-flex  '>
            <img className='im m-5' width={300} src="src\assets\upload.jpg" alt="" />
        
        {/*  */}
            <input className='input shadow  hv mt-5 spc'  placeholder='github link' type="text" style={{width:'40%',height:'40px',border:'shadow'}}/>
            <input className='input shadow  hv sp '  placeholder='netlify link' type="text" style={{width:'40%',height:'40px',border:'shadow',}}/>
            
    
</div>        
    
</div>

{/* 4 */}

<div className='container'>
        <h5 style={{color:'black',margin:'30px',}}>4) Design a React app with API to  create, read, update and delete data from a json file. 
        </h5>
    <div className='d-flex  '>
            <img className='im m-5' width={300} src="src\assets\upload.jpg" alt="" />
        
        {/*  */}
            <input className='input shadow  hv mt-5 spc'  placeholder='github link' type="text" style={{width:'40%',height:'40px',border:'shadow'}}/>
            <input className='input shadow  hv sp '  placeholder='netlify link' type="text" style={{width:'40%',height:'40px',border:'shadow',}}/>
            
    
</div>        
    
</div>

{/* 5 */}

<div className='container'>
        <h5 style={{color:'black',margin:'30px',}}>5) Design a React Website with Parallax and Image Slider Effect.
        </h5>
    <div className='d-flex  '>
            <img className='im m-5' width={300} src="src\assets\upload.jpg" alt="" />
        
        {/*  */}
            <input className='input shadow  hv mt-5 spc'  placeholder='github link' type="text" style={{width:'40%',height:'40px',border:'shadow'}}/>
            <input className='input shadow  hv sp '  placeholder='netlify link' type="text" style={{width:'40%',height:'40px',border:'shadow',}}/>
            
    
</div>        
    
</div>


</div>
    </>
  )
}

export default Activity



