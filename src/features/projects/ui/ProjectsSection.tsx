import { PROJECTS } from "../../../shared/constants/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <div className="space-y-2">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
