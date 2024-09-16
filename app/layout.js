import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Clients from "@/components/clients/clients";
import About from "@/components/About/About";
import Featured from "@/components/Featured/Featured";
import Truest from "@/components/Trust/Truest";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import StartBanner from "@/components/StartBanner/StartBanner";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Upgrade",
  description: "FINANCE WITH SECURITY AND FLEXIBILITY",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-custom-blue to-custom-teal`}>
        <Navbar />
        <Home />
        <Clients />
        <About />
        <Featured />
        <Truest />
        <Services />
        <Testimonial />
        <StartBanner />
        <Footer />
      </body>
    </html>
  );
}
