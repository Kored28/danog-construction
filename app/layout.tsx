import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";



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
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <Navbar />
          <div className="w-full">
            {children}
          </div>
          <Footer />
        </div>

      </body>
    </html>
  );
}
