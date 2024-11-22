import { CardData } from "../types/components";

export const CARDS: CardData[] = [
  {
    id: 1,
    title: "Noch keine KI-Lösungen integriert?",
    description:
      "In einer kostenlosen, individuellen Erstberatung ermitteln wir Deinen Bedarf. In Folgeterminen analysieren wir die entsprechenden Prozesse, zeigen maßgeschneiderte KI-Optimierungen und finden den idealen Partner für Deine Anforderungen.",
    buttonText: "Erstberatung buchen",
    type: "consultation",
    className: "bg-blue-500/30", // Transparente blaue Farbe
  },
  {
    id: 2,
    title: "Du setzt schon KI ein?",
    description:
      "Entdecke weitere Optimierungsmöglichkeiten für deine Geschäftsprozesse. Wir analysieren Dein Potenzial und vermitteln die idealen Partner für Deine nächsten Innovationsschritte.",
    buttonText: "Termin buchen",
    type: "consultation",
    className: "bg-blue-500/30", // Transparente blaue Farbe
  },
  {
    id: 3,
    title: "Du bist Anbieter von KI-Lösungen?",
    description:
      "Werden Sie Pilotpartner und präsentieren Sie Ihre KI-Expertise. Wir sorgen für die perfekte Verbindung zu Ihren zukünftigen Kunden.",
    buttonText: "Jetzt bewerben",
    type: "application",
    className: "bg-blue-500/30", // Transparente blaue Farbe
  },
  {
    id: 4,
    title: "Die richtige KI-Verbindung für Logistik?",
    description:
      "Sichern Sie sich jetzt Ihre Vorreiterrolle: Als Pilotunternehmen genießen Sie Sonderkonditionen und exklusive Vorteile – ob als KI-Anbieter oder -Suchender in der Logistikbranche.",
    buttonText: "Jetzt bewerben",
    type: "application",
    className: "bg-orange-500/30", // Transparente orange Farbe
  },
] as const;
