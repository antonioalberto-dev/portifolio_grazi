import type { Metadata } from "next";
import { Geist, Geist_Mono, Paytone_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const paytoneOne = Paytone_One({
  variable: "--font-paytone-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Graziela - Educadora Física & Personal Trainer | Vôlei & Saúde",
  description: "Transformando vidas através do movimento e do vôlei. Aulas personalizadas, treinamento de vôlei e personal training com uma profissional experiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${paytoneOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
