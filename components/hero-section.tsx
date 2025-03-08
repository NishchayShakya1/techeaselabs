import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Your Digital Ease{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Innovatio</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Simplifying technology through intuitive mobile applications that enhance your daily life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild className="flex-1">
                <Link href="#products" className="w-full">
                  Explore Our Apps <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link
                  href="https://play.google.com/store/apps/dev?id=8504983407293171219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" /> Google Play Store
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-75 blur-xl"></div>
              <div className="relative rounded-xl bg-background p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="h-40 rounded-lg bg-muted animate-pulse"></div>
                  <div className="h-4 w-3/4 rounded bg-muted animate-pulse"></div>
                  <div className="h-3 w-1/2 rounded bg-muted animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

