"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  setCurrencySell,
  setCurrencyBuy,
  setSellAmount,
  setBuyAmount,
} from "../lib/features/app/convertorSlice";
import { setCurrencyId } from "../ui/btcVsCurrencyIndex/utils";
import { setStyles } from "./styles";
import Link from "next/link";
import CurrencyIcon from "../ui/currencyIcons/currencyIcon";
import ConversionButton from "../ui/buttons/conversionButton/conversionButton";
import ConvertorChartDurationChanger from "../ui/buttons/convertorChartDurationChanger/convertorChartDurationChanger";
import BtcVsCurrencySellIndex from "../ui/btcVsCurrencyIndex/btcVsCurrencySellIndex";
import BtcVsCurrencyBuyIndex from "../ui/btcVsCurrencyIndex/btcVsCurrencyBuyIndex";
import ConvertorChart from "../ui/charts/convertorChart";

export default function Page() {
  const { isDark } = useAppSelector((state) => state.theme);
  const {
    currencySell,
    currencyBuy,
    sellAmount,
    buyAmount,
    currencyBuyVsCurrencySell,
  } = useAppSelector((state) => state.convertor);
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

  const handleSellAmountChange = (e: any) => {
    const newAmount = e.target.value;
    dispatch(setSellAmount(newAmount));
  };

  const handleBuyAmountChange = (e: any) => {
    const newAmount = e.target.value;
    dispatch(setBuyAmount(newAmount));
  };

  const handleConversionButtonClick = () => {
    if (sellAmount === "" && buyAmount === "") {
      return;
    } else if (sellAmount !== "" && buyAmount === "") {
      const conversionResult = Number(sellAmount) / currencyBuyVsCurrencySell;
      dispatch(setBuyAmount(conversionResult));
    } else if (sellAmount === "" && buyAmount !== "") {
      const conversionResult = Number(buyAmount) * currencyBuyVsCurrencySell;
      dispatch(setSellAmount(conversionResult));
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
        <ConversionButton onClick={handleConversionButtonClick} />
        <div className={`${styles.convertorContainer} ${styles.bgColor}`}>
          <h5 className={`${styles.secondaryText} ${styles.convertorHeader}`}>
            You sell
          </h5>
          <div className={styles.inputsContainer}>
            <div className={styles.currencyIcon}>
              <CurrencyIcon currency={currencySell} />
            </div>
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
              onChange={handleSellAmountChange}
              value={sellAmount}
            />
          </div>
          <BtcVsCurrencySellIndex
            currency={currencySell}
            currencyId={setCurrencyId(currencyBuy)}
          />
        </div>
        <div className={`${styles.convertorContainer} ${styles.bgColor}`}>
          <h5 className={`${styles.secondaryText} ${styles.convertorHeader}`}>
            You buy
          </h5>
          <div className={styles.inputsContainer}>
            <div className={styles.currencyIcon}>
              <CurrencyIcon currency={currencyBuy} />
            </div>
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
              onChange={handleBuyAmountChange}
              value={buyAmount}
            />
          </div>
          <BtcVsCurrencyBuyIndex
            currency={currencyBuy}
            currencyId={setCurrencyId(currencySell)}
          />
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <ConvertorChart />
        <ConvertorChartDurationChanger />
      </div>
    </main>
  );
}
