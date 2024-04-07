import React from "react";
import { styles } from "./progressBarCoinsTable.styles";
import { useAppSelector } from "@/app/lib/hooks";

interface ProgressBarProps {
  width: string;
  data1: string;
  data2: string;
  is24hPositive: boolean;
}

const ProgessBarCoinsTable = ({
  width,
  data1,
  data2,
  is24hPositive,
}: ProgressBarProps) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const outerBg =
    isDark && is24hPositive
      ? "bg-[#01F1E3]/50"
      : isDark && !is24hPositive
      ? "bg-[#FE2264]/50"
      : !isDark && is24hPositive
      ? "bg-[#4DEEE580]/50"
      : !isDark && !is24hPositive
      ? "bg-[#FE2264]/50"
      : "";

  const innerBg =
    isDark && is24hPositive
      ? "bg-[#01F1E3]"
      : isDark && !is24hPositive
      ? "bg-[#FE2264]"
      : !isDark && is24hPositive
      ? "bg-[#00B1A7]"
      : !isDark && !is24hPositive
      ? "bg-[#FE2264]"
      : "";

  const volumeTextColor =
    isDark && is24hPositive
      ? "text-[#01F1E3]"
      : isDark && !is24hPositive
      ? "text-[#FE2264]"
      : !isDark && is24hPositive
      ? "text-[#00B1A7]"
      : !isDark && !is24hPositive
      ? "text-[#FE2264]"
      : "";
  const marketCapTextColor = isDark ? "text-white" : "text-[#232336]";

  return (
    <div>
      <div className="flex justify-between items-center text-xs font-normal">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${innerBg}`}></div>
          <span className={volumeTextColor}>{data1}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${outerBg}`}></div>
          <span className={marketCapTextColor}>{data2}</span>
        </div>
      </div>
      <div className={`${styles.outerBar} ${outerBg}`}>
        <div
          className={`${styles.innerBar} ${innerBg}`}
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default ProgessBarCoinsTable;
