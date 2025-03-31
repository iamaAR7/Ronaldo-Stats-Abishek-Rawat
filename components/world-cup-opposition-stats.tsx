"use client"

import { BarChart, Bar, XAxis, CartesianGrid, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Teams Ronaldo scored against in World Cup with colors matching their flags
const oppositionData = [
  { team: "Spain", goals: 3, color: "#c60b1e" }, // Spanish red
  { team: "Ghana", goals: 2, color: "#006b3f" }, // Ghana green
  { team: "Iran", goals: 1, color: "#239f40" }, // Iran green
  { team: "North Korea", goals: 1, color: "#ed1c27" }, // North Korean red
  { team: "Morocco", goals: 1, color: "#c1272d" }, // Moroccan red
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
            <Bar dataKey="goals" name="Goals">
              {/* Use Cell components to apply different colors to each bar */}
              {oppositionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

