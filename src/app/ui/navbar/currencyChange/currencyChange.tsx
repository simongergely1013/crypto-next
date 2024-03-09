"use client";
import React, {useState} from "react";
import UsdIcon from "../icons/usdIcon";
import EuroIcon from "../icons/euroIcon";
import GbpIcon from "../icons/gbpIcon";
import BtcIcon from "../icons/btcIcon";
import EthIcon from "../icons/ethIcon";

const styles = {
    main: "relative w-[108px] h-[48px] border border-slate-700",
    select: "w-full h-full bg-[#1F1934] pl-9",
    currencyIcon: "absolute left-2.5 top-3.5"
};

const CurrencyChange = () => {
    const [currency, setCurrency] = useState("usd");

    const handleChange = (e: any) => {
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
    };

    const setIcon = (currency: string) => {
        switch(currency){
            case "usd":
                return <UsdIcon/>;
            case "eur":
                return <EuroIcon/>;
            case "gbp":
                return <GbpIcon/>;
            case "btc":
                return <BtcIcon/>;
            case "eth": 
                return <EthIcon/>;
            default:
                return;                    
        }
    };

    return(
        <div className={styles.main}>
            <div className={styles.currencyIcon}>{setIcon(currency)}</div>
            <select className={styles.select} onChange={handleChange}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
            </select>
        </div>
    );
};

export default CurrencyChange;