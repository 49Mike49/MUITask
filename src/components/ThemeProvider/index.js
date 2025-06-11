import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
      light: "#c8e6c9",
    },
    secondary: {
      main: "#424242",
      light: "#a5d6a7",
    },
    success: {
      main: "#388e3c",
      light: "#ffffff"
    },
    error:{
        main: "#e0e0e0",
        light:"#fafafa"
    },
    info: {
        main:"#212121"
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary.main,
            border: "0px",
          }),
        },
        {
          props: { variant: "contained" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.main,
            border: "0px",
          }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: "bold",
          fontSize: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          border: "1px solid grey",
          height: "50px",
          gap: "10px",
          margin: "0px 20px 0px 20px",
        },
      },
    },
  },
});
