import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { careerTimeline } from '../data/portfolioData';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Career History & Leadership</span>
          <h2 className="section-title">
            Professional Experience & <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="section-description">
            Demonstrated leadership across government digital transformation initiatives (DICT) and multi-year institutional enterprise system engineering (SPUS).
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {careerTimeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22d3ee' }}></div>
              </div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={15} color="#22d3ee" />
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <span className="badge-cyan" style={{ fontSize: '0.74rem' }}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginTop: '4px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.94rem', fontWeight: 600 }}>
                    <Building2 size={16} />
                    <span>{item.organization}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '0.84rem' }}>
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.55 }}>
                      <CheckCircle2 size={15} color="#06b6d4" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
