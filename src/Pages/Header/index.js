import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MobileViewMenu from "./mobile-menu";
import Subject from "../../Components/SubjectsTopics";
import LeftNav from "./Leftbar";
import { endPoints } from "../../Utils/routeEndPoints";
import { useNavigate } from "react-router-dom";
import "./style.css";

const pages = [
  { label: "Home", url: endPoints.home },
  { label: "About Us", url: endPoints.about },
  { label: "Contact", url: endPoints.contactUs },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenuDropdown = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenuOnSelectOption = (url) => {
    navigate(url);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className="header-custom-class">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <LeftNav /> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleCloseNavMenuOnSelectOption(page.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <MobileViewMenu
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenuOnSelectOption}
            handleCloseNavMenuDropdown={handleCloseNavMenuDropdown}
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
