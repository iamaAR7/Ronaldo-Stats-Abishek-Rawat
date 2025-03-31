"use client"

import { LineChart, Line, XAxis, CartesianGrid, YAxis } from "recharts"
import { Trophy } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ronaldo's UCL stats by season
const uclData = [
  { season: "2003/04", goals: 0, team: "Man Utd" },
  { season: "2004/05", goals: 0, team: "Man Utd" },
  { season: "2005/06", goals: 1, team: "Man Utd" },
  { season: "2006/07", goals: 3, team: "Man Utd" },
  { season: "2007/08", goals: 8, team: "Man Utd" },
  { season: "2008/09", goals: 4, team: "Man Utd" },
  { season: "2009/10", goals: 7, team: "Real Madrid" },
  { season: "2010/11", goals: 6, team: "Real Madrid" },
  { season: "2011/12", goals: 10, team: "Real Madrid" },
  { season: "2012/13", goals: 12, team: "Real Madrid" },
  { season: "2013/14", goals: 17, team: "Real Madrid" },
  { season: "2014/15", goals: 10, team: "Real Madrid" },
  { season: "2015/16", goals: 16, team: "Real Madrid" },
  { season: "2016/17", goals: 12, team: "Real Madrid" },
  { season: "2017/18", goals: 15, team: "Real Madrid" },
  { season: "2018/19", goals: 6, team: "Juventus" },
  { season: "2019/20", goals: 4, team: "Juventus" },
  { season: "2020/21", goals: 4, team: "Juventus" },
  { season: "2021/22", goals: 6, team: "Man Utd" },
]

const chartConfig = {
  goals: {
    label: "Goals",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RonaldoUCL() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cristiano Ronaldo - UEFA Champions League</CardTitle>
        <CardDescription>Goals per season in the Champions League</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={uclData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="season" angle={-45} textAnchor="end" height={60} tickMargin={20} />
            <YAxis />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  customContent={(entry) => (
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">{entry?.payload?.[0]?.payload.team}</div>
                      <div>{entry?.payload?.[0]?.payload.season}</div>
                    </div>
                  )}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="goals"
              stroke="var(--color-goals)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <Trophy className="h-4 w-4" /> 5 Champions League titles (1 with Man Utd, 4 with Real Madrid)
        </div>
        <div className="leading-none text-muted-foreground">All-time top scorer: 140 goals in 183 appearances</div>
      </CardFooter>
    </Card>
  )
}

