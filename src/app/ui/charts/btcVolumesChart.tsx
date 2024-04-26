import { btcChartsData, coinsTableData } from "@/app/lib/placerholder-data";
import { options, volumesData } from "@/app/lib/btcCharts-options-data";
import { setStyles } from "./bigCharts.styles";
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

interface VolumeChartProps {
  coinName: string;
}

const BtcVolumesChart = ({ coinName }: VolumeChartProps) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { currency } = useAppSelector((state) => state.currency);
  const styles = setStyles(isDark);
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
    style: "currency",
    currency,
  });

  let currentDate: any = new Date();
  currentDate = currentDate.toDateString();
  const totalVolume: any = coinsTableData.find(
    (el) => el.id === coinName.toLowerCase()
  )?.total_volume;

  const labels: string[] = [];
  const volumes: number[] = [];

  //duration should be props

  // labels should be props
  for (let i = 0; i < btcChartsData.total_volumes.length; i++) {
    if (i % 10 === 0) {
      labels.push("");
    }
  }
  // volumes should be props
  for (let i = 0; i < btcChartsData.total_volumes.length; i++) {
    if (i % 10 === 0) {
      volumes.push(btcChartsData.total_volumes[i][1]);
    }
  }

  //useEffect here to fetch data based on duration prop

  return (
    <div className={`${styles.wrapper} ${styles.bg}`}>
      <div className={`${styles.infoContainer} ${styles.textSecondary}`}>
        <div className={`${styles.coinName} ${styles.textSecondary}`}>
          <span>24h Volume</span>
        </div>
        <div className={`${styles.price} ${styles.textPrimary}`}>
          {formatter.format(totalVolume)}
        </div>
      </div>
      <div className={`${styles.date} ${styles.textSecondary}`}>
        {currentDate}
      </div>
      <div className={styles.chart}>
        <Bar options={options} data={volumesData(labels, volumes)} />
      </div>
    </div>
  );
};

export default BtcVolumesChart;
