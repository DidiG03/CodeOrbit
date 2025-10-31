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
      <body className="antialiased overflow-x-hidden">
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
