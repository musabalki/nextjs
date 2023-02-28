
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          HEADER
        </header>
        {children}
        <footer>
          FOOTER
        </footer>
      </body>
    </html>
  )
}
