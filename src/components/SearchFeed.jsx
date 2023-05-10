import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ height: "90vh", overflowY: "auto" }}>
      <Typography variant="h4" sx={{ fontWeight: 600, color: "white", pb: 2 }}>
        Search results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
