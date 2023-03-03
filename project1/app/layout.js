import { Inter } from "next/font/google";
import "@/styles/reset.css"
import "@/styles/globals.css"

const interFontFamily = Inter({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">{children}
      </body>
    </html>
  );
}