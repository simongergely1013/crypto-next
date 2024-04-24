import React from "react";
import BtcIcon from "../icons/btcIcon";
import EthIcon from "../icons/ethIcon";
import EuroIcon from "../icons/euroIcon";
import GbpIcon from "../icons/gbpIcon";
import UsdIcon from "../icons/usdIcon";

interface Props {
  currency: string;
}

const CurrencyIcon = ({ currency }: Props) => {
  return currency === "usd" ? (
    <UsdIcon />
  ) : currency === "eur" ? (
    <EuroIcon />
  ) : currency === "gbp" ? (
    <GbpIcon />
  ) : currency === "btc" ? (
    <BtcIcon />
  ) : (
    currency === "eth" && <EthIcon />
  );
};

export default CurrencyIcon;
