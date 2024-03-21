import React, { useState, ChangeEvent } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../customStyledComponents/headerComponents";

interface HeaderProps {
  onFindClick: (searchValue: string) => void;
}

export default function Header({ onFindClick }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFindClick = () => {
    onFindClick(searchValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuBookIcon />
          <Typography variant="h6" style={{ margin: "1%" }}>
            Library
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Welcome To Books World!
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search title…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={handleInputChange}
            />
          </Search>
          <Button
            variant="contained"
            color="primary"
            disabled={!searchValue}
            onClick={handleFindClick}
          >
            Find
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
