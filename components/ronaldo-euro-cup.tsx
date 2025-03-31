"use client"

import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"
import { Award } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's Euro Cup stats
const euroData = [
  {
    tournament: "Euro 2004",
    goals: 2,
    assists: 0,
    appearances: 6,
    achievement: "Runner-up",
  },
  {
    tournament: "Euro 2008",
    goals: 1,
    assists: 1,
    appearances: 3,
    achievement: "Quarter-finals",
  },
  {
    tournament: "Euro 2012",
    goals: 3,
    assists: 1,
    appearances: 5,
    achievement: "Semi-finals",
  },
  {
    tournament: "Euro 2016",
    goals: 3,
    assists: 3,
    appearances: 7,
    achievement: "Winner",
  },
  {
    tournament: "Euro 2020",
    goals: 5,
    assists: 1,
    appearances: 4,
    achievement: "Round of 16",
  },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-5))",
  },
  assists: {
    label: "Assists",
    color: "hsl(var(--chart-6))",
  },
  appearances: {
    label: "Appearances",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig

export function RonaldoEuroCup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - European Championship</CardTitle>
        <CardDescription>Performance across five Euro tournaments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={euroData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="tournament" />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  customContent={(entry) => (
                    <div className="font-medium">{entry?.payload?.[0]?.payload.achievement}</div>
                  )}
                />
              }
            />
            <Bar dataKey="goals" fill="var(--color-goals)" name="Goals" />
            <Bar dataKey="assists" fill="var(--color-assists)" name="Assists" />
            <Bar dataKey="appearances" fill="var(--color-appearances)" name="Appearances" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Award className="h-4 w-4" /> All-time Euro top scorer: 14 goals
        </div>
        <div className="leading-none text-muted-foreground">
          Only player to appear in 5 Euro tournaments (2004-2020)
        </div>
      </CardFooter>
    </Card>
  )
}

