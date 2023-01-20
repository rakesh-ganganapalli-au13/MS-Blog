import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Lists from "./list";

const drawerPosition = "left";

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ textAlign: "right" }}>
        <Button onClick={toggleDrawer(anchor, false)}>
          <ChevronLeftIcon />
        </Button>
      </div>

      <Divider />

      <Lists />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(drawerPosition, true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={drawerPosition}
          open={state[drawerPosition]}
          onClose={toggleDrawer(drawerPosition, false)}
        >
          {list(drawerPosition)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
