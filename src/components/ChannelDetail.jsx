import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          className="height-div"
          style={{
            background:
              "linear-gradient(143deg, rgba(0,4,40,1) 2%, rgba(0,78,146,1) 67%)",
          }}
        />
        <ChannelCard channel={channelDetail} marginTop="-90px" />
      </Box>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
