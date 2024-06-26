import { setStyles } from "../styles";
const styles = setStyles();

export const setCoinSlideColors = (
  symbol: string,
  isDark: boolean,
  currentCoin: string
) => {
  if (isDark && currentCoin === symbol) {
    return styles.active;
  } else if (isDark && currentCoin !== symbol) {
    return styles.inactiveDark;
  } else if (!isDark && currentCoin === symbol) {
    return styles.active;
  } else if (!isDark && currentCoin !== symbol) {
    return styles.inactiveLight;
  } else {
    return;
  }
};
