import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GreenTriangle from "../icons/greenTriangle";
import RedTriangle from "../icons/redTriangle";
import ProgessBarCoinsTable from "../progressBarCoinsTable/progressBarCoinsTable";
import CoinsTableLineChart from "../charts/coinsTableLineChart";
import Image from "next/image";
import { useAppSelector } from "@/app/lib/hooks";
import { coinsTableData } from "@/app/lib/placerholder-data";

const CoinsTable = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { currency } = useAppSelector((state) => state.currency);

  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });
  const formatterCompact = Intl.NumberFormat("en", {
    style: "currency",
    currency,
    notation: "compact",
  });

  const bg = isDark ? "#191925" : "";

  const styles = {
    tableHead: {
      background: isDark ? "#131219" : "#E2E8F0",
      color: isDark ? "#D1D1D1" : "#424286",
      border: "none",
      fontFamily: "inherit",
    },
    tableCell: {
      border: "none",
    },
    index: {
      color: isDark ? "#D1D1D1" : "#424286",
      border: "none",
      fontFamily: "inherit",
    },
    nameAndPrice: {
      color: isDark ? "white" : "#232336",
      border: "none",
      fontFamily: "inherit",
    },
    namePriceSpan: "font-medium text-base leading-6",
    percentageChange: {
      color: isDark ? "white" : "#232336",
      border: "none",
      div: "flex items-center justify-end gap-1",
      fontFamily: "inherit",
    },
    progressBarCell: {
      border: "none",
      fontFamily: "inherit",
    },
    progressBar: "h-full absolute rounded",
  };

  return (
    <TableContainer
      sx={{ borderRadius: "12px", maxHeight: 680 }}
      component={Paper}
    >
      <Table
        stickyHeader
        sx={{ minWidth: 650, background: bg }}
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={styles.tableHead}>#</TableCell>
            <TableCell sx={styles.tableHead}>Name</TableCell>
            <TableCell sx={styles.tableHead}>Price</TableCell>
            <TableCell sx={styles.tableHead}>1h%</TableCell>
            <TableCell sx={styles.tableHead}>24h%</TableCell>
            <TableCell sx={styles.tableHead}>7d%</TableCell>
            <TableCell sx={styles.tableHead}>24h volume / Market Cap</TableCell>
            <TableCell sx={styles.tableHead}>
              Circulating / Total supply
            </TableCell>
            <TableCell sx={styles.tableHead}>Last 7d</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsTableData.map((coin, index) => {
            const is1hPositive =
              coin.price_change_percentage_1h_in_currency >= 0;
            const is24hPositive =
              coin.price_change_percentage_24h_in_currency >= 0;
            const is7dPositive =
              coin.price_change_percentage_7d_in_currency >= 0;
            const volumeToMktCapPerc = Math.round(
              (coin.total_volume / coin.market_cap) * 100
            );
            const volume = formatterCompact.format(coin.total_volume);
            const marketCap = formatterCompact.format(coin.market_cap);
            const circulatingToTotalSupplyPercentage = Math.round(
              (coin.circulating_supply / (coin.total_supply || 0)) * 100
            );
            const circulatingSupply = formatterCompact.format(
              coin.circulating_supply
            );
            const totalSupply = formatterCompact.format(coin.total_supply || 0);
            return (
              <TableRow
                key={coin.id}
                sx={{
                  "td, th": {
                    borderBottom: `6px solid ${styles.tableHead.background}`,
                  },
                }}
              >
                <TableCell sx={styles.index}>{index + 1}</TableCell>
                <TableCell sx={styles.nameAndPrice}>
                  <div className="flex items-center">
                    <Image
                      alt="coin-image"
                      src={coin.image}
                      width={32}
                      height={32}
                      className="mr-6"
                    />
                    <span className={styles.namePriceSpan}>{coin.name}</span>
                    <span className={`${styles.namePriceSpan} ml-1.5`}>
                      ({coin.symbol.toUpperCase()})
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.nameAndPrice}>
                  <span className={styles.namePriceSpan}>
                    {formatter.format(coin.current_price)}
                  </span>
                </TableCell>
                <TableCell sx={styles.percentageChange}>
                  <div className={styles.percentageChange.div}>
                    {is1hPositive ? <GreenTriangle /> : <RedTriangle />}
                    <span className={is1hPositive ? "text-green" : "text-red"}>
                      {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.percentageChange}>
                  <div className={styles.percentageChange.div}>
                    {is24hPositive ? <GreenTriangle /> : <RedTriangle />}
                    <span className={is24hPositive ? "text-green" : "text-red"}>
                      {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.percentageChange}>
                  <div className={styles.percentageChange.div}>
                    {is7dPositive ? <GreenTriangle /> : <RedTriangle />}
                    <span className={is7dPositive ? "text-green" : "text-red"}>
                      {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.progressBarCell}>
                  <ProgessBarCoinsTable
                    width={`${volumeToMktCapPerc}%`}
                    data1={volume}
                    data2={marketCap}
                    is24hPositive={is24hPositive}
                  />
                </TableCell>
                <TableCell sx={styles.progressBarCell}>
                  <ProgessBarCoinsTable
                    width={`${circulatingToTotalSupplyPercentage}%`}
                    data1={circulatingSupply}
                    data2={totalSupply}
                    is24hPositive={is24hPositive}
                  />
                </TableCell>
                <TableCell sx={styles.progressBarCell}>
                  <CoinsTableLineChart data={coin.sparkline_in_7d.price} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinsTable;
