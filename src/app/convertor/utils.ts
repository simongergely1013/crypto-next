export const setChartDataURL = (currency: string) => {
  return `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=1`;
};
