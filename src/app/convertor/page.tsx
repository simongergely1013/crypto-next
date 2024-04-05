"use client";
import { useAppSelector } from "../lib/hooks";
import { styles } from "./styles";
import Link from "next/link";

export default function Page() {
  const { isDark } = useAppSelector((state) => state.theme);
  const mainBg = isDark ? "bg-dark-primaryBg" : "bg-slate-200";
  const buttonColors = isDark
    ? "bg-[#232337] text-dark-textPrimary"
    : "bg-white text-light-textSecondary";

  return (
    <main className={`${styles.main} ${mainBg}`}>
      <div className="flex">
        <Link href={"/"} className={`${styles.button} ${buttonColors}`}>
          Coins
        </Link>
        <Link
          href={"/convertor"}
          className={`${styles.button} ${styles.active}`}
        >
          Convertor
        </Link>
      </div>
    </main>
  );
}
