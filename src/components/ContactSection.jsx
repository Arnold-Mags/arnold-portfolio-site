import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Clock,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

export function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    
    // Trigger subtle confetti burst
    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#06B6D4', '#3B82F6', '#10B981']
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message sent successfully! Arnold will get back to you shortly.');
      
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06B6D4', '#22D3EE', '#3B82F6', '#10B981']
        });
      } catch (err) {}
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Initiate a Project or <span className="text-gradient-cyan">Consultation</span>
          </h2>
          <p className="section-description">
            Available for enterprise system development, full-stack web applications, database architecture, and technical advisory.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="contact-info-panel">
            <div>
              <div className="badge-emerald" style={{ width: 'fit-content', marginBottom: '16px' }}>
                <span className="radar-pulse"></span>
                <span>Direct Inquiries Welcomed</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '12px' }}>
                Get In Touch Directly
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Have an enterprise system requirement, a live web application project, or need database architecture consulting? Reach out via email, phone, or the direct form.
              </p>

              {/* Architect Profile Headshot Card */}
              <div className="contact-architect-badge">
                <div className="contact-architect-avatar-wrap">
                  <img 
                    src="/arnold-photo.jpg" 
                    alt="Arnold A. Magalona" 
                    className="contact-architect-img" 
                  />
                  <span className="contact-architect-online"></span>
                </div>
                <div>
                  <div className="contact-architect-name">Arnold A. Magalona</div>
                  <div className="contact-architect-role">Director, ICT Systems & Services • Full-Stack Architect</div>
                  <div className="contact-architect-loc">
                    <MapPin size={12} color="#06b6d4" />
                    <span>Surigao City, Caraga Region, Philippines</span>
                  </div>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="direct-contact-list" style={{ marginTop: '20px' }}>
                {/* Email Item */}
                <div className="direct-contact-item">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="contact-label">Email Address</div>
                      <div className="contact-val">{profileData.email}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-outline-cyan"
                    style={{ padding: '8px 12px', fontSize: '0.78rem' }}
                    onClick={() => handleCopy(profileData.email, 'Email')}
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedField === 'Email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="direct-contact-item">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="contact-label">Contact Number</div>
                      <div className="contact-val">{profileData.phone}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-outline-cyan"
                    style={{ padding: '8px 12px', fontSize: '0.78rem' }}
                    onClick={() => handleCopy(profileData.phone, 'Phone Number')}
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone Number' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedField === 'Phone Number' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location Item */}
                <div className="direct-contact-item">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="contact-label">Location / Base</div>
                      <div className="contact-val">{profileData.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer & Social Profiles Strip */}
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '10px' }}>
                  Developer & Professional Profiles
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-contact-item"
                    style={{ padding: '10px 14px', textDecoration: 'none', justifyContent: 'center', gap: '8px' }}
                    title="GitHub: Arnold-Mags"
                  >
                    <GithubIcon size={16} color="#f8fafc" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>GitHub</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>

                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-contact-item"
                    style={{ padding: '10px 14px', textDecoration: 'none', justifyContent: 'center', gap: '8px' }}
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} color="#38bdf8" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>LinkedIn</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>

                  <a
                    href={profileData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-contact-item"
                    style={{ padding: '10px 14px', textDecoration: 'none', justifyContent: 'center', gap: '8px' }}
                    title="Facebook Profile"
                  >
                    <FacebookIcon size={16} color="#60a5fa" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60a5fa' }}>Facebook</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Availability Card */}
            <div style={{ padding: '16px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '14px', border: '1px solid rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Clock size={20} color="#22d3ee" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                <strong>Average Response Time:</strong> Within 12–24 business hours (GMT+8).
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>Message Received!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. Arnold has received your inquiry and will follow up with you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn-outline-cyan"
                  style={{ marginTop: '12px' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <MessageSquare size={20} color="#06b6d4" />
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff' }}>Send a Direct Message</h3>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe / Engr. Santos"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    <span>Email Address *</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    <span>Project or Inquiry Subject</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Custom Portal Development / Consultation"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    <span>Project Details & Message *</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Describe your goals, requirements, or questions..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="radar-pulse" style={{ backgroundColor: '#04121d' }}></span>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry to Arnold</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
