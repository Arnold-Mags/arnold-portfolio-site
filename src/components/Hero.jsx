import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Code2, 
  Layers,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { profileData } from '../data/portfolioData';

export function Hero({ onOpenContactModal, onExploreProjects }) {
  return (
    <section id="hero" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Headline & Bio */}
          <div className="hero-content">
            {/* Live Availability Badge */}
            <div className="hero-status-tag">
              <span className="radar-pulse"></span>
              <span style={{ color: '#22d3ee', fontWeight: 600 }}>{profileData.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Arnold A. Magalona
              <span className="text-gradient-cyan" style={{ display: 'block', fontSize: '0.88em', marginTop: '6px' }}>
                Web Developer & System Architect
              </span>
            </h1>

            {/* Roles Bar */}
            <div className="hero-roles-bar">
              <span>Full-Stack Web</span>
              <span className="role-separator">•</span>
              <span>Enterprise Systems</span>
              <span className="role-separator">•</span>
              <span>Graphics & UI/UX</span>
              <span className="role-separator">•</span>
              <span>Computer Engineer</span>
            </div>

            {/* Subheadline & Value Proposition */}
            <p className="hero-subtitle">
              {profileData.headline}
            </p>

            {/* Education & Location Quick Tag */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={16} color="#06b6d4" />
                <span><strong>BS Computer Engineering</strong> (2011–2017) | SPUS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="#06b6d4" />
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="hero-cta-group">
              <button 
                type="button"
                className="btn-primary"
                onClick={onExploreProjects}
              >
                <span>View Live Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                type="button"
                className="btn-secondary"
                onClick={onOpenContactModal}
              >
                <Sparkles size={18} color="#22d3ee" />
                <span>Contact Me</span>
              </button>

              {/* Social Profile Pill Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '12px 14px', borderRadius: '12px' }}
                  title="GitHub: Arnold-Mags"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '12px 14px', borderRadius: '12px' }}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} color="#38bdf8" />
                </a>

                <a
                  href={profileData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '12px 14px', borderRadius: '12px' }}
                  title="Facebook Profile"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon size={18} color="#60a5fa" />
                </a>
              </div>
            </div>

            {/* Key Stats Counter Strip */}
            <div className="hero-stats-strip">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-title">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive System Architect Terminal Card */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-title">arnold@architect-node ~ /portfolio</div>
              <div className="badge-emerald" style={{ padding: '3px 8px', fontSize: '0.72rem' }}>
                <CheckCircle2 size={12} />
                <span>ONLINE</span>
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-row">
                <span className="terminal-prompt">$</span>
                <span>whoami --role</span>
              </div>
              <div style={{ paddingLeft: '18px', color: '#f1f5f9' }}>
                <span className="terminal-key">name:</span> <span className="terminal-val">"Arnold A. Magalona"</span><br/>
                <span className="terminal-key">degree:</span> <span className="terminal-val">"B.S. Computer Engineering"</span><br/>
                <span className="terminal-key">specialties:</span> [
                <span style={{ color: '#bae6fd' }}>"Full-Stack Web"</span>, 
                <span style={{ color: '#bae6fd' }}>"Custom ERP/HRMS"</span>, 
                <span style={{ color: '#bae6fd' }}>"RFID/IoT Systems"</span>,
                <span style={{ color: '#bae6fd' }}>"SQL Architect"</span>
                ]
              </div>

              <div className="terminal-row" style={{ marginTop: '8px' }}>
                <span className="terminal-prompt">$</span>
                <span>cat core_competencies.json</span>
              </div>
              
              <div className="terminal-badge-grid">
                <span className="tech-chip"><Code2 size={12} color="#06b6d4" /> React / JS (ES6+)</span>
                <span className="tech-chip"><Database size={12} color="#38bdf8" /> SQL / PostgreSQL</span>
                <span className="tech-chip"><Cpu size={12} color="#a855f7" /> RFID & Hardware Sockets</span>
                <span className="tech-chip"><Globe size={12} color="#10b981" /> spus.edu.ph Flagship</span>
                <span className="tech-chip"><ShieldCheck size={12} color="#f59e0b" /> DICT Cybersafe Certified</span>
                <span className="tech-chip"><Layers size={12} color="#ec4899" /> Adobe Photoshop UI</span>
              </div>

              <div className="terminal-footer-status">
                <span>Deployment: SURIGAO_NODE_01</span>
                <span style={{ color: '#10b981' }}>Latency: 14ms (Optimal)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
