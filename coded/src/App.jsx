import { useState } from 'react'
import './App.css'
import "../src/MainPage/Jumbo"
import Blogging from './Blogging/Blogging'
import Home from '../src/HomePage/Home'
import Feedback from './Feedback/Feedback'
import { Routes , Route } from 'react-router-dom'
import Planner from './Planner/Planner'
import Jumbo from '../src/MainPage/Jumbo'
import About from './components/About'
import './index.css'
function App() {

  return (
    <div className="bg-gradient-to-b from-black to-black">
 <Routes>
  <Route path="/Home" element={<Home />} />
  <Route path="/Feedback" element={<Feedback />} />
  <Route path="/Blogging" element={<Blogging />} />
  <Route path="/Planner" element={<Planner/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path="/main" element={<Jumbo/>}/>
</Routes>
</div>
    


  );
}

export default App
