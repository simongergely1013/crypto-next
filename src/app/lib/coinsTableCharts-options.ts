import { useAppSelector } from "./hooks";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        maxRotation: 0,
      },
    },
  },
  tension: 0.5,
};

export const useSparkLineData = (
  labels: (number | string | boolean | undefined)[],
  data: (number | boolean | undefined)[],
  isPositive: boolean
) => {
  const { isDark } = useAppSelector((state) => state.theme);
  return {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: data,
        borderColor: isPositive ? "#30E0A1" : "#FE2264",
        //here is the part for the gradient fill
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            isPositive && isDark
              ? "#18252E"
              : !isPositive && isDark
              ? "#1E1B26"
              : "white"
          );
          gradient.addColorStop(1, "#7474F203");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
};
