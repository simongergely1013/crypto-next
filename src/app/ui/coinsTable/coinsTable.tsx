import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "@/app/lib/hooks";
import { coinsTableData } from "@/app/lib/placerholder-data";
import { setStyles, setTextColor } from "./coinsTable.styles";
import React from "react";
import GreenTriangle from "../icons/greenTriangle";
import RedTriangle from "../icons/redTriangle";
import ProgessBarCoinsTable from "../progressBarCoinsTable/progressBarCoinsTable";
import CoinsTableLineChart from "../charts/coinsTableLineChart";
import Image from "next/image";

const CoinsTable = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { currency } = useAppSelector((state) => state.currency);
  const styles = setStyles(isDark);

  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  });
  const formatterCompact = Intl.NumberFormat("en", {
    style: "currency",
    currency,
    notation: "compact",
  });

  return (
    <TableContainer sx={styles.tableContainer} component={Paper}>
      <Table stickyHeader sx={styles.table} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={styles.tableHead}>#</TableCell>
            <TableCell sx={styles.tableHead}>Name</TableCell>
            <TableCell sx={styles.tableHead}>Price</TableCell>
            <TableCell sx={styles.tableHead} align="center">
              1h%
            </TableCell>
            <TableCell sx={styles.tableHead} align="center">
              24h%
            </TableCell>
            <TableCell sx={styles.tableHead} align="center">
              7d%
            </TableCell>
            <TableCell sx={styles.volVsMktCp}>
              24h volume / Market Cap
            </TableCell>
            <TableCell sx={styles.volVsMktCp}>
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
                    borderBottom: styles.borderBottom,
                  },
                }}
              >
                <TableCell sx={styles.index}>{index + 1}</TableCell>
                <TableCell sx={styles.nameAndPrice}>
                  <div className={styles.nameAndPriceDiv}>
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
                    <span className={setTextColor(is1hPositive)}>
                      {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.percentageChange}>
                  <div className={styles.percentageChange.div}>
                    {is24hPositive ? <GreenTriangle /> : <RedTriangle />}
                    <span className={setTextColor(is24hPositive)}>
                      {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell sx={styles.percentageChange}>
                  <div className={styles.percentageChange.div}>
                    {is7dPositive ? <GreenTriangle /> : <RedTriangle />}
                    <span className={setTextColor(is7dPositive)}>
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
