export const setURL = (
  currency: string,
  currencyId: string,
  duration: string
) => {
  return `https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart?vs_currency=${currency}&days=${duration}`;
};

export const setDuration = (duration: string) => {
  switch (duration) {
    case "1D":
      return "1";
    case "7D":
      return "7";
    case "14D":
      return "14";
    case "1M":
      return "30";
    case "3M":
      return "90";
    case "1Y":
      return "365";
    default:
      return "1";
  }
};
