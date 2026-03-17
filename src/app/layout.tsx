import type { Metadata } from "next";
import { Geist, Geist_Mono, Paytone_One, Lexend } from "next/font/google";
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

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graziela Colares - Educadora Física & Personal Trainer | Vôlei & Saúde",
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
        className={`${geistSans.variable} ${geistMono.variable} ${paytoneOne.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
