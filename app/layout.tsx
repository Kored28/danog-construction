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
      <body className="antialiased max-w-[1365px] mx-auto">
        <div className="flex flex-col">
          <div className="flex">
            <Navbar />
          </div>
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
