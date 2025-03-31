"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Cristiano Ronaldo's goals and assists data by year
const ronaldoData = [
  { year: "2003", goals: 6, assists: 4 },
  { year: "2004", goals: 9, assists: 6 },
  { year: "2005", goals: 12, assists: 7 },
  { year: "2006", goals: 23, assists: 12 },
  { year: "2007", goals: 42, assists: 8 },
  { year: "2008", goals: 33, assists: 10 },
  { year: "2009", goals: 30, assists: 13 },
  { year: "2010", goals: 53, assists: 16 },
  { year: "2011", goals: 60, assists: 15 },
  { year: "2012", goals: 63, assists: 14 },
  { year: "2013", goals: 69, assists: 17 },
  { year: "2014", goals: 61, assists: 22 },
  { year: "2015", goals: 57, assists: 17 },
  { year: "2016", goals: 55, assists: 15 },
  { year: "2017", goals: 53, assists: 13 },
  { year: "2018", goals: 49, assists: 12 },
  { year: "2019", goals: 39, assists: 8 },
  { year: "2020", goals: 37, assists: 7 },
  { year: "2021", goals: 36, assists: 9 },
  { year: "2022", goals: 32, assists: 5 },
  { year: "2023", goals: 44, assists: 12 },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-1))",
  },
  assists: {
    label: "Assists",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RonaldoGoalsAssists() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - Goals & Assists</CardTitle>
        <CardDescription>Career statistics by year (2003-2023)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={ronaldoData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="goals" fill="var(--color-goals)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="assists" fill="var(--color-assists)" radius={[0, 0, 4, 4]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Career total: 863 goals and 243 assists <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Peak year: 2013 with 69 goals and 17 assists</div>
      </CardFooter>
    </Card>
  )
}

