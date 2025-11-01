"use client";

import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { PolarChartProps } from "recharts/types/util/types";

interface MiniRadiaChartProp extends PolarChartProps {
  label: string;
  width?: number;
  height?: number;
  matchData: MiniMatchType[];
}

export interface MiniMatchType {
  name: string;
  value: number;
  fill: string;
}
export default function MiniRadiaChart({
  label,
  width = 150,
  height = 150,
  matchData = [{ name: "적합도", value: 50, fill: "var(--brand)" }],
  ...props
}: MiniRadiaChartProp) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{label}</h4>
      <ResponsiveContainer width={width} height={height}>
        <RadialBarChart
          data={matchData}
          startAngle={(matchData[0].value / 100) * 360}
          {...props}
        >
          <RadialBar dataKey="value" cornerRadius={8} />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-2xl text-[var(--text-light)]">{matchData[0].value}%</p>
    </div>
  );
}
