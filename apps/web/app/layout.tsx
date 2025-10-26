import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Board',
  description: 'Team collaboration platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
