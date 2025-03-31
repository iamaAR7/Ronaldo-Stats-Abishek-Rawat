"use client"

import { PieChart, Pie, Cell } from "recharts"
import { Globe } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's World Cup stats
const worldCupData = [
  {
    tournament: "2006 World Cup",
    goals: 1,
    opponent: "Iran",
  },
  {
    tournament: "2010 World Cup",
    goals: 1,
    opponent: "North Korea",
  },
  {
    tournament: "2014 World Cup",
    goals: 1,
    opponent: "Ghana",
  },
  {
    tournament: "2018 World Cup",
    goals: 4,
    opponent: "Spain (3), Morocco (1)",
  },
  {
    tournament: "2022 World Cup",
    goals: 1,
    opponent: "Ghana",
  },
]

// Prepare data for pie chart
const pieData = [
  { name: "2006", value: 1, color: "hsl(var(--chart-1))" },
  { name: "2010", value: 1, color: "hsl(var(--chart-2))" },
  { name: "2014", value: 1, color: "hsl(var(--chart-3))" },
  { name: "2018", value: 4, color: "hsl(var(--chart-4))" },
  { name: "2022", value: 1, color: "hsl(var(--chart-5))" },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig

export function RonaldoWorldCup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - FIFA World Cup</CardTitle>
        <CardDescription>Goals distribution across five World Cup tournaments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  customContent={(entry) => {
                    const year = entry?.payload?.[0]?.name
                    const data = worldCupData.find((d) => d.tournament.includes(year))
                    return (
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{data?.tournament}</div>
                        <div>Goals: {data?.goals}</div>
                        <div>vs {data?.opponent}</div>
                      </div>
                    )
                  }}
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Globe className="h-4 w-4" /> Total: 8 goals in 22 World Cup matches
        </div>
        <div className="leading-none text-muted-foreground">
          First player to score in 5 different World Cup tournaments
        </div>
      </CardFooter>
    </Card>
  )
}

