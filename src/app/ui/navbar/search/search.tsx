'use client';
import React, {useState} from "react";
import SearcIcon from "../icons/searchIcon";

const styles = {
    main: 'relative w-[356px] h-[48px]',
    input: 'w-full h-full bg-[#1F1934] text-[#D1D1D1] text-sm border border-slate-700 rounded pl-10 pr-4 py-2',
    searchIcon: 'absolute left-3 top-3.5'
}

const Search = () => {
    const [value, setValue] = useState('');
    return(
        <div className={styles.main}>
            <div className={styles.searchIcon}><SearcIcon/></div>
            <input className={styles.input} placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)}/></div>
    )
};

export default Search;