import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { setCurrencyBuyVsCurrencySell } from "@/app/lib/features/app/convertorSlice";
import React, { useState, useEffect } from "react";
import { setStyles } from "./btcVsCurrency.styles";
import { setURL } from "./utils";
import { fetchOptions } from "@/app/lib/fetchOptions";
import LoaderBtcVsCurrency from "../loaders/loaderBtcVsCurrency";

interface Props {
  currency: string;
  currencyId: string;
}

const BtcVsCurrencySellIndex = ({ currency, currencyId }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isDark } = useAppSelector((state) => state.theme);
  const { currencyBuy, currencyBuyVsCurrencySell } = useAppSelector(
    (state) => state.convertor
  );
  const styles = setStyles(isDark);
  const dispatch = useAppDispatch();

  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });

  useEffect(() => {
    setIsLoading(true);
    try {
      const url = setURL(currency, currencyId);
      fetch(url, fetchOptions)
        .then((res) => res.json())
        .then((json) => {
          dispatch(setCurrencyBuyVsCurrencySell(json[currencyId][currency]));
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
    // eslint-disable-next-line
  }, [currency, currencyId]);

  return (
    <>
      {isLoading ? (
        <LoaderBtcVsCurrency />
      ) : (
        currencyBuyVsCurrencySell !== 0 &&
        !isLoading && (
          <div>
            <span className={`${styles.secondaryText} ${styles.inputIndexL}`}>
              1 {currencyBuy.toUpperCase()} =
            </span>
            <span className={`${styles.primaryText} ${styles.inputIndexR}`}>
              {formatter.format(currencyBuyVsCurrencySell)}
            </span>
          </div>
        )
      )}
    </>
  );
};

export default BtcVsCurrencySellIndex;
