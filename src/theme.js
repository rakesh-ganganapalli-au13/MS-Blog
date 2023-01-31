import { createTheme } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "./Utils/staticData";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme;
