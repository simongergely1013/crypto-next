export const setURL = (currency: string, currencyId: string) => {
  return `https://api.coingecko.com/api/v3/simple/price?ids=${currencyId}&vs_currencies=${currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`;
};

export const setCurrencyId = (currency: string) => {
  switch (currency) {
    case "btc":
      return "bitcoin";
    case "eth":
      return "ethereum";
    case "usd":
      return "tether";
    case "eur":
      return "tether-eurt";
    case "gbp":
      return "poundtoken";
    default:
      return "bitcoin";
  }
};
