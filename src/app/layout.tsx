import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";
import { CLINIC_INFO } from "@/data/clinicData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${CLINIC_INFO.name} | Gulshan-e-Iqbal, Karachi`,
  description: `${CLINIC_INFO.tagline}. Located at Al-Noor Plaza near Metro Cash & Carry, Gulshan Block 5, Karachi. Call ${CLINIC_INFO.phone} for painless dental care, whitening, root canals, braces & implants.`,
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  keywords: [
    "Dental Clinic Gulshan-e-Iqbal",
    "Dentist in Karachi",
    "SmileCraft Dental Clinic",
    "Root Canal Karachi",
    "Teeth Whitening Karachi",
    "Clear Aligners Pakistan",
    "Dr Hamza Malik Dentist",
    "Dental Clinic near Metro Cash and Carry Gulshan",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#FAF9F6] text-slate-900 min-h-screen flex flex-col font-sans antialiased selection:bg-teal-500 selection:text-white">
        <PageLoader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

