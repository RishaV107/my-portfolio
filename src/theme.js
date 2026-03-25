import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#8178f8" : "#6c5fff",
        light: mode === "dark" ? "#a89fff" : "#8b80ff",
        dark: "#5048c0",
        contrastText: "#ffffff",
      },
      secondary: {
        main: mode === "dark" ? "#00c8ff" : "#0077b8",
        light: mode === "dark" ? "#4dd9ff" : "#0099cc",
        dark: "#006b99",
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "dark" ? "#080810" : "#f4f5fb",
        paper: mode === "dark" ? "#12121f" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#f0f0f8" : "#16162a",
        secondary: mode === "dark" ? "#8888b0" : "#5e5e80",
      },
      divider:
        mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    },

    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 800, letterSpacing: "-0.03em" },
      h2: { fontWeight: 700, letterSpacing: "-0.02em" },
      h3: { fontWeight: 700, letterSpacing: "-0.01em" },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 500 },
      subtitle1: { fontWeight: 500 },
      overline: { fontWeight: 700, letterSpacing: "0.15em" },
    },

    shape: { borderRadius: 12 },

    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          ":root": {
            "--dot-grid-color":
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.04)"
                : "rgba(108,95,255,0.06)",
            "--tech-logo-filter":
              theme.palette.mode === "dark"
                ? "grayscale(40%) opacity(0.7)"
                : "grayscale(20%) opacity(0.85)",
            "--section-alt-bg":
              theme.palette.mode === "dark" ? "#0c0c1a" : "#ffffff",
          },
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            scrollBehavior: "smooth",
            transition: "background-color 0.3s ease, color 0.3s ease",
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-track": {
              background: theme.palette.background.default,
            },
            "&::-webkit-scrollbar-thumb": {
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(#8178f8, #00c8ff)"
                  : "linear-gradient(#6c5fff, #0077b8)",
              borderRadius: "3px",
            },
          },
        }),
      },

      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.04)"
                : theme.palette.background.paper,
            backdropFilter:
              theme.palette.mode === "dark" ? "blur(20px)" : "none",
            border: `1px solid ${
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.07)"
            }`,
            boxShadow:
              theme.palette.mode === "light"
                ? "0 2px 20px rgba(108,95,255,0.07)"
                : "none",
          }),
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500, borderRadius: "6px" },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            backgroundImage: "none",
          }),
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: "transform 0.2s ease, background-color 0.2s ease",
          },
        },
      },
    },
  });

export default getTheme("dark");
