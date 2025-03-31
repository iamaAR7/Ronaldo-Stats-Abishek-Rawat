import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Trophy, ClubIcon as Football, Star, Medal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-square mb-8 rounded-full overflow-hidden">
          <Image
            src="\ronaldo.jpg"
            alt="Cristiano Ronaldo"
            width={450}
            height={300}
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          "Success is foreseeable, yet remains invisible until achieved"
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          Explore the legendary career of Cristiano Ronaldo through interactive charts and statistics spanning his
          journey across major leagues and international competitions.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
          <Card className="bg-gradient-to-br from-red-500/10 to-blue-500/10 border-primary/20 hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Trophy className="h-8 w-8 mb-2 text-red-500" />
              <div className="text-3xl font-bold">927</div>
              <div className="text-sm text-muted-foreground">Career Goals</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 border-primary/20 hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Medal className="h-8 w-8 mb-2 text-yellow-500" />
              <div className="text-3xl font-bold">34</div>
              <div className="text-sm text-muted-foreground">Trophies</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-primary/20 hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Football className="h-8 w-8 mb-2 text-blue-500" />
              <div className="text-3xl font-bold">140</div>
              <div className="text-sm text-muted-foreground">UCL Goals</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-primary/20 hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Star className="h-8 w-8 mb-2 text-purple-500" />
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Ballon d'Or</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <Link href="/major-leagues" className="w-full">
            <Button
              variant="outline"
              className="w-full h-full py-6 flex flex-col gap-2 hover:bg-red-500/5 hover:border-red-500/30 transition-all"
            >
              <span className="text-lg font-medium">Major Leagues</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/ucl" className="w-full">
            <Button
              variant="outline"
              className="w-full h-full py-6 flex flex-col gap-2 hover:bg-blue-500/5 hover:border-blue-500/30 transition-all"
            >
              <span className="text-lg font-medium">Champions League</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/euro" className="w-full">
            <Button
              variant="outline"
              className="w-full h-full py-6 flex flex-col gap-2 hover:bg-yellow-500/5 hover:border-yellow-500/30 transition-all"
            >
              <span className="text-lg font-medium">European Championship</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/world-cup" className="w-full">
            <Button
              variant="outline"
              className="w-full h-full py-6 flex flex-col gap-2 hover:bg-green-500/5 hover:border-green-500/30 transition-all"
            >
              <span className="text-lg font-medium">World Cup</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

