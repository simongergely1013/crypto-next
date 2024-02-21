import Link from "next/link"

const styles = {
    main: 'flex min-h-screen flex-col px-20 py-6 border',
    button: 'w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded',
    active: 'bg-[#6161de] border border-opacity-60 border-[#7878FF]'
  }

export default function Page() {
    return(
        <main className={styles.main}>
        <div className="flex border">
        <Link href={"/"} className={styles.button}>Coins</Link>
                <Link href={"/convertor"} className={`${styles.button} ${styles.active}`}>Convertor</Link>
        </div>
        </main>
    )
};