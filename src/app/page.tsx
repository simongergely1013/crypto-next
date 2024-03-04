'use client';
import { useEffect, useState } from "react";
import { coinsTableData } from "./lib/placerholder-data";
import Link from "next/link";
import CoinSlide from "./ui/navbar/coinSlide";
import CoinSliderChevronLeft from "./ui/navbar/buttons/coinSliderChevronLeft";
import CoinSliderChevronRight from "./ui/navbar/buttons/coinSliderChevronRight";

const styles = {
  main: 'flex min-h-screen flex-col px-20 py-6 border',
  button: 'w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded',
  active: 'bg-[#6161de] border border-opacity-60 border-[#7878FF]',
  inactive: 'bg-[#232337]',
  linkContainer: "flex mb-20",
  coinsSlider: 'relative flex items-center gap-2',
}

interface Slide {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function Home() {
  const [currentCoin, setCurrentCoin] = useState<string>("btc");
  const [currentCoins, setCurrentCoins] = useState<Slide[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const updateCurrentCoins = [];
    for(let i = index; i < index + 5; i++){
      updateCurrentCoins.push(coinsTableData[i]);
    }
    setCurrentCoins([...updateCurrentCoins])
  }, [index])

  return (
    <main className={styles.main}>
      <div className={styles.linkContainer}>
      <Link href={"/"} className={`${styles.button} ${styles.active}`}>Coins</Link>
              <Link href={"/convertor"} className={styles.button}>Convertor</Link>
      </div>
      <div className={styles.coinsSlider}>
        {index > 4 && <CoinSliderChevronLeft onClick={() => setIndex(index - 5)}/>}
       {currentCoins.map((el: Slide) => <CoinSlide key={el.name} name={el.name} symbol={el.symbol} src={el.image} currentPrice={el.current_price} priceChangePercentage={el.price_change_percentage_24h} onClick={() => setCurrentCoin(el.symbol)} bg={currentCoin === el.symbol ? styles.active : styles.inactive}/>)}
        <CoinSliderChevronRight onClick={() => setIndex(index + 5)}/>
      </div>
    </main>
  )
}
