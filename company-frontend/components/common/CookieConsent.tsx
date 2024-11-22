// components/common/CookieConsent.tsx
'use client';

import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  // Verzögerte Initialisierung um Hydration-Probleme zu vermeiden
  useEffect(() => {
    // Prüfe nach dem ersten Render, ob bereits eine Einwilligung existiert
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Kleine Verzögerung für bessere UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // Wenn Einwilligung existiert, lade die gespeicherten Präferenzen
    try {
      const savedPreferences = JSON.parse(consent);
      setPreferences(prev => ({
        ...prev,
        ...savedPreferences
      }));
    } catch (e) {
      console.error('Error parsing cookie preferences:', e);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...newPreferences,
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
    
    // Hier können Sie Analytics/Marketing-Cookies initialisieren
    initializeCookies(newPreferences);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
    setShowPreferences(false);
    
    // Hier können Sie Analytics/Marketing-Cookies basierend auf den Präferenzen initialisieren
    initializeCookies(preferences);
  };

  const handleDenyAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...newPreferences,
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
    
    // Hier können Sie alle nicht notwendigen Cookies entfernen
    removeCookies();
  };

  // Hilfsfunktion zum Initialisieren der Cookies
  const initializeCookies = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      // Google Analytics oder andere Analytics-Tools initialisieren
      console.log('Analytics initialized');
    }
    if (prefs.marketing) {
      // Marketing-Cookies initialisieren
      console.log('Marketing initialized');
    }
  };

  // Hilfsfunktion zum Entfernen nicht notwendiger Cookies
  const removeCookies = () => {
    // Entfernen Sie hier alle nicht essentiellen Cookies
    console.log('Non-essential cookies removed');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto p-4">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-700 text-sm">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Nutzungserlebnis zu bieten. 
                Einige sind notwendig für den Betrieb der Website, während andere uns helfen, diese zu verbessern.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
              >
                Einstellungen
              </button>
              <button
                onClick={handleDenyAll}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
              >
                Ablehnen
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm text-white bg-[#00c2cb] hover:bg-[#00a2a8] rounded"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Cookie-Einstellungen</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                aria-label="Schließen"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Notwendige Cookies</h4>
                  <p className="text-sm text-gray-500">Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4"
                />
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Analyse Cookies</h4>
                  <p className="text-sm text-gray-500">Helfen uns zu verstehen, wie Besucher mit der Website interagieren.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({...prev, analytics: e.target.checked}))}
                  className="h-4 w-4"
                />
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-500">Werden verwendet, um Besuchern relevante Werbung anzuzeigen.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({...prev, marketing: e.target.checked}))}
                  className="h-4 w-4"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={handleDenyAll}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
              >
                Alle ablehnen
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm text-white bg-[#00c2cb] hover:bg-[#00a2a8] rounded"
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;