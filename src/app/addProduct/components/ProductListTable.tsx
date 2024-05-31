import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/router';
import { useRouter } from 'next/navigation';

function createData(
  name: string,
  status: string,
  channel: string,
  inventory: string,
) {
  return { name, status, channel, inventory };
}

const rows = [
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),
  createData("shirt", "published", "warehouse", "8 product with 8 variants"),

];

export default function ProductListTable() {
 
   const router = useRouter()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, marginBottom:"50px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Channel</TableCell>
            <TableCell align="right">Inventory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}

              onClick={()=> router.push("/")}

              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.channel}</TableCell>
              <TableCell align="right">{row.inventory}</TableCell>
            </TableRow>

          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
