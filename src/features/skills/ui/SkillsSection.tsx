import { Box, Chip } from "@mui/material";
import { SKILLS } from "../../../shared/constants/skills";

export function SkillsSection() {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {SKILLS.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          variant="filled"
          size="small"
          sx={{
            backgroundColor: (t) => `${t.palette.primary.main}20`,
            color: (t) => t.palette.primary.main,
          }}
        />
      ))}
    </Box>
  );
}
