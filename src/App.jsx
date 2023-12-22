import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Applogo from './Components/Applogo';
// import Createads from './Components/Createads';
import Mediaad from './Components/Mediaad';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Formmedia from './Components/Formmedia';

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

   <Route  element={<Applogo/>} />
{/* <Route path='/Createads' element={<Createads/>} /> */}

<Route path="/" element={<Dashboard/>} />
<Route path="/Dashboard" element={<Dashboard/>} />

<Route path='/CREATEADS' element={<Mediaad/>} />
<Route path='/Forms' element={<Form/>} />
<Route path='/Formmedia' element={<Formmedia/>} />

   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
