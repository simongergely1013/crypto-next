"use client";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setDuration } from "@/app/lib/features/app/convertorSlice";
import { setStyles } from "./convertorChartDurationChanger.styles";
import { setButtonColors } from "../btcChartsDurationChanger/setButtonColors";
import React from "react";

const ConvertorChartDurationChanger = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { duration } = useAppSelector((state) => state.convertor);
  const styles = setStyles(isDark);
  const dispatch = useAppDispatch();

  const handleDurationChange = (value: string) => {
    dispatch(setDuration(value));
  };

  return (
    <div className={`${styles.container} ${styles.bg}`}>
      <button
        className={`${styles.button} ${setButtonColors(
          "1D",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1D
      </button>
      <button
        className={`${styles.button} ${setButtonColors(
          "7D",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        7D
      </button>
      <button
        className={` ${styles.button} ${setButtonColors(
          "14D",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        14D
      </button>
      <button
        className={`${styles.button} ${setButtonColors(
          "1M",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1M
      </button>
      <button
        className={`${styles.button} ${setButtonColors(
          "3M",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        3M
      </button>
      <button
        className={`${styles.button} ${setButtonColors(
          "1Y",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1Y
      </button>
      <button
        className={`${styles.button} ${setButtonColors(
          "5Y",
          duration,
          isDark
        )}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        5Y
      </button>
    </div>
  );
};

export default ConvertorChartDurationChanger;
