<<<<<<< HEAD
import Home from './pages/Home'
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
 
  return (
    <>
     <Router>
       <Routes>
        <Route path="/about" element={<About></About>} />
       </Routes>
     </Router>
    </>
=======
import React from 'react'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Home />
    </div>
>>>>>>> 51e77c7 (Added bootstrap and designed testimonals)
  )
}

export default App
