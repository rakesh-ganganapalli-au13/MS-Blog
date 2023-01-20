import { Box } from "@mui/material";
import "./App.css";
import Rouets from "./Components/index";
import Layout from "./Pages";

function App() {
  return (
    <div className="App">
      <Layout />
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Rouets />
      </Box>
    </div>
  );
}

export default App;
