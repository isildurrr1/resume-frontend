import { Badge } from "@/components/ui/badge";
import type { Project } from "../../../shared/constants/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-[var(--card-border)] bg-primary/[0.04] hover:bg-primary/[0.08] transition-colors p-3">
      <div className="flex items-start justify-between gap-2 mb-0.5">
        <div>
          <p className="text-sm font-semibold">{project.title}</p>
          {project.company && (
            <p className="text-xs text-[var(--muted)]">{project.company}</p>
          )}
        </div>
        {project.role && (
          <span className="text-xs text-[var(--muted)] shrink-0">
            {project.role}
          </span>
        )}
      </div>
      {project.period && (
        <p className="text-xs text-[var(--muted)] mb-1">{project.period}</p>
      )}
      <p className="text-xs text-[var(--muted)] mb-2">{project.desc}</p>
      {project.achievements.length > 0 && (
        <div className="space-y-0.5 mb-2">
          {project.achievements.map((a) => (
            <p key={a} className="text-xs text-[var(--muted)]">
              ✓ {a}
            </p>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}
