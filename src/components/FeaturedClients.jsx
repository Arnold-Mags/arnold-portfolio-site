import React from 'react';
import { 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Activity, 
  Maximize2 
} from 'lucide-react';
import { clientProjects } from '../data/portfolioData';

export function FeaturedClients({ onSelectProject }) {
  return (
    <section id="clients" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Featured Client Roster</span>
          <h2 className="section-title">
            Live Production Websites & <span className="text-gradient-cyan">Platforms</span>
          </h2>
          <p className="section-description">
            High-availability web ecosystems and business-critical client platforms engineered for institutional scale, operational efficiency, and high conversion.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="clients-grid">
          {clientProjects.map((project) => (
            <div key={project.id} className="client-card">
              {/* Top Row: Icon, Badge, Live Status */}
              <div>
                <div className="card-top-row">
                  <div className="client-logo-badge">
                    <Globe size={26} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge-cyan">{project.badge}</span>
                    <span className="badge-emerald">
                      <span className="radar-pulse" style={{ width: '6px', height: '6px' }}></span>
                      Live
                    </span>
                  </div>
                </div>

                {/* Project Title & Outbound Domain */}
                <h3 className="client-card-title">
                  {project.name}
                </h3>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-domain-link"
                  aria-label={`Visit live site ${project.domain}`}
                >
                  <span>{project.domain}</span>
                  <ExternalLink size={14} />
                </a>

                {/* Tagline */}
                <p className="client-tagline" style={{ marginTop: '12px' }}>
                  {project.tagline}
                </p>

                {/* Key Highlights */}
                <ul className="client-highlights-list">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={16} className="highlight-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions & Tech Pills */}
              <div className="card-footer-actions">
                <div className="card-tech-pills">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="skill-tag-item">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-btn-links">
                  <button
                    type="button"
                    className="btn-outline-cyan"
                    onClick={() => onSelectProject(project)}
                    title="View System Breakdown"
                  >
                    <Maximize2 size={15} />
                    <span>Deep Dive</span>
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '10px 16px', fontSize: '0.85rem' }}
                  >
                    <span>Launch</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
