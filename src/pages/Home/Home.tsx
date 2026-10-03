import React, { useState } from 'react';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import { Code, Cloud, ArrowRight, Shield, Mail, Phone, MapPin, Sparkles, Send } from 'lucide-react';

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://huxnogr25z6jnbnecbr3lwkkka0ilqnw.lambda-url.ap-southeast-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch (err) {
      console.error('Error submitting form to DynamoDB:', err);
      setErrorMessage('Could not send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* BACKGROUND GLOW ORBS */}
      <div className="glow-orb" style={{ top: '10%', left: '-10%' }}></div>
      <div className="glow-orb" style={{ top: '50%', right: '-10%', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }}></div>

      {/* HERO SECTION */}
      <section id="home" className="section hero-section">
        <div className="container hero-grid">
          
          <div className="hero-content animate-fade-in">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>Leading Enterprise IT Partners</span>
            </div>
            
            <h1 className="hero-title">
              Innovating the Future of <span className="gradient-text">IT Solutions</span>
            </h1>
            
            <p className="hero-subtitle">
              We engineer state-of-the-art custom software applications, design highly scalable cloud architectures, and deploy bulletproof IT infrastructure for high-growth enterprises worldwide.
            </p>
            
            <div className="hero-actions">
              <Button 
                variant="primary" 
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Let's Talk
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Our Capabilities
              </Button>
            </div>
          </div>

          {/* Right side floating Tech Graphic */}
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="tech-illustration">
              <div className="tech-ring"></div>
              <div className="tech-ring-inner"></div>
              <div className="tech-core">
                <Sparkles size={48} color="#040810" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="features" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-tagline">Capabilities</p>
            <h2 className="section-title">What We Excel At</h2>
          </div>

          <div className="features-grid">
            {/* Service 1 */}
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Code size={24} />
              </div>
              <h3 className="feature-card-title">Custom Software</h3>
              <p className="feature-card-desc">
                High-performance full-stack web and mobile systems engineered using modern technology stacks (React, Node, Go) that scale to millions of users.
              </p>
            </Card>

            {/* Service 2 */}
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Cloud size={24} />
              </div>
              <h3 className="feature-card-title">Cloud Infrastructure</h3>
              <p className="feature-card-desc">
                Architecting secure multi-region AWS environments utilizing Infrastructure as Code (IaC) and automation scripts for maximum reliability.
              </p>
            </Card>

            {/* Service 3 */}
            <Card className="feature-card">
              <div className="feature-icon-wrapper">
                <Shield size={24} />
              </div>
              <h3 className="feature-card-title">IT Strategy & Security</h3>
              <p className="feature-card-desc">
                Enterprise technology consulting, digital transformations, cyber security auditing, and compliance management to protect digital assets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-tagline">Get In Touch</p>
            <h2 className="section-title">Connect with Our Experts</h2>
          </div>

          <div className="contact-grid">
            
            {/* Contact Form Card */}
            <Card className="contact-card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send Us a Message</h3>
              
              {isSubmitted ? (
                <div style={{
                  padding: '2rem',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px solid var(--color-primary)',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}>
                  <Sparkles size={36} className="gradient-text" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Thank you for reaching out. A Pixeltech-IT expert will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Project details..."
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Describe your IT or software needs here..."
                      required
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p style={{ color: '#f87171', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
                      {errorMessage}
                    </p>
                  )}

                  <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </Button>
                </form>
              )}
            </Card>

            {/* Sidebar Details Panel */}
            <div className="contact-info-panel">
              <Card className="contact-detail-card">
                <MapPin size={24} className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h5>Global Headquarters</h5>
                  <p>100 Innovation Way, Suite 400<br />Silicon Valley, CA 94025</p>
                </div>
              </Card>

              <Card className="contact-detail-card">
                <Phone size={24} className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h5>Call Us Directly</h5>
                  <p>+94 778 65 61 61<br />Mon - Fri, 9:00 AM - 6:00 PM EST</p>
                </div>
              </Card>

              <Card className="contact-detail-card">
                <Mail size={24} className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h5>Email Support</h5>
                  <p>info@pixeltech-it.com<br />sales@pixeltech-it.com</p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
