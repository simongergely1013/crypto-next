import { options, useSparkLineData } from "@/app/lib/coinsTableCharts-options";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface SparkLineProps {
  data: number[];
}

const CoinsTableLineChart = ({ data }: SparkLineProps) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const bg = isDark ? "bg-[#191832]" : "bg-white";
  const labels: string[] = [];
  const prices: number[] = [];
  //duration should be props

  // labels should be props
  for (let i = 0; i < data.length; i++) {
    if (i % 8 === 0) {
      labels.push("");
    }
  }

  // prices should be props
  for (let i = 0; i < data.length; i++) {
    if (i % 8 === 0) {
      prices.push(data[i]);
    }
  }

  const isChartPositive = prices[0] >= prices[prices.length - 1];
  //useEffect here to fetch data based on duration prop

  return (
    <div className={`${bg} relative w-[120px]`}>
      <Line
        options={options}
        data={useSparkLineData(labels, prices, isChartPositive)}
        className="absolute -mt-4"
      />
    </div>
  );
};

export default CoinsTableLineChart;
