import { RonaldoMajorLeagues } from "@/components/ronaldo-major-leagues"
import { LeagueOppositionStats } from "@/components/league-opposition-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MajorLeaguesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Cristiano Ronaldo - Major Leagues Career</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <RonaldoMajorLeagues />
        <LeagueOppositionStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Premier League Highlights</CardTitle>
            <CardDescription>Manchester United (2003-2009, 2021-2022)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>103 goals in 236 appearances</li>
              <li>3 Premier League titles (2006-07, 2007-08, 2008-09)</li>
              <li>Premier League Player of the Season (2006-07, 2007-08)</li>
              <li>Premier League Golden Boot (2007-08)</li>
              <li>Notable hat-tricks against Newcastle, Tottenham, and Norwich</li>
              <li>31 goals in the 2007-08 season - a Premier League record at the time</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>La Liga Highlights</CardTitle>
            <CardDescription>Real Madrid (2009-2018)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>311 goals in 292 appearances - club record</li>
              <li>2 La Liga titles (2011-12, 2016-17)</li>
              <li>3 Pichichi Trophies (top scorer)</li>
              <li>Most hat-tricks in La Liga history (34)</li>
              <li>Scored 40+ league goals in three different seasons</li>
              <li>Record 25 goals against Sevilla, 25 against Atletico Madrid</li>
              <li>Fastest player to reach 150, 200, 250, and 300 La Liga goals</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Serie A Highlights</CardTitle>
            <CardDescription>Juventus (2018-2021)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>81 goals in 98 appearances</li>
              <li>2 Serie A titles (2018-19, 2019-20)</li>
              <li>Serie A Footballer of the Year (2019, 2020)</li>
              <li>Capocannoniere (top scorer) in 2020-21 with 29 goals</li>
              <li>Scored against 19 different Serie A teams</li>
              <li>Fastest player to reach 50 Serie A goals (61 matches)</li>
              <li>Notable hat-tricks against Cagliari and Atletico Madrid</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saudi Pro League</CardTitle>
            <CardDescription>Al-Nassr (2023-Present)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>92 goals in 103 appearances</li>
              <li>Saudi Pro League top scorer (2023-24)</li>
              <li>Multiple hat-tricks including against Al-Wehda</li>
              <li>Scored in 7 consecutive league matches</li>
              <li>Fastest to reach 25 goals in Saudi Pro League history</li>
              <li>Scored against 14 different Saudi Pro League teams</li>
              <li>Helped elevate the profile of Saudi football globally</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

