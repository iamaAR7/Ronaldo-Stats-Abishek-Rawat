"use client"

import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Top opposition teams Ronaldo scored against in UCL
const oppositionData = [
  { team: "Juventus", goals: 10 },
  { team: "Bayern Munich", goals: 9 },
  { team: "Atletico Madrid", goals: 7 },
  { team: "Ajax", goals: 7 },
  { team: "Dortmund", goals: 7 },
  { team: "PSG", goals: 6 },
  { team: "Galatasaray", goals: 6 },
  { team: "APOEL", goals: 6 },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function UCLOppositionStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>UCL Goals Against Top Opposition</CardTitle>
        <CardDescription>Teams Ronaldo scored against most frequently in Champions League</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={oppositionData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="team" angle={-45} textAnchor="end" height={60} tickMargin={20} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="goals" fill="var(--color-goals)" name="Goals" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

