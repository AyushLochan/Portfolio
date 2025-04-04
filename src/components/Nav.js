import { useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Nav = ({ darkMode, setDarkMode, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${darkMode ? 'nav-dark' : ''}`}>
      <div className="logo">AYUSH</div>
      
      {/* Mobile Menu Button */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li className={currentPage === 'projects' ? 'active' : ''}>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li className={currentPage === 'contact' ? 'active' : ''}>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;