import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Danog Technical Solution limited",
  description: "A Construction & Building Company",
  icons: "/logo-icon.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
