import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Videos } from "./";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromApi } from "./../utils/fetchFromApi";
import { useSelector } from "react-redux";

const VideoDetail = () => {
  const theme = useSelector((state) => state.theme.value);

  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics,
  } = videoDetail;

  return (
    <Box minHeight="90vh">
      <Stack
        direction="column"
        px={2}
        sx={{
          overflow: { lg: "hidden" },
          flexDirection: { lg: "row" },
          justifyContent: { md: "space-between" },
        }}
      >
        <Box
          flex={2}
          className="video-box"
          sx={{
            position: "sticky",
            top: "77.6px",
            overflow: { lg: "hidden" },
            background: {
              backgroundColor: theme === false ? "#000" : "#fff",
            },
            mx: { lg: 4 },
          }}
        >
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <Typography
            className="card-title"
            variant="h5"
            p={2}
            sx={{
              color: theme === false ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={{ sm: 2, md: 0 }}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography
                variant="subtitle1"
                className="channel-title"
                sx={{
                  color: "gray",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "6px",
                  px: 2,
                }}
              >
                {channelTitle}
                <CheckCircle sx={{ fontSize: "16px", color: "gray" }} />
              </Typography>
            </Link>
            <Stack
              direction="row"
              alignItems="center"
              gap="20px"
              className="count-stack"
            >
              <Typography
                className="stats"
                variant="body1"
                sx={{ color: "gray" }}
              >
                {parseInt(statistics.viewCount).toLocaleString()} Views
              </Typography>
              <Typography
                className="stats"
                variant="body1"
                sx={{ color: "gray" }}
              >
                {parseInt(statistics.likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box flex={1} sx={{ height: { lg: "90vh" }, overflowY: "auto" }}>
          <Videos videos={videos} alignitems="center" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
