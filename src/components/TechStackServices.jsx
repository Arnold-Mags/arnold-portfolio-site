import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  Palette, 
  Cpu, 
  CheckCircle, 
  Terminal, 
  Zap 
} from 'lucide-react';
import { coreCompetencies } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Server: Server,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Palette: Palette,
};

export function TechStackServices() {
  const [activeTab, setActiveTab] = useState(coreCompetencies[0].id);

  return (
    <section id="services" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Capabilities & Tech Stack</span>
          <h2 className="section-title">
            Engineered for Stability, <span className="text-gradient-cyan">Security & Scale</span>
          </h2>
          <p className="section-description">
            A comprehensive blend of hardware-level computer engineering principles, full-stack software architecture, and modern visual design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {coreCompetencies.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrap">
                  <Icon size={26} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                
                <p className="service-desc">
                  {service.description}
                </p>

                <div className="service-skill-tags">
                  {service.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="glass-panel" style={{ marginTop: '48px', padding: '32px 36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', maxWidth: '780px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee', flexShrink: 0 }}>
              <Zap size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '4px' }}>
                Full-Lifecycle Development & Infrastructure Ownership
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                From database normalization and backend API design to responsive modern frontend and on-premise hardware / server networking—every layer is optimized for high reliability.
              </p>
            </div>
          </div>

          <div className="badge-emerald" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <span className="radar-pulse"></span>
            <span>100% Code Quality & Integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
