import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Diego Li - Portfolio",
  description: "Web Developer and UI/UX Enthusiast",
}

export default function RootLayout({ children }) {
  return (
    (<html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>)
  );
}

