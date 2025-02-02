import React, { useState } from 'react';
import { CardProps } from '@/lib/types/components';

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  className,
  onClick,
}) => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (consentGiven || id >= 3) {
      onClick(e);
    } else {
      alert('Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.');
    }
  };

  const cardBackground = id === 4
    ? 'bg-orange-400/25 backdrop-blur'
    : 'bg-white bg-opacity-10 backdrop-blur';

  // Dynamische Höhe für den Content-Bereich basierend auf Kartentyp
  const contentHeight = id < 3
    ? 'calc(100% - 180px)' // Mehr Platz für Footer mit Checkbox
    : 'calc(100% - 120px)'; // Weniger Platz nötig für Footer ohne Checkbox

  return (
    <div className={`
      hover-card 
      glass-effect 
      rounded-xl 
      border 
      border-white/20
      w-96 
      h-[26rem] 
      ${cardBackground}
      ${className}
    `}>
      <div className="relative w-full h-full">
        {/* Content area mit dynamischer Höhe */}
        <div role="article"
          aria-labelledby={`card-title-${id}`}
          className="absolute top-0 left-0 right-0 p-8 overflow-hidden"
          style={{ height: contentHeight }}
        >

          <h2 id={`card-title-${id}`} className="text-2xl font-bold mb-4 text-white h-16 flex items-center">
            {title}
          </h2>
          <p className={`text-base text-white/90 overflow-hidden ${id < 3 ? 'line-clamp-7' : 'line-clamp-8'}`}>
            {description}
          </p>
        </div>

        {/* Footer mit angepasster Position */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-transparent">
          {id < 3 && (
            <div className="mb-4">
              <label className="flex items-center text-sm text-white">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                />
                Ich stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>
          )}

          <button
            className={`
    w-full 
    py-3 
    px-4 
    rounded 
    transition-all 
    duration-300
    ${consentGiven || id >= 3
                ? 'btn-primary'  // Nutzt die zentrale Klasse für Cyan-Buttons
                : 'bg-gray-400 cursor-not-allowed text-white'
              }
  `}
            onClick={handleButtonClick}
            disabled={!consentGiven && id < 3}
          >
            {id < 3 ? 'Termin buchen' : 'Bewerben'}
          </button>
        </div>
      </div>
    </div>
  );
};