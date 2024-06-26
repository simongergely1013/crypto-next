"use client";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/app/lib/hooks";
import React from "react";

const PortfolioIcon = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const pathname = usePathname();
  const isActive = pathname === "/portfolio";

  const setFillColor = () => {
    if (isDark && isActive) {
      return "white";
    } else if (isDark && !isActive) {
      return "slate-400";
    } else if (!isDark && isActive) {
      return "#353570";
    } else if (!isDark && !isActive) {
      return "gray";
    }
  };

  return (
    <svg
      className="transition-all ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={setFillColor()}
    >
      <path
        d="M21.5 12L12.5 18L3.5 12M21.5 16L12.5 22L3.5 16M21.5 8L12.5 14L3.5 8L12.5 2L21.5 8Z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PortfolioIcon;
