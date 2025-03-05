import type { Metadata } from "next";
import { Hahmlet } from "next/font/google";

import "./globals.scss";

const hahmlet = Hahmlet({
  variable: "--font-hahmlet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fotos - Emely's 15 años",
  description: "¿Listo para celebrar conmigo?",
  openGraph: {
    images: [
      "https://res.cloudinary.com/baygram/image/upload/v1741026180/web_thumbnail_che9os.jpg",
    ],
  },
  twitter: {
    images: [
      "https://res.cloudinary.com/baygram/image/upload/v1741026180/web_thumbnail_che9os.jpg",
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hahmlet.variable} antialiased`}>{children}</body>
    </html>
  );
}
