import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ channel, marginTop }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Card
      sx={{
        width: "320px",
        height: "100%",
        borderRadius: 0,
        boxShadow: "none",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        mt: { marginTop },
      }}
    >
      <Link
        to={
          channel?.id?.channelId
            ? `/channel/${channel?.id?.channelId}`
            : demoChannelUrl
        }
      >
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.channelTitle}
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to={
            channel?.id?.channelId
              ? `/channel/${channel?.id?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: theme === false ? "#fff" : "#000",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {channel?.snippet?.channelTitle ||
              channel?.snippet?.title ||
              demoChannelTitle}
            <CheckCircle sx={{ ml: "5px", fontSize: "1rem", color: "gray" }} />
          </Typography>
        </Link>
        {channel?.statistics?.subscriberCount && (
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "gray" }}
          >
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
