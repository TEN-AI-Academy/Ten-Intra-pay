import Home from './pages/Home'
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
 
  return (
    <>
     <Router>
       <Routes> 

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
