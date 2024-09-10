import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Asset } from "../../types/Asset";
import React from "react";

type AssetTableProps = {
  rows: Asset[];
};

export const AssetTableUi: React.FC<AssetTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">docType</TableCell>
            <TableCell align="right">ID&nbsp;(g)</TableCell>
            <TableCell align="right">Color&nbsp;(g)</TableCell>
            <TableCell align="right">Size&nbsp;(g)</TableCell>
            <TableCell align="right">Owner&nbsp;(g)</TableCell>
            <TableCell align="right">AppraisedValue&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.docType}</TableCell>
              <TableCell align="right">{row.Color}</TableCell>
              <TableCell align="right">{row.Size}</TableCell>
              <TableCell align="right">{row.Owner}</TableCell>
              <TableCell align="right">{row.AppraisedValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
