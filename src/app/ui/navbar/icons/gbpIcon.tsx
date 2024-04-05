import { PiCurrencyGbpFill } from "react-icons/pi";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";

const GbpIcon = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <PiCurrencyGbpFill
      className="w-[20px] h-[20px]"
      fill={isDark ? "white" : "#424286"}
    />
  );
};

export default GbpIcon;
