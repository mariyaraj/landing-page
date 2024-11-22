// components/ClientLayout.tsx
'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import('@/components/common/CookieConsent'), {
  ssr: false
});

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}