import { RonaldoEuroCup } from "@/components/ronaldo-euro-cup"
import { EuroOppositionStats } from "@/components/euro-opposition-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EuroPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cristiano Ronaldo - European Championship Career</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <RonaldoEuroCup />
        <EuroOppositionStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Euro 2004</CardTitle>
            <CardDescription>Portugal (Host Nation)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>First major international tournament</li>
              <li>2 goals in 6 appearances</li>
              <li>Scored against Greece and Netherlands</li>
              <li>Named in the Team of the Tournament</li>
              <li>Portugal finished as runners-up, losing to Greece in the final</li>
              <li>19-year-old Ronaldo was in tears after the final defeat</li>
              <li>Established himself as one of Portugal's key players</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Euro 2008 & 2012</CardTitle>
            <CardDescription>Austria/Switzerland (2008) & Poland/Ukraine (2012)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Euro 2008</strong>: 1 goal in 3 appearances
              </li>
              <li>Scored against Czech Republic</li>
              <li>Portugal reached the quarter-finals, losing to Germany</li>
              <li>
                <strong>Euro 2012</strong>: 3 goals in 5 appearances
              </li>
              <li>Scored against Netherlands and Czech Republic</li>
              <li>Joint top scorer of the tournament</li>
              <li>Portugal reached the semi-finals, losing to Spain on penalties</li>
              <li>Named in the Team of the Tournament</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Euro 2016</CardTitle>
            <CardDescription>France - Portugal's first major trophy</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>3 goals and 3 assists in 7 appearances</li>
              <li>Scored against Hungary (2) and Wales</li>
              <li>Captain of the Portugal team</li>
              <li>Crucial goals in 3-3 draw with Hungary to help Portugal advance</li>
              <li>Goal and assist in 2-0 semi-final win against Wales</li>
              <li>Injured in the final against France but became an emotional leader from the sidelines</li>
              <li>Portugal won 1-0 in extra time for their first major trophy</li>
              <li>Emotional moment as Ronaldo lifted the trophy</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Euro 2020 & Records</CardTitle>
            <CardDescription>Played in 2021 across Europe</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>5 goals and 1 assist in 4 appearances</li>
              <li>Joint top scorer of the tournament</li>
              <li>Scored against Hungary (2), Germany, and France</li>
              <li>Portugal eliminated in Round of 16 by Belgium</li>
              <li>
                <strong>Euro Records</strong>:
              </li>
              <li>All-time top scorer: 14 goals</li>
              <li>Most tournaments scored in: 5</li>
              <li>Most matches played: 25</li>
              <li>Only player to appear in 5 Euro tournaments</li>
              <li>Most penalties scored: 6</li>
              <li>Most Euro finals appearances: 2 (2004, 2016)</li>
              <li>Oldest player to score a hat-trick in the Euros (against Hungary in 2021)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

