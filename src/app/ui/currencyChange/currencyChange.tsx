"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { styles } from "./currencyChange.styles";
import { setCurrency } from "@/app/lib/features/app/currencySlice";
import UsdIcon from "../icons/usdIcon";
import EuroIcon from "../icons/euroIcon";
import GbpIcon from "../icons/gbpIcon";
import BtcIcon from "../icons/btcIcon";
import EthIcon from "../icons/ethIcon";

const CurrencyChange = () => {
  const { currency } = useAppSelector((state) => state.currency);
  const { isDark } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const bgColor = isDark
    ? "bg-dark-navTopBg border border-slate-700"
    : "bg-slate-200";
  const textColor = isDark
    ? "text-dark-textPrimary"
    : "text-light-textSecondary";

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
    <div className={`${styles.main} ${bgColor}`}>
      <div className={styles.currencyIcon}>{setIcon(currency)}</div>
      <select
        className={`${styles.select} ${textColor} ${bgColor}`}
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
