import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Database, 
  Server, 
  Globe, 
  ShieldCheck, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export function ProjectModal({ item, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  const isClient = type === 'client';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ paddingRight: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-cyan">{item.badge || item.category}</span>
            <span className="badge-emerald">
              <span className="radar-pulse" style={{ width: '6px', height: '6px' }}></span>
              {isClient ? 'Live Production' : 'Enterprise Deployed'}
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800 }}>
            {item.name || item.title}
          </h2>

          {item.domain && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-domain-link"
              style={{ fontSize: '0.95rem', marginTop: '6px' }}
            >
              <span>{item.domain}</span>
              <ExternalLink size={15} />
            </a>
          )}

          {item.organization && (
            <div style={{ fontSize: '0.9rem', color: '#38bdf8', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
              Organization: {item.organization}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
          {/* Detailed Description */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Overview & Scope
            </h4>
            <p style={{ color: '#e2e8f0', fontSize: '0.96rem', lineHeight: 1.65 }}>
              {item.description || item.summary}
            </p>
          </div>

          {/* Problem Solved (Enterprise) or Highlights (Client) */}
          {item.problemSolved && (
            <div className="enterprise-problem-box">
              <strong style={{ color: '#22d3ee', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>
                CHALLENGE & SYSTEM ARCHITECTURE SOLUTION:
              </strong>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                {item.problemSolved}
              </p>
            </div>
          )}

          {/* Features List */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              System Capabilities & Engineering Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(item.highlights || item.keyFeatures || []).map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Technology Stack & Protocols
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {item.techStack.map((tech, idx) => (
                <span key={idx} className="skill-tag-item" style={{ padding: '6px 12px', fontSize: '0.82rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            Close Window
          </button>

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>Visit Live Web Platform</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
