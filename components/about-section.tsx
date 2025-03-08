import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About the Developer</h2>
            <p className="text-muted-foreground md:text-xl">
              Meet Nishchay Shakya, the founder and lead developer behind TechEase Labs.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 2 years of experience in mobile application development, Nishchay has a passion for creating
                intuitive, user-friendly solutions that simplify everyday tasks.
              </p>
              <p>
                His expertise spans across Flutter development, UI/UX design, allowing him to
                build comprehensive applications that deliver seamless experiences.
              </p>
              <p>
                The vision behind TechEase Labs is simple: technology should make life easier, not more complicated.
                Every application is designed with this philosophy in mind, focusing on simplicity without sacrificing
                functionality.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/NishchayShakya1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nishchayshakya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/nishchayshakyaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Card className="overflow-hidden w-full max-w-sm">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/NishchayShakya1/image/refs/heads/main/1740734009490.jpg"
                    alt="Nishchay Shakya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-600/10">
                  <h3 className="text-xl font-bold">Nishchay Shakya</h3>
                  <p className="text-sm text-muted-foreground">Founder & Lead Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

