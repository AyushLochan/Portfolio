import { useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Typed from "typed.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Coder", "Web Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="containers">
      <Nav />
      <Routes>
        <Route path='/' element={
          <Home
            typedRef={typedRef}
          />
          
        } />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;