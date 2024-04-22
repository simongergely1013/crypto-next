"use client";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setCurrency } from "@/app/lib/features/app/currencySlice";
import { setStyles } from "./currencyChange.styles";
import React from "react";
import UsdIcon from "../icons/usdIcon";
import EuroIcon from "../icons/euroIcon";
import GbpIcon from "../icons/gbpIcon";
import BtcIcon from "../icons/btcIcon";
import EthIcon from "../icons/ethIcon";

const CurrencyChange = () => {
  const { currency } = useAppSelector((state) => state.currency);
  const { isDark } = useAppSelector((state) => state.theme);
  const styles = setStyles(isDark);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const newCurrency = e.target.value;
    dispatch(setCurrency(newCurrency));
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

  return (
    <div className={`${styles.main} ${styles.bgColor}`}>
      <div className={styles.currencyIcon}>{setIcon(currency)}</div>
      <select
        className={`${styles.select} ${styles.textColor} ${styles.bgColor}`}
        onChange={handleChange}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </select>
    </div>
  );
};

export default CurrencyChange;
