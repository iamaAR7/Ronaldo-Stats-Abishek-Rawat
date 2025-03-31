"use client"

import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Teams Ronaldo scored against in World Cup
const oppositionData = [
  { team: "Spain", goals: 3 },
  { team: "Ghana", goals: 2 },
  { team: "Iran", goals: 1 },
  { team: "North Korea", goals: 1 },
  { team: "Morocco", goals: 1 },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig

export function WorldCupOppositionStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>World Cup Goals By Opposition</CardTitle>
        <CardDescription>Teams Ronaldo scored against in World Cup tournaments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={oppositionData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="team" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="goals" fill="var(--color-goals)" name="Goals" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

