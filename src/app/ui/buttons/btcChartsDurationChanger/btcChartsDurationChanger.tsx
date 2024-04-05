"use client";
import { styles } from "./btcChartsDurationChanger.styles";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setDuration } from "@/app/lib/features/app/btcChartDurationSlice";
import { setButtonColors } from "./setButtonColors";
import React from "react";

const BtcChartsDurationChanger = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { duration } = useAppSelector((state) => state.btcChartDuration);
  const dispatch = useAppDispatch();
  const bg: string = isDark ? "bg-[#232336]" : "bg-[#E4E5F9]";

  const handleDurationChange = (value: string) => {
    dispatch(setDuration(value));
  };

  return (
    <div className={`w-[392px] ${bg} flex my-12`}>
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

export default BtcChartsDurationChanger;
