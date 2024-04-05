"use client";
import { coinsTableData } from "@/app/lib/placerholder-data";
import { CoinsTableData } from "@/app/lib/definitions";
import { useAppSelector } from "@/app/lib/hooks";
import { styles } from "./search.styles";
import React, { useState } from "react";
import SearcIcon from "../icons/searchIcon";
import Link from "next/link";

const Search = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState<CoinsTableData[]>([]);

  const inputColors = isDark
    ? "bg-dark-navTopBg text-dark-textSecondary border border-slate-700"
    : "bg-slate-200 text-slate-700";

  const handleSearch = (value: string) => {
    const searchValue = value.toLowerCase();
    setValue(value);
    const list: CoinsTableData[] = coinsTableData.filter((el) =>
      el.name.toLowerCase().includes(searchValue)
    );
    setSearchList([...list]);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.searchIcon}>
          <SearcIcon />
        </div>
        <input
          className={`${styles.input} ${inputColors}`}
          placeholder="Search coin..."
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {value !== "" && (
          <div className={styles.searchDropdown}>
            {searchList.map((el) => (
              <Link
                key={el.id}
                href={`/coin/${el.id}`}
                className="mb-1 hover:text-[#D878FA] ease-in-out"
                onClick={() => setValue("")}
              >
                {el.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
