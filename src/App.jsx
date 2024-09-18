import {React} from 'react'
import { BrowserRouter,Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home/Home';
// import About from './pages/Resume/Resume';
// import Resume from './pages/Resume/Resume';
// import Project from './pages/Project/Project';
// import Project from './pages/Project/Project';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
// import Contact from './pages/Contact/Contact'


const App = () => {
 
  return (

    <>
  <HashRouter>

  <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </HashRouter>
    </>
  )
}

export default App

