"use client"

import { BarChart, Bar, XAxis, CartesianGrid, Cell } from "recharts"
import { Medal } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's stats by club
const clubData = [
  {
    club: "Manchester United",
    goals: 145,
    period: "2003-2009, 2021-2022",
    color: "#da020e", // Man Utd red
  },
  {
    club: "Real Madrid",
    goals: 450,
    period: "2009-2018",
    color: "#ffffff", // Real Madrid white (using light gray for visibility)
  },
  {
    club: "Juventus",
    goals: 101,
    period: "2018-2021",
    color: "#000000", // Juventus black
  },
  {
    club: "Al-Nassr",
    goals: 44,
    period: "2023-Present",
    color: "#ffcc00", // Al-Nassr yellow
  },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function RonaldoMajorLeagues() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - Club Career</CardTitle>
        <CardDescription>Goals scored for each club throughout his career</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={clubData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="club" />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  customContent={(entry:any ) => (
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">{entry?.payload?.[0]?.payload.club}</div>
                      <div>Goals: {entry?.payload?.[0]?.payload.goals}</div>
                      <div>Period: {entry?.payload?.[0]?.payload.period}</div>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="goals" name="Goals" radius={[4, 4, 0, 0]}>
              {clubData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  // For white/light colors, add a border
                  stroke={entry.color === "#ffffff" ? "#cccccc" : entry.color}
                  strokeWidth={entry.color === "#ffffff" ? 1 : 0}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Medal className="h-4 w-4" /> Most prolific at Real Madrid: 450 goals in 9 seasons
        </div>
        <div className="leading-none text-muted-foreground">
          Scored 100+ goals for three different clubs - a unique achievement
        </div>
      </CardFooter>
    </Card>
  )
}

