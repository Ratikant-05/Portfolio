import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Contact from './components/Pages/Contact'
import Blog from './components/Pages/Blog'
import Works from './components/Pages/Works'
import Home from './components/Pages/Home'

function App() {
  return (
    <div className='min-h-screen'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  )
}

export default App
