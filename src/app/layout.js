"use client"
import Navbar from "./components/Navbar";
import "./globals.css";
import useLenisScroll from './hooks/useLenisScroll';


export default function RootLayout({ children }) {
   useLenisScroll(); 
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
