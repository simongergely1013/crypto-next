export const setSlideNameColor = (
  symbol: string,
  isDark: boolean,
  currentCoin: string
) => {
  if (!isDark && currentCoin != symbol) {
    return "text-[#181825]";
  } else {
    return "text-white";
  }
};
