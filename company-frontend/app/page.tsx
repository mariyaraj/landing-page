'use client';

import { BookingPopup } from '@/components/common/BookingPopup';
import { Card } from '@/components/common/Card';
import { Footer } from '@/components/common/Footer';
import { CARDS } from '@/lib/constants/cards';
import { useState } from 'react';
import CookieConsent from '@/components/common/CookieConsent';
import Image from 'next/image';

export default function Home() {
  const [activePopup, setActivePopup] = useState<(typeof CARDS)[number] | null>(null);
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const handleBookingClick = (card: (typeof CARDS)[number]) => {
    setActivePopup(card); // Pass the full card object
  };



  return (
    <div className="min-h-screen text-white relative flex flex-col justify-between font-sans">
      {/* Background */}
      <div className="background"></div>

      <main className="relative z-10 w-full flex flex-col px-4 sm:px-8 lg:px-16">
        {/* Header und Text Section */}
        <div className="w-full lg:w-[60%] mt-8 sm:mt-[10vh] lg:mt-[15vh]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-lg" style={{ position: 'relative', width: '100px', height: '100px' }}>
              <Image
                src="/logo.png"
                alt="AI2Connect Logo"
                fill
                style={{ objectFit: 'contain' }}
              />

          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl xl:text-7xl font-bold">
            <span className="text-[#00c2cb]">AI</span>
            <span className="text-white">2</span>
            <span className="text-[#00c2cb]">Connect</span>
          </h1>
        </div>

        <div className="mb-4">
          <p className="text-base sm:text-lg lg:text-2xl text-white mb-4">
            Hier entsteht in Kürze die AI2Connect Matching Plattform, die KI-Anbieter und -Anwender intelligent und gezielt zusammenbringt.
            Unsere Vision ist die perfekte Symbiose aus menschlicher Expertise und KI-Innovation. Mit individueller Beratung begleiten wir
            Unternehmen auf ihrem Weg zur optimalen KI-Integration, ob Du erste Schritte in die KI-Welt planst, bestehende Lösungen
            ausbauen möchtest oder als Anbieter Teil unseres exklusiven KI-Netzwerks werden willst.
          </p>

          <div>
            <button
              className="btn-primary"
              onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
              {showMoreInfo ? 'Weniger Info' : 'Weitere Infos'}
            </button>
            {showMoreInfo && (
              <div className="mt-4 bg-white/90 backdrop-blur text-black p-4 rounded-lg shadow-lg animate-fade-in">
                <p className="text-sm sm:text-base">
                  AI2Connect revolutioniert die Art, wie Unternehmen KI-Lösungen finden und implementieren.
                  Anders als klassische Plattformen bieten wir keine Standardlösungen, sondern schaffen passgenaue Verbindungen.
                  Unsere KI-gestützte Analysemethodik, kombiniert mit persönlicher Expertenberatung, minimiert Fehlinvestitionen
                  und beschleunigt Ihre digitale Transformation. Profitieren Sie von unserem wachsenden Netzwerk ausgewählter
                  KI-Spezialisten und jahrelanger Expertise in der erfolgreichen Integration von KI-Lösungen.
                </p>
              </div>
            )}
          </div>
        </div>
    </div>

        {/* Cards Section */ }
  <div className="w-full sm:pl-0 lg:pl-[10%] mt-4">
    <div className="flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
      {CARDS.map((card) => (
        <div key={card.id} className="relative">
          <Card
            id={card.id}
            title={card.title}
            description={card.description}
            type={card.type}
            onClick={() => handleBookingClick(card)}
            className=""
            buttonText={card.id < 3 ? 'Termin buchen' : 'Bewerben'} // Dynamischer Button-Text
          />
        </div>
      ))}
    </div>
  </div>
      </main >

    <Footer />

  {
    activePopup && (
      <BookingPopup
        visible={true}
        onClose={() => setActivePopup(null)}
        cardId={activePopup.id} // ID der aktiven Karte
      />
    )
  }
  <CookieConsent />
    </div >
  );
}
