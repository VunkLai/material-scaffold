import {
  CssBaseline,
  ThemeProvider as MuThemeProvider,
  createTheme,
} from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useApp } from "./contexts/AppContext";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { mode } = useApp();

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <MuThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuThemeProvider>
  );
};

export { ThemeProvider };
