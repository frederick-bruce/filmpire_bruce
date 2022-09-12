import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { searchMovie } from "../../features/currentGenreOrCategory";

import useStyles from "./styles.js";

const Search = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  // if (location.path_name !== "/") return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>

          ),
        }}
      />
    </div>
  );
};

export default Search;
