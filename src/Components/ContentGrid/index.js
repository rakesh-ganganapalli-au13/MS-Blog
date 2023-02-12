import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./style.scss";

export default function CustomGrid({ grids, space }) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={space} className="custom-grid-style">
        {grids.map((i, idx) => {
          return (
            <Grid key={idx} item xs={i.columns}>
              {i.content}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
