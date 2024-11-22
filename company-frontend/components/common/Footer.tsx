import React, { useState } from 'react';
import Modal from './Modal';
import PrivacyPolicy from './PrivacyPolicy';
import ContactContent from './ContactContent';
import ImpressumContent from './ImpressumContent';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
 
  const [isImpressumOpen, setImpressumOpen] = useState(false);

  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <>
      <footer className="w-full bg-[#003479]/80 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>&copy; 2024 AI2Connect</p>
            <div className="flex gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-[#00c2cb]">Datenschutz</button>
              <button onClick={() => setImpressumOpen(true)} className="hover:text-[#00c2cb]">Impressum</button>
              <button onClick={openContact}>Kontakt</button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/ai2connect-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00c2cb] flex items-center"
              >
                <FaLinkedin className="text-2xl" /> {/* Icon-Größe */}
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Datenschutz-Modal mit größerem maxWidth */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} title="Datenschutzerklärung" maxWidth="max-w-4xl" height="h-3/4">
        <PrivacyPolicy />
      </Modal>

      {/* Impressum-Modal mit kleinerer Höhe und Breite */}
      <Modal isOpen={isImpressumOpen} onClose={() => setImpressumOpen(false)} title="Impressum" maxWidth="max-w-xl" height="h-1/2">
        <ImpressumContent />
      </Modal>

         {/* Kontakt-Modal ohne unteren Schließen-Button */}
         <Modal isOpen={isContactOpen} onClose={closeContact} title="Kontaktformular" maxWidth="max-w-xl" height="h-2/3" showCloseButton={false}>
        <ContactContent onClose={closeContact} />
      </Modal>
     
    </>
  );
};