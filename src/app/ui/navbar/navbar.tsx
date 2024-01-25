'use client';
import {navBarData, coinsTableData} from '../../lib/placerholder-data';
import { usePathname } from 'next/navigation';
import ActiveCoinsIcon from './icons/activeCoinsIcon';
import ExchangesIcon from './icons/exchangesIcon';
import GreenTriangle from './icons/greenTriangle';
import RedTriangle from './icons/redTriangle';
import ProgessBarSmall from './progressBarSmall/progressBarSmall';
import AppLogo from './icons/appLogo';
import HomeIcon from './icons/homeIcon';
import PortfolioIcon from './icons/portfolioIcon';
import Search from './search/search';
import CurrencyChange from './currencyChange/currencyChange';
import ThemeSwitch from './themeSwitch/themeSwitch';
import Link from 'next/link';

const styles = {
    main:'',
    top: 'flex items-center justify-center gap-10 bg-[#1F1934] text-[#D1D1D1] text-xs py-4 border-b border-slate-900',
    bottom: 'flex items-center gap-2 p-6',
    flex: 'flex items-center gap-1',
    span: 'text-[#FFF]',
    progressBar: 'h-full absolute rounded',
    logoContainer: 'flex items-center gap-2',
    bottomLeft: 'w-1/2 flex',
    linkContainer: 'w-1/2',
    link: 'flex items-center justify-center gap-2'
}

export default function NavBar() {
    const {data} = navBarData;
    const formatter = Intl.NumberFormat('en', {notation: 'compact'})
    const marketCap = formatter.format(data.total_market_cap.usd);
    const totalVolume = formatter.format(data.total_volume.usd);
    const isPositive = data.market_cap_change_percentage_24h_usd >= 0;
    const marketCapPercChng = formatter.format(data.market_cap_change_percentage_24h_usd);
    const volumeToMktCapPerc = Math.round((data.total_volume.usd / data.total_market_cap.usd) * 100);
    const btcDominance = Math.round(data.market_cap_percentage.btc);
    const ethDominance = Math.round(data.market_cap_percentage.eth);
    const pathname = usePathname();

    return(
        <div>
            <div className={styles.top}>
                <div className={styles.flex}><ActiveCoinsIcon/>Coins:<span className={styles.span}>{data.active_cryptocurrencies}</span></div>
                <div className={styles.flex}><ExchangesIcon/> Exchanges:<span className={styles.span}>{data.markets}</span></div>
                <div className={'flex items-center'}>Market Cap:<span className={`${styles.span} ml-1`}>$ {marketCap}</span>{isPositive ? <GreenTriangle/> : <RedTriangle/>}<span className={`${isPositive ? 'text-[#01F1E3]' : 'text-[#FE2264]'}`}>{marketCapPercChng}%</span></div>
                <div className={styles.flex}>24h Volume:<span className={styles.span}>$ {totalVolume}</span><ProgessBarSmall className={`${styles.progressBar}] bg-[#FFFFFF]`} width={`${volumeToMktCapPerc}%`}/></div>
                <div className={styles.flex}><img src={coinsTableData[0].image} alt='btc-logo' width={24} height={24}/><span className={styles.span}>{btcDominance}%</span><ProgessBarSmall className={`${styles.progressBar} bg-[#F7931A]`} width={`${btcDominance}%`}/></div>
                <div className={styles.flex}><img src={coinsTableData[1].image} alt='eth-logo' width={24} height={24}/><span className={styles.span}>{ethDominance}%</span><ProgessBarSmall className={`${styles.progressBar} bg-[#849DFF]`} width={`${ethDominance}%`}/></div>
            </div>
            <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <div className='w-1/2'>
                            <div className={styles.logoContainer}><AppLogo/><span className='text-[21px] font-bold'>CryptoSphere</span></div>
                        </div>
                        <div className='w-1/2 flex'>
                            <div className='w-1/2'><Link href={"/"} className={styles.link}><HomeIcon/><span className={pathname === '/' ? 'text-white transition-all ease-in-out' : 'text-white/50 transition-all ease-in-out'}>Home</span></Link></div>
                            <div className='w-1/2'><Link href={"/portfolio"} className={styles.link}><PortfolioIcon/><span className={pathname === '/portfolio' ? 'text-white transition-all ease-in-out' : 'text-white/50 transition-all ease-in-out'}>Portfolio</span></Link></div>
                        </div>
                </div>
                <div className='w-1/2 flex justify-end gap-6'>
                    <div><Search/></div>
                    <div><CurrencyChange/></div>
                    <div><ThemeSwitch/></div>
                </div>
            </div>
        </div>
    )
};