import React, { useState, useEffect } from 'react';

interface ContactContentProps {
  onClose: () => void;
}

const ContactContent: React.FC<ContactContentProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '', phone: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Funktion, um das Formular zurückzusetzen
  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', company: '', phone: '' });
    setFormStatus(null);
    setIsSubmitted(false);
  };

  useEffect(() => {
    resetForm(); // Zurücksetzen des Formulars, wenn die Komponente geladen oder erneut geöffnet wird
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
    <div>
      {formStatus && <p className="mb-4 text-[#003479] font-semibold">{formStatus}</p>}

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Dein Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Unternehmensname</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Dein Unternehmensname"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Deine E-Mail"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Telefonnummer</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Deine Telefonnummer"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Anliegen</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded text-black"
              rows={4}
              placeholder="Deine Nachricht"
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" onClick={() => { resetForm(); onClose(); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              Abbrechen
            </button>
            <button type="submit" className="bg-[#00c2cb] text-white px-4 py-2 rounded">
              Senden
            </button>
          </div>
        </form>
      ) : (
        <p className="text-[#003479] font-semibold">Vielen Dank für deine Nachricht! Wir melden uns in Kürze bei dir.</p>
      )}
    </div>
  );
};

export default ContactContent;
