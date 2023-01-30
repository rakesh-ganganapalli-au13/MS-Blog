import * as React from "react";
import Typography from "@mui/material/Typography";

function CustomResponsiveFontSizes({ variant, content, align }) {
  return (
    <Typography variant={variant} align={align}>
      {content}
    </Typography>
  );
}

export default CustomResponsiveFontSizes;
