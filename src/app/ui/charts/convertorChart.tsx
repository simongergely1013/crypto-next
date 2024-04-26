import { options } from "@/app/lib/btcCharts-options-data";
import { useAppSelector } from "@/app/lib/hooks";
import { setStyles } from "./convertorChart.styles";
import React, { useEffect, useState } from "react";
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
import { setURL, setDuration } from "./utils";
import { setCurrencyId } from "../btcVsCurrencyIndex/utils";
import { fetchOptions } from "@/app/lib/fetchOptions";
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

const ConvertorChart = () => {
  const [chartData, setChartData] = useState<any>(null);
  const { isDark } = useAppSelector((state) => state.theme);
  const { currencySell, currencyBuy, duration } = useAppSelector(
    (state) => state.convertor
  );
  const styles = setStyles(isDark);

  const data = {
    labels: chartData?.prices.map(() => ""),
    datasets: [
      {
        label: "First dataset",
        data: chartData?.prices.map((el: any[]) => el[1]),
        borderColor: "#7878FA",
        //here is the part for the gradient fill
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 550);
          gradient.addColorStop(0, "#7474F299");
          gradient.addColorStop(1, "#7474F203");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  useEffect(() => {
    const currencyId = setCurrencyId(currencyBuy);
    const chartDuration = setDuration(duration);
    const url = setURL(currencySell, currencyId, chartDuration);

    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((json) => setChartData(json))
      // eslint-disable-next-line
      .catch((err) => console.error("error:" + err));
  }, [currencySell, currencyBuy, duration]);

  return (
    <div className={`${styles.bg} ${styles.wrapper}`}>
      <div className={styles.title}>
        <span className={styles.span}>{currencySell.toUpperCase()}</span>
        <span className={styles.to}>to</span>
        <span className={styles.span}>{currencyBuy.toUpperCase()}</span>
      </div>
      {chartData && (
        <div className={styles.chartContainer}>
          <Line options={options} data={data} />
        </div>
      )}
    </div>
  );
};

export default ConvertorChart;
