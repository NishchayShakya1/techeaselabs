import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">TechEase Labs</h3>
            <p className="text-sm text-muted-foreground">
              Your Digital Ease, Our Innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Download</h3>
            <Link
              href="https://play.google.com/store/apps/dev?id=8504983407293171219"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="h-12 w-36 bg-muted rounded-md flex items-center justify-center text-sm font-medium">
                Google Play Store
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechEase Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

