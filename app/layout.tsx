import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { Navigation } from './components/Navigation';
import { cn } from './lib/utils';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    default: 'Owen Chang',
    template: '%s | Owen Chang',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Owen Chang',
    description: 'Developer, writer, and creator.',
    url: process.env.BASE_URL as string,
    siteName: 'Owen Chang',
    locale: 'zh_TW',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning={true}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased w-full min-h-screen" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-w-0 flex flex-col md:px-0 flex-grow h-full">
            <Navigation />
            <div className='mt-5'>
              {children}
            </div>
            {/* <Analytics />
            <SpeedInsights /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
