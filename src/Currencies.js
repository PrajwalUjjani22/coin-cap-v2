import "./Currencies.css";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { id: "rank", label: "Rank", minWidth: 30},
  { id: "name", label: "Name", minWidth: 30},
  {
    id: "priceUsd",
    label: "Price",
    minWidth: 30
  },
  {
    id: "marketCapUsd",
    label: "Market Cap",
    minWidth: 30    
  },
  {
    id: "vwap24Hr",
    label: "VWAP [24HR]",
    minWidth: 30
  },
  {
    id: "supply",
    label: "Supply",
    minWidth: 30
  },
  {
    id: "volumeUsd24Hr",
    label: "Volume [24HR]",
    minWidth: 30
  },
  {
    id: "changePercent24Hr",
    label: "Change [24HR]",
    minWidth: 30
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  // ... rest of the rows ...
];

export default function Currencies() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const[data, setData] = useState(
    [
      // {
      //     "id": "bitcoin",
      //     "rank": "1",
      //     "symbol": "BTC",
      //     "name": "Bitcoin",
      //     "supply": "19590862.0000000000000000",
      //     "maxSupply": "21000000.0000000000000000",
      //     "marketCapUsd": "863010440358.1868369731207852",
      //     "volumeUsd24Hr": "14715461878.9007268728978885",
      //     "priceUsd": "44051.6828896138841146",
      //     "changePercent24Hr": "0.8931188947565688",
      //     "vwap24Hr": "43831.8402177357772456",
      //     "explorer": "https://blockchain.info/"
      // },
      // {
      //     "id": "ethereum",
      //     "rank": "2",
      //     "symbol": "ETH",
      //     "name": "Ethereum",
      //     "supply": "120184229.2381965500000000",
      //     "maxSupply": null,
      //     "marketCapUsd": "271638158365.4099232490658770",
      //     "volumeUsd24Hr": "5936304586.7988499594541172",
      //     "priceUsd": "2260.1813905803107797",
      //     "changePercent24Hr": "0.5305595212837703",
      //     "vwap24Hr": "2247.4094352040044322",
      //     "explorer": "https://etherscan.io/"
      // }
    ]
  )

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 
  useEffect(()=>{
    fetchData()
  }, [])

  // setInterval(()=>{
  //   setData(fetchData())
  // }, 5000)

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets');
      setData(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  return (
    <div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length && data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>                            
                              {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}