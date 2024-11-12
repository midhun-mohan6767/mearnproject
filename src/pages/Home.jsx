import '../App.css'
import React, { useState } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isDesktop = useMediaQuery({ minWidth: 768 });

  const [loading, setLoading] = useState(false);

 const navigate = useNavigate()
const mark=()=>{
  navigate('/marklist')
}
const activity = ()=>{
  navigate('/activity')
}

const Question =()=>{
  navigate('/Question')
}

const payment=()=>{
  setLoading(true)
  setTimeout(() => {
    navigate('/payment')
    setLoading(false)

  }, 2000);
}
  
  return (
    <div className='w-100  bg-white' style={{overflow:'hidden'}}>
<div className="w-100 h-20 bg-white">
    {/* carosel */}
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='container-fluid' width={100} height={450}  src='src\assets\slideA.jpg' text="slide1" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className='container-fluid' width={100} height={450}  src='src\assets\slide1.avif' text="slide1" />
      <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='container-fluid' width={100} height={450} src='src\assets\slide2.avif' text="slide1" />
      <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>
<div style={{marginTop:'100px',marginLeft:'10%'}} className=" row d-flex  ">
    <div  className=" col-sm-12 col-md-6 col-lg-4 my-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>
{/*  */}
<div  className=" col-sm-12 col-md-6 col-lg-4 my-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>


{/*  */}
<div  className=" col-sm-12 col-md-6 col-lg-4 my-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>
{/*  */}
<div  className=" col-sm-12 col-md-6 col-lg-4 my-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>
{/*  */}

    <div className="col-sm-12 col-md-6 col-lg-4 my-5  ">
    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-4 my-5 sm-m-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\homeimg.png" />
      <Card.Body>
        <Card.Title>class 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{marginLeft:'60px'}} variant="primary">Watch Class</Button>
      </Card.Body>
    </Card>
    </div>


</div>

<div className="d-flex justify-content-center" >
  <button onClick={payment} className="btn btn-warning">
    Click Here To Watch More Classes
    {loading && <Spinner animation="grow" variant="primary" />}
  </button>
</div>


{/* footer */}

<div className="d-flex justify-content-between align-items-center mt-5  bg-black ">
    <button onClick={activity} className="btn btn-success mx-5 my-4">Activity</button>
    <button onClick={mark}  className="btn btn-info mx-5 my-4">Mark</button>
    <button onClick={Question} className="btn btn-primary mx-5 my-4">Question</button>
</div>

    </div>
  )
}

export default Home






