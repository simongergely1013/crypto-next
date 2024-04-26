import { coinsTableData } from "@/app/lib/placerholder-data";
import { options, pricesData } from "@/app/lib/btcCharts-options-data";
import { useAppSelector } from "@/app/lib/hooks";
import { setStyles } from "./bigCharts.styles";
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

interface PriceChartProps {
  coinName: string;
  symbol: string;
}

const BtcPricesChart = ({ coinName, symbol }: PriceChartProps) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { currency } = useAppSelector((state) => state.currency);
  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });
  const styles = setStyles(isDark);

  const currentCoinData = coinsTableData.find(
    (el) => el.id === coinName.toLowerCase()
  ) || { sparkline_in_7d: { price: [] } };

  const currentPrice: any = coinsTableData.find(
    (el) => el.id === coinName.toLowerCase()
  )?.current_price;

  let currentDate: any = new Date();
  currentDate = currentDate.toDateString();

  const labels: string[] = [];
  const prices: number[] = [];
  //duration should be props
  // prices should be props
  // labels should be props

  for (let i = 0; i < currentCoinData.sparkline_in_7d.price.length; i++) {
    labels.push("");
  }

  for (let i = 0; i < currentCoinData.sparkline_in_7d.price.length; i++) {
    prices.push(currentCoinData.sparkline_in_7d.price[i]);
  }

  //useEffect here to fetch data based on duration prop
  //https://api.coingecko.com/api/v3/coins/{id}
  return (
    <div className={`${styles.wrapper} ${styles.bg}`}>
      <div className={`${styles.infoContainer} ${styles.textSecondary}`}>
        <div className={`${styles.coinName} ${styles.textSecondary}`}>
          <span>{coinName}</span>
          <span>({symbol.toUpperCase()})</span>
        </div>
        <div className={`${styles.price} ${styles.textPrimary}`}>
          {formatter.format(currentPrice)}
        </div>
      </div>
      <div className={`${styles.date} ${styles.textSecondary}`}>
        {currentDate}
      </div>
      <div className={styles.chart}>
        <Line options={options} data={pricesData(labels, prices)} />
      </div>
    </div>
  );
};

export default BtcPricesChart;
