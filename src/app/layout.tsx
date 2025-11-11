import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "Code Orbit",
  description: "Code Orbit website",
  icons: {
    icon: [
      { url: '/images/logo/logo1.png', type: 'image/png' },
    ],
    shortcut: '/images/logo/logo1.png',
    apple: '/images/logo/logo1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Preload critical fonts for better FCP - ensures fonts always load */}
        <link
          rel="preload"
          href="/fonts/Khand/Fonts/WEB/fonts/Khand-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Khand/Fonts/WEB/fonts/Khand-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Khand/Fonts/WEB/fonts/Khand-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Array/Fonts/WEB/fonts/Array-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Array/Fonts/WEB/fonts/Array-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  send_page_view: false
                });
              `}
            </Script>
            <Analytics />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
