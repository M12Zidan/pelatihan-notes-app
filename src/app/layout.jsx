import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NotesAPP - Zidan",
  description: "Aplikasi Catatan Sederhana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen justify-between bg-slate-200 antialiased`}>
        <Navbar />
        <section className="max-w-screen-lg mx-auto p-4">
          {children}
        </section>
        <Footer/>
      </body>
    </html>
  );
}
