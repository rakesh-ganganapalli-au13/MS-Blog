import { Box } from "@mui/material";
import Comp from "./Components/SubjectsTopics";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routeComponents from "./Routes";
import styled from "@emotion/styled";
import Error from "./Pages/Error/404";
import { useEffect } from "react";
import Loader from "./Library/Loader";
import "./Sass/main.scss";
import ContentCard from "./Components/ContentGrid";
import CustomText from "./Components/ContentControl/text";
import Marquee from "./Library/Marquee";

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
        <Marquee
          content="This is beta version, if you found any issue please let us
          know.Thank you."
        />
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
