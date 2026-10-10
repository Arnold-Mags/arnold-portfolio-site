import React, { useState } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  LayoutDashboard, 
  Activity, 
  FileCheck, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Database,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { enterpriseSystems } from '../data/portfolioData';

const iconMap = {
  UserCheck: UserCheck,
  GraduationCap: GraduationCap,
  LayoutDashboard: LayoutDashboard,
  Activity: Activity,
  FileCheck: FileCheck,
};

export function EnterpriseSystems({ onSelectSystem }) {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="enterprise" className="section-wrapper" style={{ backgroundColor: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Custom Enterprise Solutions</span>
          <h2 className="section-title">
            Enterprise Systems & <span className="text-gradient-cyan">Campus Infrastructure</span>
          </h2>
          <p className="section-description">
            Mission-critical, internal ERP systems developed for St. Paul University Surigao. Engineered with custom SQL databases, RFID hardware protocols, and high-concurrency transactional workflows.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="enterprise-grid">
          {enterpriseSystems.map((system) => {
            const IconComponent = iconMap[system.iconName] || Server;
            const isFlagship = system.id === 'rfid-hrms';

            return (
              <div key={system.id} className="enterprise-card">
                <div>
                  {/* Card Header */}
                  <div className="enterprise-card-header">
                    <div className="enterprise-icon-box">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <div className="enterprise-org">{system.organization}</div>
                      <h3 className="enterprise-card-title">{system.title}</h3>
                      <div className="badge-cyan" style={{ marginTop: '6px', fontSize: '0.74rem' }}>
                        {system.category}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginTop: '16px', lineHeight: 1.6 }}>
                    {system.summary}
                  </p>

                  {/* Problem Solved Highlight Box */}
                  <div className="enterprise-problem-box" style={{ marginTop: '16px' }}>
                    <strong style={{ color: '#22d3ee', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>
                      IMPACT & RESOLUTION:
                    </strong>
                    {system.problemSolved}
                  </div>

                  {/* Key Features List */}
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                      Key Capabilities:
                    </div>
                    <ul className="enterprise-features-compact">
                      {system.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#06b6d4' }}>▸</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {system.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="skill-tag-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="btn-outline-cyan"
                    style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                    onClick={() => onSelectSystem(system)}
                  >
                    <Maximize2 size={14} />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
