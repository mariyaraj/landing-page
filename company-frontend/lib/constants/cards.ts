import { CardData } from "../types/components";

export const CARDS: CardData[] = [
  {
    id: 1,
    title: "Noch keine KI-Lösungen integriert?",
    description:
      "In einer kostenlosen Erstberatung klären wir Ihren Bedarf, analysieren Ihre Prozesse und zeigen maßgeschneiderte KI-Optimierungen auf",
    buttonText: "Erstberatung buchen",
    type: "consultation",
    className: "bg-gray-900/60 backdrop-blur-lg"
  },
  {
    id: 2,
    title: "Sie setzen schon KI ein?",
    description:
      "Wir analysieren Ihr Potenzial und vermitteln den idealen Partner für Ihre Innovation",
    buttonText: "Termin buchen",
    type: "consultation",
    className: "bg-blue-500/50 backdrop-blur", // Weniger transparent
  },
  {
    id: 3,
    title: "Anbieter von KI-Lösungen?",
    description:
      "Werden Sie unser Pilotpartner und gestalten Sie AI2Connect aktiv mit.",
    buttonText: "Jetzt bewerben",
    type: "application",
    className: "bg-gray-900/90 backdrop-blur-lg",
  },
  {
    id: 4,
    title: "Die richtige KI-Verbindung für Logistik?",
    description:
      "Sichern Sie sich Ihre Vorreiterrolle mit exklusiven Vorteilen als Pilotunternehmen - für KI-Anbieter und Suchende in der Logistik",
    buttonText: "Jetzt bewerben",
    type: "application",
    className: "bg-orange-500/30", // Transparente orange Farbe
  },
] as const;
