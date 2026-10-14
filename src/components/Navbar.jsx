import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { profileData } from '../data/portfolioData';

export function Navbar({ onOpenContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ['hero', 'clients', 'enterprise', 'services', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#clients', id: 'clients' },
    { label: 'Enterprise', href: '#enterprise', id: 'enterprise' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : 'pt-5'}`}>
        <div className="site-container">
          <nav className="navbar-inner" aria-label="Main Navigation">
            {/* Brand / Logo */}
            <a 
              href="#hero" 
              className="brand-logo" 
              onClick={(e) => handleNavClick(e, '#hero')}
              aria-label="Arnold A. Magalona - Home"
            >
              <div className="brand-icon" style={{ overflow: 'hidden', padding: 0 }}>
                <img 
                  src="/arnold-photo.jpg" 
                  alt="Arnold A. Magalona" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="brand-text-name">Arnold A. Magalona</div>
                <div className="brand-text-sub">COMPUTER ENGINEER & DEV</div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link-item ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="nav-actions">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 10px', borderRadius: '10px' }}
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 10px', borderRadius: '10px' }}
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} color="#38bdf8" />
              </a>

              <button 
                type="button"
                className="btn-primary" 
                onClick={onOpenContactModal}
                style={{ padding: '9px 18px', fontSize: '0.86rem' }}
              >
                <Sparkles size={15} />
                <span>Get In Touch</span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="brand-logo">
                <div className="brand-icon" style={{ overflow: 'hidden', padding: 0 }}>
                  <img 
                    src="/arnold-photo.jpg" 
                    alt="Arnold A. Magalona" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="brand-text-name">Arnold Magalona</div>
                  <div className="brand-text-sub">PORTFOLIO</div>
                </div>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                style={{ position: 'static' }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="badge-emerald" style={{ width: 'fit-content', marginTop: '10px' }}>
              <span className="radar-pulse"></span>
              <span>Available for Projects</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="btn-secondary"
                  style={{ justifyContent: 'flex-start', padding: '12px 16px', fontSize: '0.9rem' }}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons Strip in Drawer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                <LinkedinIcon size={15} color="#38bdf8" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                <FacebookIcon size={15} color="#60a5fa" />
                <span>FB</span>
              </a>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
              >
                <Mail size={16} />
                <span>Contact Arnold</span>
              </button>
              <a
                href={`tel:${profileData.rawPhone}`}
                className="btn-outline-cyan"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
