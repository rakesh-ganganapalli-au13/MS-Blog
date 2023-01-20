import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
function MobileMenu(props) {
  const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages } = props;

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        style={{ justifyContent: "right" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <InfoIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default MobileMenu;
