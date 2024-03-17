"use client";
import React, {useState} from "react";
import { coinsTableData } from "@/app/lib/placerholder-data";
import { CoinsTableData } from "@/app/lib/definitions";
import { useAppSelector } from "@/app/lib/hooks";
import SearcIcon from "../icons/searchIcon";
import Link from "next/link";

const styles = {
    main: "relative w-[356px] h-[48px]",
    input: "w-full h-full text-sm rounded-xl pl-10 pr-4 py-2",
    searchIcon: "absolute left-3 top-3.5",
    searchDropdown: "absolute top-14 z-10 flex flex-col w-[356px] bg-[#1F1934] text-sm text-white pl-4 py-2 border-l border-r border-b rounded-b border-slate-700"
};

const Search = () => {
    const {isDark} = useAppSelector((state) => state.theme);
    const [value, setValue] = useState("");
    const [searchList, setSearchList] = useState<CoinsTableData[]>([]);

    const inputColors = isDark ? "bg-dark-navTopBg text-dark-textSecondary border border-slate-700" : "bg-slate-200 text-slate-700";

    const handleSearch = (value: string) => {
        const searchValue = value.toLowerCase();
        setValue(value);
        const list: CoinsTableData[] = coinsTableData.filter(el => el.name.toLowerCase().includes(searchValue));
        setSearchList([...list]);
    };

    return(
        <>
        <div className={styles.main}>
            <div className={styles.searchIcon}><SearcIcon/></div>
            <input className={`${styles.input} ${inputColors}`} placeholder="Search coin..." value={value} onChange={(e) => handleSearch(e.target.value)}/>
            {value !== "" && <div className={styles.searchDropdown}>
                {searchList.map(el => <Link key={el.id} href={`/coin/${el.id}`} className="mb-1 hover:text-[#D878FA] ease-in-out" onClick={() => setValue("")}>{el.name}</Link>)}
                </div>}
            </div>
            </>
    );
};

export default Search;