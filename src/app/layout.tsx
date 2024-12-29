import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Memory Companion',
  description: 'A platform for sharing and preserving cherished memories',
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