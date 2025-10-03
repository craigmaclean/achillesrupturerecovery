import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Achilles Rupture Recovery",
  description: "Guide for Achilles tendon injury recovery",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
          <TooltipProvider>
            <div className="min-h-screen bg-background">
              <Header />
              {children}
            </div>
            <Toaster />
            <Sonner />
          </TooltipProvider>
      </body>
    </html>
  )
}