import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "./../utils/constants";
import { SearchBar } from "./index";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{ position: "sticky", background: "#000", top: 0, zIndex: 1 }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="UTube Logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
