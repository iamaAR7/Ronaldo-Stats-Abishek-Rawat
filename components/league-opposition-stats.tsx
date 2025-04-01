"use client"

import { PieChart, Pie, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Top opposition teams Ronaldo scored against in leagues with team colors
const oppositionData = [
  { name: "Sevilla", value: 27, color: "#e30613" }, // Sevilla red
  { name: "Atletico Madrid", value: 25, color: "#cb3524" }, // Atletico red
  { name: "Getafe", value: 23, color: "#005999" }, // Getafe blue
  { name: "Barcelona", value: 20, color: "#a50044" }, // Barcelona maroon
  { name: "Celta Vigo", value: 20, color: "#6cace4" }, // Celta Vigo sky blue
  { name: "Other Teams", value: 424, color: "#2e3a59" }, // Dark blue for other teams
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
              cy="60%"
              labelLine={true}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {oppositionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name, props) => (
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">{props.payload.name}</div>
                      <div>Goals: {props.payload.value}</div>
                    </div>
                  )}
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

