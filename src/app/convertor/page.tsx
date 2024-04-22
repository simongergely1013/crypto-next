"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  setCurrencySell,
  setCurrencyBuy,
} from "../lib/features/app/convertorSlice";
import { setStyles } from "./styles";
import Link from "next/link";
import UsdIcon from "../ui/icons/usdIcon";
import EuroIcon from "../ui/icons/euroIcon";
import BtcIcon from "../ui/icons/btcIcon";
import EthIcon from "../ui/icons/ethIcon";
import GbpIcon from "../ui/icons/gbpIcon";
import ConversionButton from "../ui/buttons/conversionButton/conversionButton";

export default function Page() {
  const { isDark } = useAppSelector((state) => state.theme);
  const { currencySell, currencyBuy } = useAppSelector(
    (state) => state.convertor
  );
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentLocalTime, setCurrentLocalTime] = useState<string>("");
  const styles = setStyles(isDark);
  const dispatch = useAppDispatch();

  const handleSellChange = (e: any) => {
    const newCurrency = e.target.value;
    dispatch(setCurrencySell(newCurrency));
  };

  const handleBuyChange = (e: any) => {
    const newCurrency = e.target.value;
    dispatch(setCurrencyBuy(newCurrency));
  };

  const setIcon = (currency: string) => {
    switch (currency) {
      case "usd":
        return <UsdIcon />;
      case "eur":
        return <EuroIcon />;
      case "gbp":
        return <GbpIcon />;
      case "btc":
        return <BtcIcon />;
      case "eth":
        return <EthIcon />;
      default:
        return;
    }
  };

  useEffect(() => {
    const date: Date | string = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    setCurrentDate(dateString);
    setCurrentLocalTime(timeString);
  }, []);

  return (
    <main className={`${styles.main} ${styles.mainBg}`}>
      <div className={styles.linksContainer}>
        <Link href={"/"} className={`${styles.button} ${styles.buttonColors}`}>
          Coins
        </Link>
        <Link
          href={"/convertor"}
          className={`${styles.button} ${styles.active}`}
        >
          Convertor
        </Link>
      </div>
      <div className={styles.headerContainer}>
        <h3 className={`${styles.primaryText} ${styles.header}`}>
          Online currency convertor
        </h3>
        <p className={`${styles.secondaryText} ${styles.date}`}>
          <span>{currentDate}</span>
          <span>{currentLocalTime}</span>
        </p>
      </div>
      <div className={styles.convertorWrapper}>
        <ConversionButton />
        <div className={`${styles.convertorContainer} ${styles.bgColor}`}>
          <h5 className={`${styles.secondaryText} ${styles.convertorHeader}`}>
            You sell
          </h5>
          <div className={styles.inputsContainer}>
            <div className={styles.currencyIcon}>{setIcon(currencySell)}</div>
            <select
              className={`${styles.select} ${styles.bgColor} ${styles.primaryText}`}
              onChange={handleSellChange}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
            </select>
            <input
              className={`${styles.input} ${styles.bgColor} ${styles.primaryText}`}
              type="number"
              placeholder="Select amount..."
            />
          </div>
          <div>
            <span className={`${styles.secondaryText} ${styles.inputIndexL}`}>
              1 {currencySell.toUpperCase()} =
            </span>
            <span className={`${styles.primaryText} ${styles.inputIndexR}`}>
              {currencyBuy.toUpperCase()} X
            </span>
          </div>
        </div>
        <div className={`${styles.convertorContainer} ${styles.bgColor}`}>
          <h5 className={`${styles.secondaryText} ${styles.convertorHeader}`}>
            You buy
          </h5>
          <div className={styles.inputsContainer}>
            <div className={styles.currencyIcon}>{setIcon(currencyBuy)}</div>
            <select
              className={`${styles.select} ${styles.bgColor} ${styles.primaryText}`}
              onChange={handleBuyChange}
            >
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
            <input
              className={`${styles.input} ${styles.bgColor} ${styles.primaryText}`}
              type="number"
              placeholder="Select amount..."
            />
          </div>
          <div>
            <span className={`${styles.secondaryText} ${styles.inputIndexL}`}>
              1 {currencyBuy.toUpperCase()} =
            </span>
            <span className={`${styles.primaryText} ${styles.inputIndexR}`}>
              {currencySell.toUpperCase()} X
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
