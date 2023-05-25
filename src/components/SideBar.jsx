import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useSelector } from "react-redux";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            type="button"
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            style={{
              backgroundColor: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                marginRight: 15,
                color: category.name === selectedCategory ? "white" : "#FC1503",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                color:
                  theme === false || category.name === selectedCategory
                    ? "#fff"
                    : "#000",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
      ;
    </Stack>
  );
};

export default SideBar;
