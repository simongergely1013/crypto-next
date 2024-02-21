'use client';
import { useState } from "react";
import { coinsTableData } from "./lib/placerholder-data";
import Link from "next/link";
import CoinSlide from "./ui/navbar/coinSlide";

const styles = {
  main: 'flex min-h-screen flex-col px-20 py-6 border',
  button: 'w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded',
  active: 'bg-[#6161de] border border-opacity-60 border-[#7878FF]',
  inactive: 'bg-[#232337]',
  linkContainer: "flex mb-20",
  coinsSlider: 'flex gap-2',
}

export default function Home() {
  const [currentCoin, setCurrentCoin] = useState("btc");

  const btc = coinsTableData[0];
  const eth = coinsTableData[1];
  const teth = coinsTableData[2];
  const binanceCoin = coinsTableData[3];
  const solana = coinsTableData[4];

  return (
    <main className={styles.main}>
      <div className={styles.linkContainer}>
      <Link href={"/"} className={`${styles.button} ${styles.active}`}>Coins</Link>
              <Link href={"/convertor"} className={styles.button}>Convertor</Link>
      </div>
      <div className={styles.coinsSlider}>
        <CoinSlide name={btc.name} symbol={btc.symbol} src={btc.image} currentPrice={btc.current_price} priceChangePercentage={btc.price_change_percentage_24h} onClick={() => setCurrentCoin(btc.symbol)} bg={currentCoin === btc.symbol ? styles.active : styles.inactive}/>
        <CoinSlide name={eth.name} symbol={eth.symbol} src={eth.image} currentPrice={eth.current_price} priceChangePercentage={eth.price_change_percentage_24h} onClick={() => setCurrentCoin(eth.symbol)} bg={currentCoin === eth.symbol ? styles.active : styles.inactive}/>
        <CoinSlide name={teth.name} symbol={teth.symbol} src={teth.image} currentPrice={teth.current_price} priceChangePercentage={teth.price_change_percentage_24h} onClick={() => setCurrentCoin(teth.symbol)} bg={currentCoin === teth.symbol ? styles.active : styles.inactive}/>
        <CoinSlide name={binanceCoin.name} symbol={binanceCoin.symbol} src={binanceCoin.image} currentPrice={binanceCoin.current_price} priceChangePercentage={binanceCoin.price_change_percentage_24h} onClick={() => setCurrentCoin(binanceCoin.symbol)} bg={currentCoin === binanceCoin.symbol ? styles.active : styles.inactive}/>
        <CoinSlide name={solana.name} symbol={solana.symbol} src={solana.image} currentPrice={solana.current_price} priceChangePercentage={solana.price_change_percentage_24h} onClick={() => setCurrentCoin(solana.symbol)} bg={currentCoin === solana.symbol ? styles.active : styles.inactive}/>
      </div>
    </main>
  )
}
