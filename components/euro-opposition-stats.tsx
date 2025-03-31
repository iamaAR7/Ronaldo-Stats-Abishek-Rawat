"use client"

import { BarChart, Bar, XAxis, CartesianGrid, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Teams Ronaldo scored against in Euro tournaments with country colors
const oppositionData = [
  { team: "Hungary", goals: 3, color: "#cd2a3e" }, // Hungary red
  { team: "Netherlands", goals: 2, color: "#ff6f00" }, // Netherlands orange
  { team: "Wales", goals: 2, color: "#c8102e" }, // Wales red
  { team: "Latvia", goals: 1, color: "#9e3039" }, // Latvia maroon
  { team: "Czech Republic", goals: 1, color: "#11457e" }, // Czech blue
  { team: "Greece", goals: 1, color: "#0d5eaf" }, // Greece blue
  { team: "Denmark", goals: 1, color: "#c8102e" }, // Denmark red
  { team: "Germany", goals: 1, color: "#000000" }, // Germany black
  { team: "France", goals: 1, color: "#002654" }, // France blue
  { team: "Belgium", goals: 1, color: "#fdda24" }, // Belgium yellow
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function EuroOppositionStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Euro Goals By Opposition</CardTitle>
        <CardDescription>Teams Ronaldo scored against in European Championships</CardDescription>
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

