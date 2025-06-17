import AdminNavbar from "@/components/navbar/AdminNavbar";
import AdminSidebar from "@/components/navbar/AdminSidebar";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Danog Technical Solution limited",
  description: "A Construction & Building Company",
  icons: "/logo-icon.jpg"
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex max-w-[1440px]">
          <AdminSidebar/>
          <div className="w-full bg-[#f2f2f2] flex flex-col gap-[30px]">
            <AdminNavbar />
            {children}
          </div>
          
        </div>

      </body>
    </html>
  );
}