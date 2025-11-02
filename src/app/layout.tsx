import type { Metadata } from "next";
import "./globals.css";

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
        {/* Preload critical fonts for better FCP */}
        <link
          rel="preload"
          href="/fonts/Khand/Fonts/WEB/fonts/Khand-Regular.woff2"
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
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
