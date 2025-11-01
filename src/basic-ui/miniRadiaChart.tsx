import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export interface PolarChartProps {
  width?: number;
  height?: number;
  cx?: number | string;
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  barSize?: number;
  startAngle?: number;
  endAngle?: number;
  data?: any[];
  className?: string;
}

export interface MiniMatchType {
  name: string;
  value: number;
  fill: string;
}

interface MiniRadiaChartProp extends PolarChartProps {
  label: string;
  matchData?: MiniMatchType[];
}

export const MiniRadiaChart = ({
  label,
  width = 150,
  height = 150,
  matchData = [{ name: "적합도", value: 50, fill: "var(--brand)" }],
  ...props
}: MiniRadiaChartProp) => {
  const value = matchData[0]?.value ?? 0;

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold mb-2">{label}</h4>
      <ResponsiveContainer width={width} height={height}>
        <RadialBarChart
          data={matchData}
          startAngle={(value / 100) * 360}
          endAngle={0}
          innerRadius="60%"
          outerRadius="100%"
          barSize={12}
          {...props}
        >
          <RadialBar dataKey="value" cornerRadius={8} />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-2xl text-[var(--text-light)] mt-[-10px]">{value}%</p>
    </div>
  );
};
