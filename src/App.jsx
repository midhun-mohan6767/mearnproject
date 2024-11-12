import './App.css'
import Question from './pages/Question'
import Marklist from './pages/Marklist'
import Activity from './pages/Activity'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Payment from './pages/Payment'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
<Routes> 

<Route path='/' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/home' element={<Home/>}/>
<Route path='/payment' element={<Payment/>} />
<Route path='/activity' element={<Activity/>}/>
<Route path='/marklist' element={<Marklist/>} />
<Route path='/question' element={<Question/>} />


</Routes>
    </>
  )
}

export default App


