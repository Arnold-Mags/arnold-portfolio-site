import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedClients } from './components/FeaturedClients';
import { EnterpriseSystems } from './components/EnterpriseSystems';
import { TechStackServices } from './components/TechStackServices';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('client'); // 'client' | 'enterprise'
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleOpenClientProject = (project) => {
    setSelectedItem(project);
    setModalType('client');
  };

  const handleOpenEnterpriseSystem = (system) => {
    setSelectedItem(system);
    setModalType('enterprise');
  };

  const handleExploreProjects = () => {
    const clientsSec = document.getElementById('clients');
    if (clientsSec) {
      clientsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Background Animated Layer */}
      <div className="bg-ambient-layer">
        <div className="ambient-grid"></div>
        <div className="ambient-orb ambient-orb-1 animate-float-orb"></div>
        <div className="ambient-orb ambient-orb-2 animate-pulse-glow"></div>
        <div className="ambient-orb ambient-orb-3 animate-float-orb"></div>
      </div>

      {/* Navigation */}
      <Navbar 
        onOpenContactModal={() => setIsContactModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenContactModal={() => setIsContactModalOpen(true)} 
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. Client Showcase / Live Projects */}
        <FeaturedClients 
          onSelectProject={handleOpenClientProject} 
        />

        {/* 3. Enterprise Systems Built (SPUS) */}
        <EnterpriseSystems 
          onSelectSystem={handleOpenEnterpriseSystem} 
        />

        {/* 4. Services / Tech Stack */}
        <TechStackServices />

        {/* 5. Experience & Leadership Timeline */}
        <ExperienceTimeline />

        {/* 6. Certifications & Speaker Credentials */}
        <Certifications />

        {/* 7. Contact Section */}
        <ContactSection 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Popup Modal for Projects & Systems */}
      {selectedItem && (
        <ProjectModal 
          item={selectedItem}
          type={modalType}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Fast Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
