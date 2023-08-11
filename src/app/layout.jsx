"use client";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { Inter } from "next/font/google";
import Navigation from "@/components/nagivation"; //Usar el arroba para colocarnos el la ruta inicial.

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  //Sirve para agregarle metadata al html de nuestra app.
  title: "Firt App",
  description: "Generated by create next app",
};
//Este es nuestro archivo ruta
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navigation/>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}