import { blue } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const bleu = "#0B72B9";
const yellowGold = "#B99F5F";
const grey = "#868686";

export default createTheme({
  palette: {
    cummon: {
      grey,
    },
    primary: {
      main: "#0B72B9",
      // light: "#5F77BA"
    },
    secondary: {
      main: "#FFBA60",
      //  light: "#FFE39C"
    },
  },
  navButtons: {
    textTransform: "none",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    fontWeight: 400,
    color: "white",
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.4rem",
      color: bleu,
      lineHeight: 1.5,
    },
    lrnButton: {
      borderColor: bleu,
      color: bleu,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Raleway",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.5em",
      color: bleu,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75em",
      color: bleu,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: bleu,
    },
    subtitle1: {
      fontFamily: "Raleway",
      fontSize: "1.25rem",
      fontWeight: 300,
      color: grey,
    },
    subtitle2: {
      fontFamily: "Raleway",
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: grey,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: grey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: bleu,
        fontSize: "1.3rem",
      },
    },
    MuiInput: {
      root: {
        color: grey,
        fontWeight: 300,
      },
      underline: {
        "&before": {
          borderBottom: `2px solid ${bleu}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `1px solid ${bleu}`,
        },
      },
    },
  },
});
