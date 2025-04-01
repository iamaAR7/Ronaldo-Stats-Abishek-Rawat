"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's yearly goals and assists data
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
    color: "#da020e", // Red for goals
  },
  assists: {
    label: "Assists",
    color: "#0066cc", // Blue for assists
  },
} satisfies ChartConfig

export function RonaldoYearlyStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - Career Statistics</CardTitle>
        <CardDescription>Goals and assists by year (2003-2023)</CardDescription>
      </CardHeader>
      <CardContent className="h-[500px]">
        <ChartContainer config={chartConfig} className="h-full">
          <LineChart
            data={ronaldoData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="year" angle={-45} textAnchor="end" height={60} tickMargin={20} />
            <YAxis />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  customContent={(entry:any) => (
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Year: {entry?.payload?.[0]?.payload.year}</div>
                      <div>Goals: {entry?.payload?.[0]?.payload.goals}</div>
                      <div>Assists: {entry?.payload?.[0]?.payload.assists}</div>
                      <div>
                        Total: {(entry?.payload?.[0]?.payload.goals || 0) + (entry?.payload?.[0]?.payload.assists || 0)}
                      </div>
                    </div>
                  )}
                />
              }
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="goals"
              stroke="#da020e"
              strokeWidth={3}
              dot={{ r: 4, fill: "#da020e" }}
              activeDot={{ r: 6 }}
              name="Goals"
            />
            <Line
              type="monotone"
              dataKey="assists"
              stroke="#0066cc"
              strokeWidth={3}
              dot={{ r: 4, fill: "#0066cc" }}
              activeDot={{ r: 6 }}
              name="Assists"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4" /> Peak year: 2013 with 69 goals and 17 assists (86 total)
        </div>
        <div className="leading-none text-muted-foreground">
          Consistent 30+ goals per year for 14 consecutive seasons (2010-2023)
        </div>
      </CardFooter>
    </Card>
  )
}

