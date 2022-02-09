import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const rows = [
  {
    Rank: 1,
    Game: "Call of Duty",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 2,
    Game: "Call of Duty",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 3,
    Game: "Call of Duty",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 4,
    Game: "Call of Duty",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 5,
    Game: "Call of Duty",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
];
const currencies = [
  {
    value: "EUR",
    label: "Filter",
  },
  {
    value: "BTC",
    label: "Filter",
  },
];
const handleVoteClick = (row) => {
  console.log("row is ", row);
};

export default function RankingList() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  console.log(tableCellClasses.root);
  return (
    <>
      <div className="rankinglistHeadingDiv">
        <p className="rankingListheading">Requests Ranking List</p>
        {/* <p className="rankingListheading">View All</p> */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <SearchIcon
            style={{
              position: "absolute",
              right: 0,
              top: 12,
              width: 20,
              height: 20,
            }}
          />
          <input
            type="text"
            placeholder="Search a game"
            className="searchbar"
          />
        </div>
        {/* <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "25ch",
              border: "1px solid gray",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-select-currency"
            select
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box> */}
      </div>
      <TableContainer component={Paper}>
        <Table className="setTable">
          <TableHead
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                background: "#1D1F38",
                color: "white",
              },
            }}
          >
            <TableRow>
              <TableCell className="headerFirstCell">Rank</TableCell>
              <TableCell className="headergameCell" align="right">
                Game
              </TableCell>
              <TableCell className="headergameCell" align="right">
                Game Lecel
              </TableCell>
              <TableCell className="headerdescriptionCell" align="right">
                Description
              </TableCell>
              <TableCell className="" align="right">
                Votes
              </TableCell>
              <TableCell className="headerLastCell" align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                background: "#0E0F1E",
                color: "white",
              },
            }}
          >
            {rows.map((row) => (
              <TableRow
                key={row.Rank}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Rank}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.Game}
                </TableCell>
                <TableCell className="headergameCell" align="right">
                  {row.GameLecel}
                </TableCell>
                <TableCell className="descriptionCell" align="right">
                  {row.description}
                </TableCell>

                <TableCell align="right">{row.Votes}</TableCell>
                <TableCell align="right">
                  <button
                    className="votebutton"
                    onClick={() => handleVoteClick(row)}
                  >
                    Vote
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
