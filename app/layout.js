import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkyCyte - Medical Laboratory Supplies Ltd",
  keywords: "Skycyte, medical laboratory supplies, e-commerce, healthcare technology",
  description: "Skycyte is an medical supplies e-commerce platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
