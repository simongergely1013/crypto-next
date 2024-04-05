import { btcChartsData } from "@/app/lib/placerholder-data";
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

const BtcPricesChart = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const bg = isDark ? "bg-[#191832]" : "bg-white";

  //duration should be props

  // labels should be props
  const labels = btcChartsData.prices.map((el, index) => {
    return index % 2 === 0 ? index : "";
  });

  // prices should be props
  const prices = btcChartsData.prices.map((el) => el[1]);

  //useEffect here to fetch data based on duration prop

  return (
    <div className={`${bg} w-1/2 p-6 rounded-xl`}>
      <Line options={options} data={pricesData(labels, prices)} />
    </div>
  );
};

export default BtcPricesChart;
