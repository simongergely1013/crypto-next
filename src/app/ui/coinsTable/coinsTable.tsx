import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "@/app/lib/hooks";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CoinsTable = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const bg = isDark ? "#191925" : "";

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "" }}>
            <TableCell sx={{ background: bg }}>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">1h%</TableCell>
            <TableCell align="right">24h%</TableCell>
            <TableCell align="right">7d%</TableCell>
            <TableCell align="right">24h volume / Market Cap</TableCell>
            <TableCell align="right">Circulating / Total supply</TableCell>
            <TableCell align="right">Last 7d</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ background: "" }}>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">1h%</TableCell>
              <TableCell align="right">24h%</TableCell>
              <TableCell align="right">7d%</TableCell>
              <TableCell align="right">24h volume / Market Cap</TableCell>
              <TableCell align="right">Circulating / Total supply</TableCell>
              <TableCell align="right">Last 7d</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinsTable;
