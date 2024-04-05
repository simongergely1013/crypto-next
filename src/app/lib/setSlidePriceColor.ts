export const setSlidePriceColor = (
  symbol: string,
  isDark: boolean,
  currentCoin: string
) => {
  if (isDark) {
    return "text-dark-textSecondary";
  } else if (!isDark && currentCoin != symbol) {
    return "text-light-textSecondary";
  } else if (!isDark && currentCoin == symbol) {
    return "text-white";
  }
};
