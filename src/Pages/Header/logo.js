import { Typography } from "@mui/material";
import React from "react";
import Leftbar from "./Leftbar";

const logo = "Logo";

function Logo() {
  return (
    <>
      <Leftbar />
    </>
  );
}

function LogoMobile() {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {logo}
      </Typography>
    </>
  );
}

export { Logo, LogoMobile };
