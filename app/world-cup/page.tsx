import { RonaldoWorldCup } from "@/components/ronaldo-world-cup"
import { WorldCupOppositionStats } from "@/components/world-cup-opposition-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorldCupPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cristiano Ronaldo - FIFA World Cup Career</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <RonaldoWorldCup />
        <WorldCupOppositionStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>World Cup 2006-2014</CardTitle>
            <CardDescription>Germany (2006), South Africa (2010), Brazil (2014)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>2006 World Cup (Germany)</strong>:
              </li>
              <li>1 goal in 6 appearances</li>
              <li>Scored against Iran in group stage</li>
              <li>Portugal finished 4th, their best result since 1966</li>
              <li>Infamous wink incident after Wayne Rooney's red card</li>
              <li>
                <strong>2010 World Cup (South Africa)</strong>:
              </li>
              <li>1 goal in 4 appearances</li>
              <li>Scored against North Korea in 7-0 win</li>
              <li>Portugal eliminated in Round of 16 by Spain</li>
              <li>
                <strong>2014 World Cup (Brazil)</strong>:
              </li>
              <li>1 goal in 3 appearances</li>
              <li>Scored against Ghana in final group game</li>
              <li>Portugal eliminated in group stage on goal difference</li>
              <li>Played despite knee tendinitis issues</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>World Cup 2018-2022</CardTitle>
            <CardDescription>Russia (2018), Qatar (2022)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>2018 World Cup (Russia)</strong>:
              </li>
              <li>4 goals in 4 appearances</li>
              <li>Hat-trick against Spain in opening match (3-3 draw)</li>
              <li>Winner against Morocco</li>
              <li>Portugal eliminated in Round of 16 by Uruguay</li>
              <li>Became oldest player to score a hat-trick in World Cup history</li>
              <li>
                <strong>2022 World Cup (Qatar)</strong>:
              </li>
              <li>1 goal in 5 appearances</li>
              <li>Scored penalty against Ghana</li>
              <li>Became first male player to score in 5 World Cup tournaments</li>
              <li>Portugal reached quarter-finals, losing to Morocco</li>
              <li>Lost starting position in knockout stages</li>
              <li>Emotional exit in likely his final World Cup</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>World Cup Records</CardTitle>
            <CardDescription>Individual achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>First male player to score in 5 different World Cup tournaments</li>
              <li>8 goals in 22 World Cup matches</li>
              <li>Oldest player to score a World Cup hat-trick (33 years, 130 days)</li>
              <li>Most World Cup matches played for Portugal</li>
              <li>Scored against 5 different nations in World Cup</li>
              <li>Captained Portugal in 3 World Cup tournaments</li>
              <li>Converted all 3 penalties taken in World Cup matches</li>
              <li>Played in World Cup matches across 4 continents</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memorable World Cup Moments</CardTitle>
            <CardDescription>Iconic performances and incidents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>vs Spain (2018)</strong>: Spectacular free-kick to complete hat-trick and secure 3-3 draw
              </li>
              <li>
                <strong>vs Ghana (2022)</strong>: Penalty to become first man to score in 5 World Cups
              </li>
              <li>
                <strong>vs England (2006)</strong>: Decisive penalty in shootout victory
              </li>
              <li>
                <strong>vs Morocco (2018)</strong>: Early header for match-winning goal
              </li>
              <li>
                <strong>vs Netherlands (2006)</strong>: Man of the Match in 1-0 victory
              </li>
              <li>
                <strong>vs Morocco (2022)</strong>: Emotional scenes after quarter-final elimination
              </li>
              <li>
                <strong>vs Ghana (2014)</strong>: Goal and assist in 2-1 victory
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

