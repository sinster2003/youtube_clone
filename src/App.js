import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./components/index";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: theme === false ? "#000" : "#fff" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
