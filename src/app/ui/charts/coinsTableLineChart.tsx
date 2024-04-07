import { options, pricesData } from "@/app/lib/btcCharts-options-data";
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

  //duration should be props

  // labels should be props
  const labels = data.map((el, index) => {
    return index % 3 === 0 && "";
  });

  // prices should be props
  //   const prices = data.map((el, index) => {
  //     return index % 2 === 0 && el;
  //   });

  //useEffect here to fetch data based on duration prop

  return (
    <div className={`${bg} w-[120px]`}>
      <Line options={options} data={pricesData(labels, data)} />
    </div>
  );
};

export default CoinsTableLineChart;
