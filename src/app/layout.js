import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kem net Apps Share",
  description: "Download any kem net based app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'min-h-[100vh] flex flex-col justify-between'}>
        <Header/>
        <div className="pt-[80px]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
