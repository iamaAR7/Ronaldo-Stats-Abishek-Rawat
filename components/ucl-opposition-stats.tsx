"use client"

import { BarChart, Bar, XAxis, CartesianGrid, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Top opposition teams Ronaldo scored against in UCL with team colors
const oppositionData = [
  { team: "Juventus", goals: 10, color: "#000000" }, // Juventus black
  { team: "Bayern Munich", goals: 9, color: "#dc052d" }, // Bayern red
  { team: "Atletico Madrid", goals: 7, color: "#cb3524" }, // Atletico red
  { team: "Ajax", goals: 7, color: "#f00" }, // Ajax red
  { team: "Dortmund", goals: 7, color: "#fde100" }, // Dortmund yellow
  { team: "PSG", goals: 6, color: "#004170" }, // PSG blue
  { team: "Galatasaray", goals: 6, color: "#ffcc00" }, // Galatasaray yellow
  { team: "APOEL", goals: 6, color: "#0066b2" }, // APOEL blue
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
            <Bar dataKey="goals" name="Goals">
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

