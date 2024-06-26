import React from "react";
import Image from "next/image";
import GreenTriangle from "../icons/greenTriangle";
import RedTriangle from "../icons/redTriangle";
import { styles } from "./coinSlide.styles";
import { useAppSelector } from "@/app/lib/hooks";

interface Props {
  name: string;
  symbol: string;
  src: string;
  currentPrice: number;
  priceChangePercentage: number;
  bg: string | undefined;
  nameColor: string;
  priceColor: string | undefined;
  onClick: () => void;
}

const CoinSlide = ({
  name,
  symbol,
  src,
  currentPrice,
  priceChangePercentage,
  bg,
  nameColor,
  priceColor,
  onClick,
}: Props) => {
  const { currency } = useAppSelector((state) => state.currency);
  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });
  const isPositive = priceChangePercentage >= 0;

  const loader = () => {
    return src;
  };

  return (
    <div className={`${styles.main} ${bg}`} onClick={onClick}>
      <div className="">
        <Image
          width={32}
          height={32}
          alt="coin-logo"
          loader={loader}
          src={src}
        />
      </div>
      <div className="w-2/3">
        <div className={`${styles.name} ${nameColor}`}>
          <span>{name}</span>
          <span>({symbol.toUpperCase()})</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className={priceColor}>{formatter.format(currentPrice)}</span>
          {isPositive ? <GreenTriangle /> : <RedTriangle />}
          <span className={isPositive ? "text-green" : "text-red"}>
            {priceChangePercentage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinSlide;
