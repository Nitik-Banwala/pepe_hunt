import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "PEPE-HUNT",
  description: "PEPE-HUNT",
  openGraph: {
    title: "PEPE-HUNT",
    description: "PEPE-HUNT",
    images: ["public/meta.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="bg-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
