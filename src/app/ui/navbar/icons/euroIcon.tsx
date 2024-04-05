import { AiFillEuroCircle } from "react-icons/ai";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";

const EuroIcon = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <AiFillEuroCircle
      className="w-[20px] h-[20px]"
      fill={isDark ? "white" : "#424286"}
    />
  );
};

export default EuroIcon;
