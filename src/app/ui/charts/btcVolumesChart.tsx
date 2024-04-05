import { btcChartsData } from "@/app/lib/placerholder-data";
import { options, volumesData } from "@/app/lib/btcCharts-options-data";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BtcVolumesChart = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const bg = isDark ? "bg-[#191832]" : "bg-white";

  //duration should be props

  // labels should be props
  const labels = btcChartsData.total_volumes.map((el, index) => {
    return index % 2 === 0 ? index : "";
  });

  // volumes should be props
  const volumes = btcChartsData.total_volumes.map((el) => el[1]);

  //useEffect here to fetch data based on duration prop

  return (
    <div className={`${bg} w-1/2 p-6 rounded-xl`}>
      <Bar options={options} data={volumesData(labels, volumes)} />
    </div>
  );
};

export default BtcVolumesChart;
