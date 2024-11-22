import React from 'react';
import { BookingPopupProps } from '@/lib/types/components';
import SimplyBookWidget from '@/components/SimplyBookWidget';
import ApplicationContent from './ApplicationContent';

interface ExtendedBookingPopupProps extends BookingPopupProps {
  cardId?: number;
}

export function BookingPopup({ visible, onClose, cardId }: ExtendedBookingPopupProps) {
  if (!visible) return null;

  // Bestimme die Popup-Größe basierend auf dem Inhalt
  const isBookingWidget = cardId && cardId < 3;
  const popupClasses = isBookingWidget
    ? 'w-full max-w-4xl h-[650px]' // Für SimplyBook Widget
    : 'w-full max-w-4xl'; // Etwas schmaler für Bewerbungsformular

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className={`
        bg-white 
        rounded-lg 
        shadow-xl 
        relative
        ${popupClasses}
      `}>
        {/* Schließen Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-50"
          aria-label="Schließen"
        >
          ×
        </button>

        {/* Dynamischer Content Container */}
        {isBookingWidget ? (
          // SimplyBook Container
          <div className="h-full rounded-lg overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="text-xl font-bold text-gray-800">Termin Buchen</h3>
            </div>
            <div className="h-[calc(100%-88px)]">
              <SimplyBookWidget />
            </div>
          </div>
        ) : (
          // Bewerbungsformular Container - ohne doppelte Überschrift und Linie
          <div className="max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto px-8 pt-6 pb-8">
              <ApplicationContent
                onClose={onClose}
                type={cardId === 3 ? 'provider' : 'pilot'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}