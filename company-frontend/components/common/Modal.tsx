import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;  // Optionale Prop für die Breite
  height?: string;    // Optionale Prop für die Höhe
  showCloseButton?: boolean; // Optionale Prop für den Schließen-Button
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, maxWidth = "max-w-4xl", height = "h-3/4", showCloseButton = true }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`relative bg-white p-6 rounded-lg w-full ${maxWidth} ${height} mx-auto overflow-y-auto`}>
        
        {/* "X"-Button zum Schließen oben rechts */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 font-bold"
          aria-label="Schließen"
          style={{ lineHeight: "1" }}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        
        {/* Inhalt des Modals */}
        <div>{children}</div>

        {/* Optionaler Schließen-Button unten */}
        {showCloseButton && (
          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="bg-[#00c2cb] text-white px-4 py-2 rounded">
              Schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
