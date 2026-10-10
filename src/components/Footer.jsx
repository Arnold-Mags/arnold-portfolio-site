import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, Shield, Code, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { profileData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          {/* Brand & Summary */}
          <div style={{ maxWidth: '420px' }}>
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-icon">AM</div>
              <div>
                <div className="brand-text-name">{profileData.name}</div>
                <div className="brand-text-sub">WEB DEVELOPER & SYSTEM ARCHITECT</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Engineering resilient enterprise systems, high-converting live web platforms, and automated digital solutions for institutional and corporate clients.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#64748b' }}>
              <MapPin size={15} color="#06b6d4" />
              <span>Surigao City, Philippines</span>
            </div>

            {/* Social Icons Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '18px' }}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 12px', fontSize: '0.8rem', gap: '6px' }}
                title="GitHub: Arnold-Mags"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 12px', fontSize: '0.8rem', gap: '6px' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} color="#38bdf8" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 12px', fontSize: '0.8rem', gap: '6px' }}
                title="Facebook Profile"
              >
                <FacebookIcon size={15} color="#60a5fa" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Quick Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#clients" className="hover:text-cyan-400">Featured Live Projects</a></li>
              <li><a href="#enterprise" className="hover:text-cyan-400">Enterprise Systems (SPUS)</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Tech Stack & Services</a></li>
              <li><a href="#experience" className="hover:text-cyan-400">Career Timeline (DICT / SPUS)</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400">Certifications & Training</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Featured Platforms */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Featured Deployments
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              <li><a href="https://spus.edu.ph" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>spus.edu.ph ↗</a></li>
              <li><a href="https://tradehubogistics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>tradehubogistics.com ↗</a></li>
              <li><a href="https://docmonaclinic.online" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>docmonaclinic.online ↗</a></li>
              <li><a href="https://itero-ai.online" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>itero-ai.online ↗</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Direct Reach
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <a href={`mailto:${profileData.email}`} style={{ color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                <span>{profileData.email}</span>
              </a>
              <a href={`tel:${profileData.rawPhone}`} style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} />
                <span>{profileData.phone}</span>
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="btn-outline-cyan"
                style={{ marginTop: '12px', width: 'fit-content' }}
              >
                <ArrowUp size={15} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {currentYear} <strong>Arnold A. Magalona</strong>. All Rights Reserved. Built with React & Modern Web Standards.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>BS Computer Engineering</span>
            <span>•</span>
            <span style={{ color: '#06b6d4' }}>Surigao City, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
