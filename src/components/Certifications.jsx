import React from 'react';
import { Award, ShieldAlert, Lock, Mic, CheckCircle } from 'lucide-react';
import { speakerCertifications } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  ShieldAlert: ShieldAlert,
  Lock: Lock,
  Mic: Mic,
};

export function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Credentials & Training</span>
          <h2 className="section-title">
            Certifications & <span className="text-gradient-cyan">Speaker Engagements</span>
          </h2>
          <p className="section-description">
            Recognized industry credentials in cybersecurity, educational technology, digital citizenship, and technical training facilitation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {speakerCertifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div key={index} className="cert-card">
                <div className="cert-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="badge-cyan" style={{ marginTop: '6px', fontSize: '0.72rem' }}>
                    {cert.category}
                  </div>
                </div>
                <p className="cert-desc">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
