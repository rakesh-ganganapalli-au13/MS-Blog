import { Box } from "@mui/material";
import Comp from "./Components/SubjectsTopics";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routeComponents from "./Routes";
import styled from "@emotion/styled";
import Error from "./Pages/Error/404";
import { useEffect } from "react";
import Loader from "./Library/Loader";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Offset />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Comp />
        </Box>
        <Routes>
          <Route path="*" element={<Error />} key="404Error" />

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
