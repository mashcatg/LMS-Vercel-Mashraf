import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-02", income: 2500 },
  { date: "2024-03", income: 1800 },
  { date: "2024-04", income: 3000 },
  { date: "2024-05", income: 2200 },
  { date: "2024-06", income: 2700 },
  { date: "2024-07", income: 3200 }, // Corrected duplicate month
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--primary))",
  },
};

export default function IncomeChart() {
  const totalIncome = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.income, 0),
    []
  );

  const lastMonthIncome = chartData[chartData.length - 1].income; // Income for the most recent month
  const previousMonthIncome = chartData[chartData.length - 2].income; // Income for the previous month

  // Calculate percentage change
  const percentageChange =
    ((lastMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;

  return (
    <Card className="w-full flex flex-row justify-between">
      <div className="flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalIncome.toLocaleString()} BDT
          </div>
          <p className="text-xs text-muted-foreground">
            {percentageChange > 0 ? "+" : ""}
            {percentageChange.toFixed(2)}% from last month
          </p>
        </CardContent>
      </div>
      <div className="w-[120px] h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="70%">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 0, // Optional: Adjust top margin if needed
                bottom: 0, // Remove bottom margin to center vertically
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                hide={true} // Hides the XAxis labels
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="income"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar
                dataKey="income"
                fill={`var(--color-income)`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
