"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"

export default function NotFound() {
  const pathname = usePathname()

  useEffect(() => {
    console.log('404 - Page not found:', pathname)
  }, [pathname])

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page <code className="px-2 py-1 bg-muted rounded">{pathname}</code> does not exist.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}