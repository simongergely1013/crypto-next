import { useAppSelector } from "@/app/lib/hooks";
import React, { useState, useEffect } from "react";
import { setStyles } from "./btcVsCurrency.styles";
import { setBtcVsCurrencyURL } from "./utils";
import { fetchOptions } from "@/app/lib/fetchOptions";
import LoaderBtcVsCurrency from "../loaders/loaderBtcVsCurrency";

interface Props {
  currency: string;
}

const BtcVsCurrencyIndex = ({ currency }: Props) => {
  const [btcPriceInCurrency, setBtcPriceInCurrency] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isDark } = useAppSelector((state) => state.theme);
  const styles = setStyles(isDark);

  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });

  useEffect(() => {
    setIsLoading(true);
    try {
      const url = setBtcVsCurrencyURL(currency);
      fetch(url, fetchOptions)
        .then((res) => res.json())
        .then((json) => {
          setBtcPriceInCurrency(json);
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.error("error:" + err);
        });
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
    setIsLoading(false);
  }, [currency]);

  return (
    <>
      {isLoading ? (
        <LoaderBtcVsCurrency />
      ) : (
        btcPriceInCurrency &&
        !isLoading && (
          <div>
            <span className={`${styles.secondaryText} ${styles.inputIndexL}`}>
              1 BTC =
            </span>
            <span className={`${styles.primaryText} ${styles.inputIndexR}`}>
              {formatter.format(btcPriceInCurrency.bitcoin[currency])}
            </span>
          </div>
        )
      )}
    </>
  );
};

export default BtcVsCurrencyIndex;
