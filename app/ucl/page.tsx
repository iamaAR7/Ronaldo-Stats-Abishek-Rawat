import { RonaldoUCL } from "@/components/ronaldo-ucl"
import { UCLOppositionStats } from "@/components/ucl-opposition-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UCLPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cristiano Ronaldo - UEFA Champions League Career</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <RonaldoUCL />
        <UCLOppositionStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Champions League Records</CardTitle>
            <CardDescription>All-time achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>All-time top scorer: 140 goals</li>
              <li>Most appearances: 183 matches</li>
              <li>Most goals in a single season: 17 (2013-14)</li>
              <li>Most knockout stage goals: 67</li>
              <li>Most finals goals: 4</li>
              <li>Only player to score in 3 different Champions League finals</li>
              <li>Most hat-tricks: 8</li>
              <li>Scored against 38 different teams (record)</li>
              <li>Most consecutive matches scored: 11</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Champions League Titles</CardTitle>
            <CardDescription>5 titles with two different clubs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>2007-08 (Manchester United)</strong>: Scored in the final against Chelsea, converted his penalty
                in the shootout
              </li>
              <li>
                <strong>2013-14 (Real Madrid)</strong>: Scored 17 goals in the campaign including the final penalty
                against Atletico Madrid
              </li>
              <li>
                <strong>2015-16 (Real Madrid)</strong>: Scored the winning penalty in the shootout against Atletico
                Madrid
              </li>
              <li>
                <strong>2016-17 (Real Madrid)</strong>: Scored twice in the final against Juventus
              </li>
              <li>
                <strong>2017-18 (Real Madrid)</strong>: Finished as top scorer with 15 goals
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memorable UCL Performances</CardTitle>
            <CardDescription>Iconic matches and moments</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>vs Juventus (2018)</strong>: Bicycle kick goal in quarter-final
              </li>
              <li>
                <strong>vs Atletico Madrid (2019)</strong>: Hat-trick to overturn 2-0 deficit
              </li>
              <li>
                <strong>vs Bayern Munich (2017)</strong>: Hat-trick in quarter-final
              </li>
              <li>
                <strong>vs Wolfsburg (2016)</strong>: Hat-trick to overturn 2-0 deficit
              </li>
              <li>
                <strong>vs Galatasaray (2013)</strong>: Hat-trick in 15 minutes
              </li>
              <li>
                <strong>vs Manchester United (2013)</strong>: Decisive goal against former club
              </li>
              <li>
                <strong>vs Arsenal (2009)</strong>: Long-range goal in semi-final
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>UCL by Club</CardTitle>
            <CardDescription>Performance breakdown by team</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Manchester United</strong>: 21 goals in 55 appearances
              </li>
              <li>
                <strong>Real Madrid</strong>: 105 goals in 101 appearances
              </li>
              <li>
                <strong>Juventus</strong>: 14 goals in 23 appearances
              </li>
              <li>Scored in Champions League with three different clubs</li>
              <li>Won the competition with two different clubs</li>
              <li>Scored in 12 consecutive seasons (2007-2019)</li>
              <li>Scored 50+ goals against teams from 4 different countries</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

