import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Add background shadow and opacity on scroll
      setIsScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = ['home', 'features', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // height of navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <Cpu size={28} className="gradient-text" style={{ stroke: 'url(#brand-grad)' }} />
          <span>Pixeltech-IT</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, 'features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* SVG Gradient definition for icon stroke */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#4FACFE" />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
};
