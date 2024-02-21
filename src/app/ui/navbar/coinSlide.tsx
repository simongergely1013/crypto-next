import React from "react";
import GreenTriangle from "./icons/greenTriangle";
import RedTriangle from "./icons/redTriangle";

const styles = {
    main: "flex items-center justify-around w-[250px] h-[78px] p-4 bg-opacity-50 transition-bg ease-in-out rounded cursor-pointer",
    img: "w-8 h-8"
}

interface Props {
    name: string;
    symbol: string;
    src: string;
    currentPrice: number;
    priceChangePercentage: number;
    bg: string;
    onClick: () => void;
}

const CoinSlide = ({name, symbol, src, currentPrice, priceChangePercentage, bg, onClick}: Props) => {
    const isPositive = priceChangePercentage >= 0;

    return(
        <div className={`${styles.main} ${bg}`} onClick={onClick}>
            <div className="">
                <img className={styles.img} src={src}/>
            </div>
            <div className="w-2/3">
                <div className="flex gap-1 text-[#FFFFFF] text-base"><span>{name}</span><span>({symbol.toUpperCase()})</span></div>
                <div className="flex items-center gap-1 text-sm">
                    <span className="text-[#D1D1D1]">{currentPrice}</span>
                    {isPositive ? <GreenTriangle/> : <RedTriangle/>}
                    <span className={isPositive ? "text-[#01F1E3]" : "text-[#FE2264]"}>{priceChangePercentage.toFixed(2)}%</span>
                </div>
            </div>
        </div>
    )
}

export default CoinSlide;