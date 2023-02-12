import React from "react";
import "./style.scss";
import CustomResponsiveFont from "../../Library/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

function OrderList({ list, position, width, style, listStyleType, bold }) {
  return (
    <Grid
      container
      justifyContent={style?.textAlign}
      className={`custom-list ${bold && "custom-list-bold"}`}
    >
      <List
        sx={{
          listStyleType: "number",
          pl: 2,
          maxWidth: width,
        }}
        style={style}
      >
        {list.map((i, idx) => {
          return (
            <ListItem
              sx={{
                display: "list-item",
              }}
              key={idx}
            >
              <ListItemText primary={i} />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}

function UnorderList({ list, position, width, style, listStyleType, bold }) {
  return (
    <Grid
      container
      justifyContent={style?.textAlign}
      className={`custom-list ${bold && "custom-list-bold"}`}
    >
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          maxWidth: width,
        }}
        style={style}
      >
        {list.map((i, idx) => {
          return (
            <ListItem
              sx={{
                display: "list-item",
              }}
              key={idx}
            >
              <ListItemText primary={i} />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}

export { UnorderList, OrderList };
