import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "./"; // from ./components
import { fetchFromApi } from "../utils/fetchFromApi";
import { useSelector } from "react-redux";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          height: { sx: "auto", md: "95vh" },
          px: 2,
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, mb: 1, color: theme === false ? "#fff" : "#000" }}
        >
          Copyright &#169; UTube 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: theme === false ? "white" : "black",
            pb: 2,
          }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
