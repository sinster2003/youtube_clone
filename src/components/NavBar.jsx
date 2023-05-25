import { Link } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import { logo } from "./../utils/constants";
import { SearchBar } from "./index";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

const NavBar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(changeTheme(!theme));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        position: "sticky",
        background: theme === false ? "#000" : "#fff",
        top: 0,
        zIndex: 1,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="UTube Logo" height={45} />
      </Link>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <SearchBar />
        <IconButton onClick={handleTheme} sx={{ pl: "10px" }}>
          {theme === false ? (
            <LightMode sx={{ color: "white" }} />
          ) : (
            <DarkMode sx={{ color: "black" }} />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default NavBar;
