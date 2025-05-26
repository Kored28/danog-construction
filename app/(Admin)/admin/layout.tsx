import type { Metadata } from "next";



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
          
          <div className="w-full">
            {children}
          </div>
          
        </div>

      </body>
    </html>
  );
}