import React from "react";
import { styles } from "./coinSliderChevronRight.styles";

interface ChevronProps {
  onClick: () => void;
}

const CoinSliderChevronRight = ({ onClick }: ChevronProps) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default CoinSliderChevronRight;
