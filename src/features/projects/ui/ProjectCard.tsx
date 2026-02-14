import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import type { Project } from "../../../shared/constants/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: (t) => `${t.palette.primary.main}08`,
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: (t) => `${t.palette.primary.main}12`,
        },
      }}
    >
      <CardContent sx={{ p: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 0.5,
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            {project.company && (
              <Typography variant="caption" color="text.secondary">
                {project.company}
              </Typography>
            )}
          </Box>
        </Box>
        {project.period && (
          <Typography
            variant="caption"
            color="text.disabled"
            sx={{ display: "block", mb: 0.5 }}
          >
            {project.period}
          </Typography>
        )}
        <Typography variant="caption" color="text.secondary">
          {project.desc}
        </Typography>
        {project.achievements && (
          <Box sx={{ mt: 1, mb: 1 }}>
            {project.achievements.map((achievement) => (
              <Typography
                key={achievement}
                variant="caption"
                display="block"
                color="text.secondary"
                sx={{ fontSize: "0.7rem" }}
              >
                ✓ {achievement}
              </Typography>
            ))}
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              variant="outlined"
              sx={{ height: 24 }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
