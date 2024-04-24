import { useAppSelector } from "@/app/lib/hooks";
import React from "react";
import { setStyles } from "./conversionButton.styles";

const ConversionButton = ({ onClick }: any) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const styles = setStyles(isDark);
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.circle} ${styles.bg}`} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={styles.iconStroke}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ConversionButton;
