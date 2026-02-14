import { createTheme } from "@mui/material/styles";

export function createAppTheme(mode: "light" | "dark" = "dark") {
  return createTheme({
    palette: {
      mode,
      primary: { main: "#00d4ff" },
      secondary: { main: "#ff006e" },
    },
    typography: {
      fontFamily: '\"Inter\", \"Segoe UI\", sans-serif',
    },
  });
}
