import { Box } from "@mui/material";
import "./App.css";
import Comp from "./Components/SubjectsTopics";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routeComponents from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Comp />
        </Box>
        <Routes>
          {routeComponents.map((i, idx) => {
            return (
              <Route path={i.path} element={i.component} key={i.breadcrumb} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
