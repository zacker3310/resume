import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: `${profile.name}. ${profile.headline}. ${profile.location}.`,
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: `${profile.name}. ${profile.headline}. ${profile.location}.`,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
