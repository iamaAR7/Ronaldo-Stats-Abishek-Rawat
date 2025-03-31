"use client"

import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Teams Ronaldo scored against in Euro tournaments
const oppositionData = [
  { team: "Hungary", goals: 3 },
  { team: "Netherlands", goals: 2 },
  { team: "Wales", goals: 2 },
  { team: "Latvia", goals: 1 },
  { team: "Czech Republic", goals: 1 },
  { team: "Greece", goals: 1 },
  { team: "Denmark", goals: 1 },
  { team: "Germany", goals: 1 },
  { team: "France", goals: 1 },
  { team: "Belgium", goals: 1 },
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
            <Bar dataKey="goals" fill="var(--color-goals)" name="Goals" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

