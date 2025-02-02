import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

interface ContactContentProps {
  onClose: () => void;
}

const ContactContent: React.FC<ContactContentProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '', phone: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData({ name: '', email: '', message: '', company: '', phone: '' });
    setFormStatus(null);
    setIsSubmitted(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Bitte füllen Sie alle Felder aus.');
      return;
    }
    setFormStatus('Nachricht wird gesendet...');
    setTimeout(() => {
      setFormStatus('');
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Jetzt Kontakt aufnehmen</h2>

      {/* **Mittelblock: Foto, QR-Code & Kontaktdaten zentriert** */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex gap-4">
          <img src="mariya.jpg" alt="Mariyas Foto" className="w-20 h-20 rounded-full border border-gray-300 shadow-md" />
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?data=BEGIN:VCARD%0AVERSION:3.0%0AFN:Mariya%20Rajendran%0AEMAIL:info@ai2connect-do.com%0ATEL:+49%20176%2062000818%0ATEL:+49%20231%2058097539%0AORG:AI2Connect%20in%20Planung%0AURL:https%3A%2F%2Fwww.ai2connect-do.com%0AEND:VCARD&size=150x150" 
            alt="QR Code" 
            className="w-20 h-20 border border-gray-300 shadow-md"
          />
        </div>
        <p className="text-[#00c2cb] font-semibold mt-4">AI2Connect (in Planung)</p>
      </div>

      <div className="mb-6 text-center">
        <a 
          href="https://www.linkedin.com/in/mariya-rajendran-651240151" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center mb-2 text-blue-600 hover:underline"
        >
          <FaLinkedin className="w-5 h-5 mr-2" /> Mariya Rajendran
        </a>
        <p className="text-gray-700 flex justify-center items-center">
          <FaEnvelope className="mr-2" />
          <a href="mailto:info@ai2connect-do.com" className="text-blue-500 hover:underline">info@ai2connect-do.com</a>
        </p>
        <p className="text-gray-700 flex justify-center items-center">
          <FaPhone className="mr-2" /> Mobil: 0176 62000818
        </p>
        <p className="text-gray-700 flex justify-center items-center">
          <FaPhone className="mr-2" /> Telefon: 0231 58097539
        </p>
      </div>

      {/* Kontaktformular linksbündig mit max-width 28rem */}
      {formStatus && <p className="mb-4 text-[#003479] font-semibold">{formStatus}</p>}
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-[28rem] ml-6">
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black" placeholder="Dein Name" required />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1">E-Mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black" placeholder="Deine E-Mail" required />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1">Nachricht</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black" rows={3} placeholder="Deine Nachricht" required></textarea>
          </div>

          {/* Buttons rechtsbündig */}
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" onClick={onClose} 
              className="bg-[#003479] text-white px-4 py-2 rounded hover:bg-[#002a5c] transition-all">
              Abbrechen
            </button>
            <button type="submit" className="bg-[#00c2cb] text-white px-4 py-2 rounded hover:bg-[#009da6] transition-all">
              Senden
            </button>
          </div>
        </form>
      ) : (
        <p className="text-[#003479] font-semibold text-left">Danke für deine Nachricht! Wir melden uns bald.</p>
      )}
    </div>
  );
};

export default ContactContent;
