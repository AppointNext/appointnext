"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

// Styled InputBase component for Bootstrap-like styling
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "8px 40px 8px 12px", // Adjust padding to accommodate the icon
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const SearchWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

const SearchIconWrapper = styled("div")({
  position: "absolute",
  right: "12px",
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
});

export default function SearchBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex flex-row items-center gap-2 p-2 mt-10">
      {/* Input field with search icon */}
      <FormControl variant="standard" sx={{ minWidth: 220 }}>
        <BootstrapInput
          placeholder="Search Appointments"
          startAdornment={
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          }
        />
      </FormControl>

      {/* Select component with custom icon */}
      <div className="hidden md:flex">
        <FormControl sx={{ minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
            IconComponent={DragIndicatorIcon}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
            IconComponent={FilterListIcon}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
