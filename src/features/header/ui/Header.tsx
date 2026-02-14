import { Box, Stack, Typography, Link, Avatar } from "@mui/material";
import { Github, Mail, Send } from "lucide-react";
import avatarImage from "../../../assets/my-photo.png";
import { PROFILE } from "../../../shared/constants/profile";

export function Header() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Box sx={{ flex: "0 0 70%" }}>
        <Stack spacing={1.5}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              background: (t) =>
                `linear-gradient(135deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {PROFILE.name}
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ flexWrap: "wrap", alignItems: "center" }}
          >
            <Link
              href={`mailto:${PROFILE.email}`}
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Mail size={16} />
              Email
            </Link>
            <Typography color="text.disabled">•</Typography>
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Github size={16} />
              GitHub
            </Link>
            <Typography color="text.disabled">•</Typography>
            <Link
              href={PROFILE.telegram}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Send size={16} />
              Telegram
            </Link>
          </Stack>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            {PROFILE.description}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "0 0 30%",
        }}
      >
        <Avatar
          src={avatarImage}
          sx={{
            width: 150,
            height: 150,
            border: (t) => `3px solid ${t.palette.primary.main}`,
            boxShadow: (t) => `0 0 20px ${t.palette.primary.main}40`,
            flexShrink: 0,
          }}
        />
      </Box>
    </Stack>
  );
}
