import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Clock } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Cash It Out: Rewards Converter",
      description: "Convert Play Balance/Opinion Rewards into Digital Cash.",
      features: ["Rs.5 - Rs.10000 Conversion", "In-app Purchase","Orders", "Assistance", "Dark Mode"],
      image: "https://raw.githubusercontent.com/NishchayShakya1/image/refs/heads/main/cash.png",
      link: "https://play.google.com/store/apps/details?id=com.nishchay.cashitout",
    },
    {
      id: 2,
      name: "WealthMetrics: Finance Calc",
      description: "Smart Financial Planning Made Easy – Calculate, Save, and Grow with One Tap!",
      features: ["Investment Calculator", "Recent Calculation Tracking", "Calculate Govt. Schemes"],
      image: "https://raw.githubusercontent.com/NishchayShakya1/image/refs/heads/main/Wealth.png",
      link: "https://play.google.com/store/apps/details?id=com.nishchay.wealthmetrics",
    },
  ]

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our collection of user-friendly mobile applications designed to simplify your digital life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                <CardDescription className="mt-2 line-clamp-2">{product.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={product.link} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}

          {/* Coming Soon Card */}
          <Card className="overflow-hidden border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 min-h-[300px]">
              <Clock className="h-12 w-12 text-muted-foreground mb-4" />
              <CardTitle className="text-xl font-bold text-center">More Apps Coming Soon</CardTitle>
              <CardDescription className="mt-2 text-center">
                We're working on exciting new applications to enhance your digital experience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

