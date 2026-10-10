import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, Check, Sparkles, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

export function ContactModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Your message has been dispatched to Arnold.');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 900);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    onShowToast('Copied email to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <div className="badge-cyan" style={{ marginBottom: '8px' }}>
            <Sparkles size={13} />
            <span>Direct Channel</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 800 }}>
            Connect with Arnold A. Magalona
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Web Developer | Graphics Designer | Computer Engineer
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', margin: '0 auto 16px auto' }}>
              <Check size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff' }}>Inquiry Sent!</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '8px' }}>
              Arnold will review your message and reply to <strong>{formData.email}</strong> as soon as possible.
            </p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: '20px' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message / Project Scope *</label>
              <textarea
                required
                rows="3"
                placeholder="How can Arnold assist your team or project?"
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '4px' }}
            >
              {isSubmitting ? 'Sending...' : 'Dispatch Message'}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.82rem', color: '#94a3b8' }}>
              <span>Or email directly:</span>
              <button
                type="button"
                onClick={copyEmail}
                style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
              >
                <span>{profileData.email}</span>
                <Copy size={13} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
