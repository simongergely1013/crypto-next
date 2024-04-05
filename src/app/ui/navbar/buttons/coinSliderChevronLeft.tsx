import React from "react";

interface ChevronProps {
  onClick: () => void;
}

const styles = {
  main: "absolute z-10 -left-8 flex justify-center items-center w-10 h-10 rounded-full bg-[#6161D680] cursor-pointer hover:scale-110 duration-300",
};

const CoinSliderChevronLeft = ({ onClick }: ChevronProps) => {
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
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default CoinSliderChevronLeft;
