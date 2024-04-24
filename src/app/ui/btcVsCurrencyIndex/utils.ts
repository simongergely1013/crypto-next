export const setBtcVsCurrencyURL = (currency: string) => {
  return `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`;
};
