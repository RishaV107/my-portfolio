import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "../theme";

const ColorModeContext = createContext({
  mode: "dark",
  toggleColorMode: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("colorMode") || "dark";
    } catch {
      return "dark";
    }
  });

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "dark" ? "light" : "dark";
          try {
            localStorage.setItem("colorMode", next);
          } catch {
            // Ignore storage errors in restricted environments
          }
          return next;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
