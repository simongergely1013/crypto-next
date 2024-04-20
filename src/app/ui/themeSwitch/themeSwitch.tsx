import { useAppSelector } from "@/app/lib/hooks";
import { styles } from "./themeSwitch.styles";
import React from "react";
import ThemeIcon from "../icons/themeIcon";

interface ThemeSwitchProps {
  onClick: () => void;
}

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
