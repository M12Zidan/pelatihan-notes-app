import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "NotesAPP - Zidan",
  description: "Aplikasi Catatan Sederhana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen`}>
        {/* Pass isLoggedIn to Navbar */}
        <Navbar />
        <section className="p-4 bg-slate-200 flex-grow">{children}</section>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
