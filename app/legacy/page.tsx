import Image from "next/image"
import { RonaldoYearlyStats } from "@/components/ronaldo-yearly-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegacyPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cristiano Ronaldo - Career Legacy</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image
                src="\goat.jpg"
                alt="Cristiano Ronaldo"
                width={450}
                height={600}
                className="object-cover"
                priority
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Career Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2003</span>
                    <span>Professional debut at Sporting CP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2004</span>
                    <span>First international goal for Portugal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2008</span>
                    <span>First Ballon d'Or and Champions League</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2009</span>
                    <span>World record transfer to Real Madrid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2013</span>
                    <span>Peak year: 69 goals, 17 assists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2016</span>
                    <span>Euro Championship with Portugal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2018</span>
                    <span>5th Champions League title</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2022</span>
                    <span>Surpassed 800 career goals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-16 text-sm font-medium">2024</span>
                    <span>Surpassed 900 career goals on 5th of September</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:col-span-2">
          <RonaldoYearlyStats />

          <div className="grid grid-cols-1 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>The Ronaldo Legacy</CardTitle>
                <CardDescription>
                  A career defined by records, resilience, and relentless pursuit of excellence
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-headings:font-bold prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 max-w-none">
                <p>
                  Cristiano Ronaldo's career spans over two decades of excellence, breaking records and redefining
                  what's possible in football. His journey from a skinny teenager at Sporting CP to one of the greatest
                  footballers of all time is a testament to his extraordinary dedication and talent.
                </p>

                <h4 className="text-lg font-bold mt-6 mb-3">Record Breaker</h4>
                <p>
                  Ronaldo has shattered countless records throughout his career. He is the all-time top scorer in the
                  Champions League (140 goals), European Championship (14 goals), and international football (128
                  goals). He became the first player to score 50+ goals in multiple major European leagues and the first
                  to score in five different World Cup tournaments.
                </p>

                <h4 className="text-lg font-bold mt-6 mb-3">Goal Machine</h4>
                <p>
                  The line chart above illustrates Ronaldo's remarkable consistency and goal-scoring prowess. His peak
                  years at Real Madrid (2010-2018) saw him average over 50 goals per season, with his most prolific year
                  coming in 2013 with 69 goals. Even in his late 30s, Ronaldo continued to find the net with impressive
                  regularity.
                </p>

                <h4 className="text-lg font-bold mt-6 mb-3">Adaptability</h4>
                <p>
                  One of Ronaldo's most impressive qualities has been his ability to adapt and evolve. From the tricky
                  winger at Manchester United to the goal-scoring machine at Real Madrid, to the penalty-box predator at
                  Juventus and Al-Nassr, Ronaldo has constantly reinvented his game to maintain his effectiveness as
                  he's aged.
                </p>

                <h4 className="text-lg font-bold mt-6 mb-3">Mental Fortitude</h4>
                <p>
                  Perhaps Ronaldo's greatest attribute is his mentality. His work ethic, determination, and self-belief
                  have allowed him to overcome challenges and continue performing at the highest level well into his
                  30s. His famous quote, "Success is foreseeable, yet remains invisible until achieved," encapsulates
                  his philosophy of visualizing success and then working relentlessly to achieve it.
                </p>

                <h4 className="text-lg font-bold mt-6 mb-3">Global Icon</h4>
                <p>
                  Beyond his sporting achievements, Ronaldo has become one of the most recognizable and influential
                  figures in the world. With hundreds of millions of followers across social media platforms, his impact
                  extends far beyond football, inspiring generations of young athletes worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

