import React from 'react';
import { Mail, Phone, MapPin, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#home" className="logo" style={{ marginBottom: '1rem' }} onClick={(e) => handleScrollTo(e, 'home')}>
              <Cpu size={24} />
              <span>Pixeltech-IT</span>
            </a>
            <p>
              Powering businesses through world-class IT consulting, cloud infrastructure architecture, and custom digital software development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, 'features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin size={16} className="gradient-text" />
                <span>100 Innovation Way, Suite 400</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="gradient-text" />
                <span>+94 778 65 61 61</span>
              </div>
              <div className="footer-contact-item">
               <Phone size={16} className="gradient-text" />
                   <span>+94 772 86 51 79</span>
                  </div>
              <div className="footer-contact-item">
                <Mail size={16} className="gradient-text" />
                <span>info@pixeltech-it.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pixeltech-IT. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#privacy" style={{ fontSize: '0.85rem' }}>Privacy Policy</a>
            <a href="#terms" style={{ fontSize: '0.85rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
