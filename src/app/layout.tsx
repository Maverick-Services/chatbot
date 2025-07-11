import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ava AI | Powered By MatchBest',
  description: 'Transform your business with AVA – Your AI Chatbot Assistant. Automate 90% of customer conversations across WhatsApp, Instagram, and your Website.',
  keywords: 'AI chatbot, customer service automation, WhatsApp bot, Instagram bot, multilingual AI, business automation',
  authors: [{ name: 'MatchBest' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col gradient-bg text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
