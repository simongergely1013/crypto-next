"use client";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setCurrency } from "@/app/lib/features/app/currencySlice";
import SetCurrencyIcon from "@/app/ui/currencyIcons/setCurrencyIcon";
import { setStyles } from "./currencyChange.styles";
import React from "react";

const CurrencyChange = () => {
  const { currency } = useAppSelector((state) => state.currency);
  const { isDark } = useAppSelector((state) => state.theme);
  const styles = setStyles(isDark);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const newCurrency = e.target.value;
    dispatch(setCurrency(newCurrency));
  };

  return (
    <div className={`${styles.main} ${styles.bgColor}`}>
      <div className={styles.currencyIcon}>
        <SetCurrencyIcon currency={currency} />
      </div>
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
