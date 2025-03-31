"use client"

import { PieChart, Pie, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Top opposition teams Ronaldo scored against in leagues
const oppositionData = [
  { name: "Sevilla", value: 27, color: "hsl(var(--chart-1))" },
  { name: "Atletico Madrid", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Getafe", value: 23, color: "hsl(var(--chart-3))" },
  { name: "Barcelona", value: 20, color: "hsl(var(--chart-4))" },
  { name: "Celta Vigo", value: 20, color: "hsl(var(--chart-5))" },
  { name: "Other Teams", value: 424, color: "hsl(var(--chart-6))" },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LeagueOppositionStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goals Against Top Opposition</CardTitle>
        <CardDescription>Teams Ronaldo scored against most frequently in league matches</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <PieChart>
            <Pie
              data={oppositionData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {oppositionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

