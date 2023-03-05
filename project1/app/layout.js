import { Inter } from "next/font/google";
import "@/styles/reset.css"
import "@/styles/globals.css"
import Header from "@/components/header";

const interFontFamily = Inter({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">
        <Header/>
        {children}
      </body>
    </html>
  );
}