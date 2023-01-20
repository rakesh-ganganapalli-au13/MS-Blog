import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MobileViewMenu from "./mobile-menu";
import Subject from "../../Components/index";
import LeftNav from "./Leftbar";

const pages = ["Home", "About Us", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings1 = ["SignIn"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftNav />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <MobileViewMenu
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Subject />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
