"use client";
import { useAppSelector } from "../lib/hooks";
import Link from "next/link";

const styles = {
  main: "flex min-h-screen flex-col px-20 py-6 border",
  button:
    "w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded",
  active: "bg-[#6161de] border border-opacity-60 border-[#7878FF] text-white",
};

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
