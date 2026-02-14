import { useMemo } from "react";
import {
  CssBaseline,
  Box,
  Container,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { createAppTheme } from "./shared/config/theme";
import { ResumeCard } from "./widgets/resume-card";

export default function App() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const mode: "light" | "dark" = prefersDark ? "dark" : "light";

  const muiTheme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          background: (t) =>
            `radial-gradient(900px 500px at 20% 10%, ${t.palette.primary.main}15, transparent 60%),
             radial-gradient(900px 500px at 80% 30%, ${t.palette.secondary.main}15, transparent 55%),
             ${t.palette.background.default}`,
          py: 4,
          px: 2,
        }}
      >
        <Container maxWidth="md" sx={{ width: "100%" }}>
          <ResumeCard />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
