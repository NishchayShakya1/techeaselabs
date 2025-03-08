"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            TechEase Labs
          </span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#products"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              const productsSection = document.getElementById("products")
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="#products"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  const productsSection = document.getElementById("products")
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
              >
                Products
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  const aboutSection = document.getElementById("about")
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

