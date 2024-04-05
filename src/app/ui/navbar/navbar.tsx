"use client";
import { styles } from "./navbar.styles";
import { navBarData, coinsTableData } from "../../lib/placerholder-data";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { toggleTheme } from "@/app/lib/features/app/themeSlice";
import ActiveCoinsIcon from "../icons/activeCoinsIcon";
import ExchangesIcon from "../icons/exchangesIcon";
import GreenTriangle from "../icons/greenTriangle";
import RedTriangle from "../icons/redTriangle";
import ProgessBarSmall from "../progressBarSmall/progressBarSmall";
import AppLogo from "../icons/appLogo";
import HomeIcon from "../icons/homeIcon";
import PortfolioIcon from "../icons/portfolioIcon";
import Search from "../search/search";
import CurrencyChange from "../currencyChange/currencyChange";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import Link from "next/link";

export default function NavBar({ changeTheme }: any) {
  const { isDark } = useAppSelector((state) => state.theme);
  const topTheme = isDark
    ? "bg-dark-navTopBg text-dark-textSecondary"
    : "bg-light-navTopBg text-white";
  const appName = isDark ? "text-dark-textPrimary" : "text-light-navTopBg";
  const bottom = isDark ? "bg-dark-primaryBg" : "bg-light-secondaryBg";

  const { data } = navBarData;
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const marketCap = formatter.format(data.total_market_cap.usd);
  const totalVolume = formatter.format(data.total_volume.usd);
  const isPositive = data.market_cap_change_percentage_24h_usd >= 0;
  const marketCapPercChng = formatter.format(
    data.market_cap_change_percentage_24h_usd
  );
  const volumeToMktCapPerc = Math.round(
    (data.total_volume.usd / data.total_market_cap.usd) * 100
  );
  const btcDominance = Math.round(data.market_cap_percentage.btc);
  const ethDominance = Math.round(data.market_cap_percentage.eth);
  const pathname = usePathname();
  const isHome: boolean = pathname === "/" || pathname === "/convertor";
  const isPortfolio: boolean = pathname === "/portfolio";

  const setHomeTextColor = () => {
    if (isDark && isHome) {
      return "text-white";
    } else if (isDark && !isHome) {
      return "text-white/50";
    } else if (!isDark && isHome) {
      return "text-light-navTopBg";
    } else if (!isDark && !isHome) {
      return "text-slate-400";
    }
  };

  const setPortfolioTextColor = () => {
    if (isDark && isPortfolio) {
      return "text-white";
    } else if (isDark && !isPortfolio) {
      return "text-white/50";
    } else if (!isDark && isPortfolio) {
      return "text-light-navTopBg";
    } else if (!isDark && !isPortfolio) {
      return "text-slate-400";
    }
  };

  const dispatch = useAppDispatch();

  const handleThemeSwitch = () => {
    dispatch(toggleTheme(!isDark));
    changeTheme(!isDark);
  };

  return (
    <div>
      <div className={`${styles.top} ${topTheme}`}>
        <div className={styles.flex}>
          <ActiveCoinsIcon />
          Coins:<span>{data.active_cryptocurrencies}</span>
        </div>
        <div className={styles.flex}>
          <ExchangesIcon /> Exchanges:<span>{data.markets}</span>
        </div>
        <div className={"flex items-center"}>
          Market Cap:<span className="ml-1">$ {marketCap}</span>
          {isPositive ? <GreenTriangle /> : <RedTriangle />}
          <span className={`${isPositive ? "text-green" : "text-red"}`}>
            {marketCapPercChng}%
          </span>
        </div>
        <div className={styles.flex}>
          24h Volume:<span>$ {totalVolume}</span>
          <ProgessBarSmall
            className={`${styles.progressBar}] bg-[#FFFFFF]`}
            width={`${volumeToMktCapPerc}%`}
          />
        </div>
        <div className={styles.flex}>
          <img
            src={coinsTableData[0].image}
            alt="btc-logo"
            width={24}
            height={24}
          />
          <span>{btcDominance}%</span>
          <ProgessBarSmall
            className={`${styles.progressBar} bg-progressBarBtc`}
            width={`${btcDominance}%`}
          />
        </div>
        <div className={styles.flex}>
          <img
            src={coinsTableData[1].image}
            alt="eth-logo"
            width={24}
            height={24}
          />
          <span>{ethDominance}%</span>
          <ProgessBarSmall
            className={`${styles.progressBar} bg-progressBarEth`}
            width={`${ethDominance}%`}
          />
        </div>
      </div>
      <div className={`${styles.bottom} ${bottom}`}>
        <div className={styles.bottomLeft}>
          <div className="w-1/2">
            <div className={styles.logoContainer}>
              <AppLogo />
              <span className={`${styles.appName} ${appName}`}>
                CryptoSphere
              </span>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className={styles.width}>
              <Link href={"/"} className={styles.link}>
                <HomeIcon />
                <span className={`${setHomeTextColor()} ${styles.transition}`}>
                  Home
                </span>
              </Link>
            </div>
            <div className={styles.width}>
              <Link href={"/portfolio"} className={styles.link}>
                <PortfolioIcon />
                <span
                  className={`${setPortfolioTextColor()} ${styles.transition}`}
                >
                  Portfolio
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div>
            <Search />
          </div>
          <div>
            <CurrencyChange />
          </div>
          <div>
            <ThemeSwitch onClick={handleThemeSwitch} />
          </div>
        </div>
      </div>
    </div>
  );
}
