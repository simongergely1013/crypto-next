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

export const pricesData = (
  labels: (number | string | boolean | undefined)[],
  data: (number | boolean | undefined)[]
) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: data,
        borderColor: "#7878FA",
        //here is the part for the gradient fill
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
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
};

export const volumesData = (labels: string[], data: number[]) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: data,
        borderColor: "#7878FA",
        //here is the part for the gradient fill
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "#D878FA");
          gradient.addColorStop(1, "#B374F203");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 1,
        borderRadius: 5,
        fill: true,
      },
    ],
  };
};
