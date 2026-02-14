import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Header } from "../../../features/header/ui/Header";
import { SkillsSection } from "../../../features/skills/ui/SkillsSection";
import { ProjectsSection } from "../../../features/projects/ui/ProjectsSection";
import { PROFILE } from "../../../shared/constants/profile";

export function ResumeCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        backdropFilter: "blur(10px)",
        border: (t) => `1px solid ${t.palette.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: (t) => t.palette.primary.main,
          boxShadow: (t) => `0 8px 32px ${t.palette.primary.main}20`,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
        <Stack spacing={3}>
          {/* Header Section */}
          <Header />

          <Divider sx={{ my: 1 }} />

          {/* Skills Section */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
              Технологии
            </Typography>
            <SkillsSection />
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Projects Section */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
              Проекты
            </Typography>
            <ProjectsSection />
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Location Section */}
          <Typography variant="caption" color="text.disabled">
            {PROFILE.location} • Доступен для фриланса и контрактных работ
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
