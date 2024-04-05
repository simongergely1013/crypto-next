"use client";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setDuration } from "@/app/lib/features/app/btcChartDurationSlice";
import React from "react";

const styles = {
  button:
    "w-[56px] h-[34px] text-sm rounded-md transition-bg ease-in-out duration-300",
};

const BtcChartsDurationChanger = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { duration } = useAppSelector((state) => state.btcChartDuration);
  const dispatch = useAppDispatch();
  const bg: string = isDark ? "bg-[#232336]" : "bg-[#E4E5F9]";

  const setButtonColors = (text: string) => {
    if (isDark && duration === text) {
      return "bg-[#6161D680] text-white";
    } else if (!isDark && duration === text) {
      return "bg-[#6161D680] text-black";
    } else if (isDark) {
      return "text-[#A7A7CC]";
    } else {
      return "text-[#424286]";
    }
  };

  const handleDurationChange = (value: string) => {
    dispatch(setDuration(value));
  };

  return (
    <div className={`w-[392px] ${bg} flex my-12`}>
      <button
        className={`${styles.button} ${setButtonColors("1D")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1D
      </button>
      <button
        className={`${styles.button} ${setButtonColors("7D")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        7D
      </button>
      <button
        className={` ${styles.button} ${setButtonColors("14D")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        14D
      </button>
      <button
        className={`${styles.button} ${setButtonColors("1M")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1M
      </button>
      <button
        className={`${styles.button} ${setButtonColors("3M")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        3M
      </button>
      <button
        className={`${styles.button} ${setButtonColors("1Y")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        1Y
      </button>
      <button
        className={`${styles.button} ${setButtonColors("5Y")}`}
        onClick={(e: any) => handleDurationChange(e.target.innerHTML)}
      >
        5Y
      </button>
    </div>
  );
};

export default BtcChartsDurationChanger;
