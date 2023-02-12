import * as React from "react";
import Typography from "@mui/material/Typography";

function CustomResponsiveFontSizes({
  variant,
  content,
  align,
  componet,
  style,
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      component={componet}
      style={style}
    >
      {content}
    </Typography>
  );
}

export default CustomResponsiveFontSizes;
