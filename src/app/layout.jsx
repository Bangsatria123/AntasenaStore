import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/utils/Navbar";

const lexend = Lexend({ subsets: ['latin'] }); // Initialize the Lexend font

export const metadata = {
  title: "Antasena Store",
  description: "AMAN DAN TERPERCAYA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-[#232323]`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
