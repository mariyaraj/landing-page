'use client';

import { BookingPopup } from '@/components/common/BookingPopup';
import { Card } from '@/components/common/Card';
import { Footer } from '@/components/common/Footer';
import { CARDS } from '@/lib/constants/cards';
import { useState } from 'react';
import CookieConsent from '@/components/common/CookieConsent';
import Image from 'next/image';
import PartnerSlider from '@/components/common/PartnerSlider';
import './page.css';

export default function Home() {
  const [activePopup, setActivePopup] = useState<(typeof CARDS)[number] | null>(null);
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const handleBookingClick = (card: (typeof CARDS)[number]) => {
    setActivePopup(card);
  };

  return (
    <div className="page-container">
      {/* Hintergrund mit Overlay */}
      <div className="background-overlay" aria-hidden="true"></div>

      <main className="main-content">
        {/* Header */}
        <div className="header-container">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mb-4">
            <div className="header-logo">
              <Image src="/logo.png" alt="AI2Connect Firmenlogo" width={80} height={80} />
            </div>
            <h1 className="header-title">
              <span className="text-brand-cyan">AI</span>
              <span className="text-white">2</span>
              <span className="text-brand-cyan">Connect</span>
            </h1>
          </div>

          <div className="mb-4">
            <p className="text-base sm:text-lg lg:text-2xl text-white mb-4 text-shadow">
            Hier entsteht in Kürze die AI2Connect Matching Plattform, die KI-Anbieter und -Anwender intelligent und gezielt zusammenbringt.
              Unsere Vision ist die perfekte Symbiose aus menschlicher Expertise und KI-Innovation. Ganz gleich, ob Sie erste Schritte in die KI-Welt planen,
              bestehende Lösungen ausbauen oder als Anbieter Teil unseres exklusiven KI-Netzwerks werden möchten - wir begleiten Ihr Unternehmen
              mit individueller Beratung auf dem Weg zur optimalen KI-Integration.
            </p>

            {/* Accordion */}
            <div className="mt-4">
              <button
                className="accordion-button"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
                aria-expanded={showMoreInfo}
                aria-controls="accordion-content"
              >
                {showMoreInfo ? 'Weniger Info' : 'Weitere Infos'}
                <span className={`ml-2 transform transition-transform duration-300 ${showMoreInfo ? 'rotate-180' : ''}`} aria-hidden="true">
                  ▼
                </span>
              </button>

              <div id="accordion-content" className={`accordion-content ${showMoreInfo ? 'accordion-open' : 'accordion-closed'}`}>
                <div className="mt-4 bg-white/90 backdrop-blur text-black p-4 rounded-lg shadow-lg">
                  <p className="text-sm sm:text-base">
                    AI2Connect revolutioniert die Art, wie Unternehmen KI-Lösungen finden und implementieren. Anders als klassische Plattformen bieten wir keine Standardlösungen, sondern schaffen passgenaue Verbindungen.
                    Unsere KI-gestützte Analysemethodik, kombiniert mit persönlicher Expertenberatung, minimiert Fehlinvestitionen
                    und beschleunigt Ihre digitale Transformation. Profitieren Sie von unserem wachsenden Netzwerk ausgewählter
                    KI-Spezialisten und jahrelanger Expertise in der erfolgreichen Integration von KI-Lösungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="cards-grid">
            {CARDS.map((card) => (
              <div key={card.id} className="card-wrapper">
                <Card
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  type={card.type}
                  onClick={() => handleBookingClick(card)}
                  className="card"
                  buttonText={card.id < 3 ? 'Termin buchen' : 'Bewerben'}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Partner Sektion */}
      <section aria-labelledby="partner-title">
        <h2 id="partner-title" className="sr-only">Partnerunternehmen</h2>
        <PartnerSlider />
      </section>

      <Footer />

      {activePopup && (
        <BookingPopup
          visible={true}
          onClose={() => setActivePopup(null)}
          cardId={activePopup.id}
        />
      )}

      <CookieConsent />
    </div>
  );
}
