import { Stack } from "@mui/material";
import { PROJECTS } from "../../../shared/constants/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <Stack spacing={1.5}>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Stack>
  );
}
