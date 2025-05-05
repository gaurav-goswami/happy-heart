import { Toaster } from "@/components/ui/sonner";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const APP_NAME = "HappyHeart";
const APP_DEFAULT_TITLE = "HappyHeart PWA";
const APP_TITLE_TEMPLATE = "%s - HappyHeart PWA App";
const APP_DESCRIPTION = "HappyHeart! Keep your health tracked";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  generator: "Next.js",
  viewport: "minimum=scale-1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    {
      rel: "apple-touch-icon", url: "/icon512_rounded.png"
    },
    {
      rel: "icon", url: "/icon512_rounded.png"
    }
  ]
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon512_rounded.png" />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
