"use client";
import { useAppSelector } from "../lib/hooks";
import { setStyles } from "./styles";
import Link from "next/link";

export default function Page() {
  const { isDark } = useAppSelector((state) => state.theme);
  const styles = setStyles(isDark);
  let date: Date | string = new Date();
  date = date.toLocaleString();

  return (
    <main className={`${styles.main} ${styles.mainBg}`}>
      <div className="flex mb-10">
        <Link href={"/"} className={`${styles.button} ${styles.buttonColors}`}>
          Coins
        </Link>
        <Link
          href={"/convertor"}
          className={`${styles.button} ${styles.active}`}
        >
          Convertor
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={`${styles.primaryText} text-xl`}>
          Online currency convertor
        </h3>
        <h3 className={`${styles.secondaryText} text-base`}>{date}</h3>
      </div>
    </main>
  );
}
