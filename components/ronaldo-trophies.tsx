"use client"

import { Trophy } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Cristiano Ronaldo's trophies data by year
const trophiesData = [
  { year: "2003", club: 0, international: 0 },
  { year: "2004", club: 1, international: 0 },
  { year: "2005", club: 0, international: 0 },
  { year: "2006", club: 0, international: 0 },
  { year: "2007", club: 1, international: 0 },
  { year: "2008", club: 3, international: 0 },
  { year: "2009", club: 0, international: 0 },
  { year: "2010", club: 1, international: 0 },
  { year: "2011", club: 2, international: 0 },
  { year: "2012", club: 1, international: 0 },
  { year: "2013", club: 0, international: 0 },
  { year: "2014", club: 3, international: 0 },
  { year: "2015", club: 0, international: 0 },
  { year: "2016", club: 2, international: 1 },
  { year: "2017", club: 4, international: 0 },
  { year: "2018", club: 1, international: 0 },
  { year: "2019", club: 2, international: 1 },
  { year: "2020", club: 1, international: 0 },
  { year: "2021", club: 1, international: 0 },
  { year: "2022", club: 0, international: 0 },
  { year: "2023", club: 1, international: 0 },
]

const chartConfig = {
  club: {
    label: "Club Trophies",
    color: "hsl(var(--chart-3))",
  },
  international: {
    label: "International Trophies",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RonaldoTrophies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - Trophies</CardTitle>
        <CardDescription>Club and international trophies by year (2003-2023)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={trophiesData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="international"
              type="monotone"
              fill="var(--color-international)"
              fillOpacity={0.6}
              stroke="var(--color-international)"
              stackId="a"
            />
            <Area
              dataKey="club"
              type="monotone"
              fill="var(--color-club)"
              fillOpacity={0.6}
              stroke="var(--color-club)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              <Trophy className="h-4 w-4" /> Total: 34 trophies (32 club, 2 international)
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Most successful year: 2017 with 4 club trophies
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

