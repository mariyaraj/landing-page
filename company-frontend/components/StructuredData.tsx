// components/StructuredData.tsx
export default function StructuredData() {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI2Connect',
      url: 'http://ai2connect-do.com',
      logo: 'http://ai2connect-do.com/logo.png',
      description: 'KI-Matching Plattform für die Logistikbranche',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'DE'
      },
      sameAs: [
        // Soziale Medien Links hier einfügen
      ],
      offers: [
        {
          '@type': 'Offer',
          description: 'KI-gestützte Optimierung für Logistik und Supply Chain Management',
          category: 'Logistics Technology',
        },
        {
          '@type': 'Offer',
          description: 'Intelligente Automatisierung für Lager und Distributionszentren',
          category: 'Warehouse Management',
        },
        {
          '@type': 'Offer',
          description: 'KI-basiertes Flottenmanagement und Routenoptimierung',
          category: 'Transport Management',
        },
        {
          '@type': 'Offer',
          description: 'Predictive Analytics für Supply Chain Optimierung',
          category: 'Supply Chain Analytics',
        }
      ],
      industry: 'Logistics & Transportation',
      knowsAbout: [
        'Logistics Management',
        'Supply Chain Optimization',
        'Artificial Intelligence',
        'Machine Learning',
        'Warehouse Automation',
        'Transport Optimization',
        'Fleet Management',
        'Predictive Analytics',
        'Digital Transformation'
      ],
    };

  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }