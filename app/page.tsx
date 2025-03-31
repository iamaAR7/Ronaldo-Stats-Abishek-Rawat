import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-square mb-8 rounded-full overflow-hidden">
          <Image
            src="/ronaldo.jpg" 
            alt="Cristiano Ronaldo"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          "Success can be foreseen but cannot be looked at"
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Explore the legendary career of Cristiano Ronaldo through interactive charts and statistics spanning his
          journey across major leagues and international competitions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <Link href="/major-leagues" className="w-full">
            <Button variant="outline" className="w-full h-full py-6 flex flex-col gap-2">
              <span className="text-lg font-medium">Major Leagues</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/ucl" className="w-full">
            <Button variant="outline" className="w-full h-full py-6 flex flex-col gap-2">
              <span className="text-lg font-medium">Champions League</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/euro" className="w-full">
            <Button variant="outline" className="w-full h-full py-6 flex flex-col gap-2">
              <span className="text-lg font-medium">European Championship</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/world-cup" className="w-full">
            <Button variant="outline" className="w-full h-full py-6 flex flex-col gap-2">
              <span className="text-lg font-medium">World Cup</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

