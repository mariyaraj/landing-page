// app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI2Connect - KI-Matching Plattform für die Logistik',
    template: '%s | AI2Connect Logistik'
  },
  description: 'AI2Connect verbindet Logistikunternehmen mit spezialisierten KI-Anbietern. Optimieren Sie Ihre Logistikprozesse durch intelligente KI-Lösungen für Supply Chain, Warehousing, Transport und Flottenmanagement.',
  keywords: [
    'KI-Matching', 
    'Künstliche Intelligenz', 
    'KI-Integration', 
    'KI-Beratung', 
    'KI-Lösungen',
    'Logistik KI',
    'Supply Chain Optimierung',
    'Intelligente Logistik',
    'Digitale Logistik',
    'KI Logistiklösungen',
    'Warehouse Management',
    'Flottenmanagement',
    'Predictive Analytics Logistik',
    'Transport Optimierung',
    'Smart Logistics',
    'Logistik 4.0',
    'Digitale Transformation Logistik'
  ],
  authors: [{ name: 'AI2Connect' }],
  creator: 'AI2Connect',
  publisher: 'AI2Connect',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ai2connect-do.com',
    title: 'AI2Connect - Intelligente KI-Matching Plattform für die Logistikbranche',
    description: 'Revolutionieren Sie Ihre Logistik: Vernetzen Sie sich mit führenden KI-Anbietern für innovative Lösungen in Transport, Lagerung und Supply Chain Management. Steigern Sie Ihre Effizienz durch maßgeschneiderte KI-Integration.',
    siteName: 'AI2Connect Logistik',
    images: [{
      url: 'https://ai2connect-do.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AI2Connect Logistik Platform Preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI2Connect - KI-Matching Plattform für die Logistik',
    description: 'Intelligentes Matching von KI-Anbietern und Logistikunternehmen: Optimieren Sie Ihre Supply Chain mit KI.',
    images: ['https://ai2connect-do.com/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Ihr-Google-Verification-Code',
  },
  category: 'Logistics & Technology',
  classification: 'Logistics, Artificial Intelligence, Supply Chain Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}