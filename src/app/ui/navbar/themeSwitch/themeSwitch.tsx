import { useAppSelector } from "@/app/lib/hooks";
import React from "react";
import ThemeIcon from "../icons/themeIcon";

interface ThemeSwitchProps {
  onClick: () => void;
}

const styles = {
  main: "w-[48px] h-[48px] flex justify-center items-center bg-[#1F1934] rounded-xl",
};

const ThemeSwitch = ({ onClick }: ThemeSwitchProps) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const bgColor = isDark
    ? "bg-dark-navTopBg border border-slate-700"
    : "bg-slate-200";

  return (
    <div className={`${styles.main} ${bgColor}`}>
      <ThemeIcon onClick={onClick} />
    </div>
  );
};

export default ThemeSwitch;
