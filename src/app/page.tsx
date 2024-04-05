"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "./lib/hooks";
import { coinsTableData } from "./lib/placerholder-data";
import { BarLoader } from "react-spinners";
import { styles } from "./styles";
import Link from "next/link";
import CoinSlide from "./ui/coinSlide/coinSlide";
import CoinSliderChevronLeft from "./ui/buttons/coinSliderChevronLeft/coinSliderChevronLeft";
import CoinSliderChevronRight from "./ui/buttons/coinSliderChevronRight/coinSliderChevronRight";
import BtcPricesChart from "./ui/charts/btcPricesChart";
import BtcVolumesChart from "./ui/charts/btcVolumesChart";
import BtcChartsDurationChanger from "./ui/buttons/btcChartsDurationChanger/btcChartsDurationChanger";
import CoinsTable from "./ui/coinsTable/coinsTable";

interface Slide {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function Home() {
  const { isDark } = useAppSelector((state) => state.theme);
  // const { duration } = useAppSelector((state) => state.btcChartDuration);
  const [currentCoin, setCurrentCoin] = useState<string>("btc");
  const [currentCoins, setCurrentCoins] = useState<Slide[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const mainBg: string = isDark ? "bg-dark-primaryBg" : "bg-slate-200";
  const buttonColors: string = isDark
    ? "bg-[#232337] text-dark-textPrimary"
    : "bg-white text-light-textSecondary";

  const setCoinSlideColors = (symbol: string) => {
    if (isDark && currentCoin == symbol) {
      return styles.active;
    } else if (isDark && currentCoin != symbol) {
      return styles.inactiveDark;
    } else if (!isDark && currentCoin == symbol) {
      return styles.active;
    } else if (!isDark && currentCoin != symbol) {
      return styles.inactiveLight;
    } else {
      return;
    }
  };

  const setSlideNameColor = (symbol: string) => {
    if (!isDark && currentCoin != symbol) {
      return "text-[#181825]";
    } else {
      return "text-white";
    }
  };

  const setSlidePriceColor = (symbol: string) => {
    if (isDark) {
      return "text-dark-textSecondary";
    } else if (!isDark && currentCoin != symbol) {
      return "text-light-textSecondary";
    } else if (!isDark && currentCoin == symbol) {
      return "text-white";
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const updateCurrentCoins = [];
    for (let i = index; i < index + 5; i++) {
      updateCurrentCoins.push(coinsTableData[i]);
    }
    setCurrentCoins([...updateCurrentCoins]);
    setIsLoading(false);
  }, [index]);

  return (
    <main className={`${styles.main} ${mainBg}`}>
      <div className={styles.linkContainer}>
        <Link
          href={"/"}
          className={`${styles.button} ${styles.active} text-white`}
        >
          Coins
        </Link>
        <Link
          href={"/convertor"}
          className={`${styles.button} ${buttonColors}`}
        >
          Convertor
        </Link>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <BarLoader width={800} height={6} color="#36d7b7" />
        </div>
      ) : (
        <div className={styles.coinsSlider}>
          {index > 4 && (
            <CoinSliderChevronLeft onClick={() => setIndex(index - 5)} />
          )}
          {currentCoins.map((el: Slide) => (
            <CoinSlide
              key={el.name}
              name={el.name}
              symbol={el.symbol}
              src={el.image}
              currentPrice={el.current_price}
              priceChangePercentage={el.price_change_percentage_24h}
              onClick={() => setCurrentCoin(el.symbol)}
              bg={setCoinSlideColors(el.symbol)}
              nameColor={setSlideNameColor(el.symbol)}
              priceColor={setSlidePriceColor(el.symbol)}
            />
          ))}
          <CoinSliderChevronRight onClick={() => setIndex(index + 5)} />
        </div>
      )}
      <div className={styles.chartsWrapper}>
        <div>
          <div className={styles.chartsContainer}>
            <BtcPricesChart />
            <BtcVolumesChart />
          </div>
          <BtcChartsDurationChanger />
        </div>
      </div>
      <div className="border">
        <CoinsTable />
      </div>
    </main>
  );
}
