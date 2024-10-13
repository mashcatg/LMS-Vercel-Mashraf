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
  { date: "2024-02", expense: 2500 },
  { date: "2024-03", expense: 1800 },
  { date: "2024-04", expense: 3000 },
  { date: "2024-05", expense: 2200 },
  { date: "2024-06", expense: 2700 },
  { date: "2024-07", expense: 3200 }, // Corrected duplicate month
];

const chartConfig = {
  expense: {
    label: "Expense",
    color: "hsl(var(--secondary))",
  },
};

export default function ExpenseChart() {
  const totalExpense = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.expense, 0),
    []
  );

  const lastMonthExpense = chartData[chartData.length - 1].expense; // Expense for the most recent month
  const previousMonthExpense = chartData[chartData.length - 2].expense; // Expense for the previous month

  // Calculate percentage change
  const percentageChange =
    ((lastMonthExpense - previousMonthExpense) / previousMonthExpense) * 100;

  return (
    <Card className="w-full flex flex-row justify-between">
      <div className="flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Total Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalExpense.toLocaleString()} BDT
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
                    nameKey="expense"
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
                dataKey="expense"
                fill={`var(--color-expense)`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
