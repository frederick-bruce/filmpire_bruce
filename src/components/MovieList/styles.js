import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));
