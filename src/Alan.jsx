import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectGenreOrCategory, searchMovie } from "./features/currentGenreOrCategory";
import { fetchToken } from "./utils";
import { ColorModeContext } from "./utils/ToggleColorMode";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_SDK_KEY,
      onCommand: ({ command, mode, genreOrCategory, genres, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());

          if (foundGenre) {
            history("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            // Top Rated upcoming popular
            const category = genreOrCategory.startsWith("top") ? "top_rated" : genreOrCategory;
            history("/");
            dispatch(selectGenreOrCategory(category));
          }
        } if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          history("/");
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);

  return (
    <div />
  );
};

export default useAlan;
