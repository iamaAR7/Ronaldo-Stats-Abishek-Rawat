"use client"

import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"
import { Medal } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's stats in major leagues
const leagueData = [
  {
    league: "Premier League",
    goals: 103,
    assists: 37,
    appearances: 236,
    titles: 3,
    period: "2003-2009, 2021-2022",
  },
  {
    league: "La Liga",
    goals: 311,
    assists: 95,
    appearances: 292,
    titles: 2,
    period: "2009-2018",
  },
  {
    league: "Serie A",
    goals: 81,
    assists: 17,
    appearances: 98,
    titles: 2,
    period: "2018-2021",
  },
  {
    league: "Saudi Pro League",
    goals: 44,
    assists: 13,
    appearances: 45,
    titles: 0,
    period: "2023-Present",
  },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-1))",
  },
  assists: {
    label: "Assists",
    color: "hsl(var(--chart-2))",
  },
  appearances: {
    label: "Appearances",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function RonaldoMajorLeagues() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - Major Leagues</CardTitle>
        <CardDescription>Performance across different domestic leagues</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            layout="vertical"
            data={leagueData}
            margin={{
              top: 20,
              right: 30,
              left: 100,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="goals" fill="var(--color-goals)" name="Goals" />
            <Bar dataKey="assists" fill="var(--color-assists)" name="Assists" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Medal className="h-4 w-4" /> 7 league titles across 3 different leagues
        </div>
        <div className="leading-none text-muted-foreground">Most prolific in La Liga: 311 goals in 292 appearances</div>
      </CardFooter>
    </Card>
  )
}

