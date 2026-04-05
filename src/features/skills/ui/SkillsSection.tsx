import { Badge } from "@/components/ui/badge";
import { SKILLS, AI_TOOLS } from "../../../shared/constants/skills";

export function SkillsSection() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Badge key={skill} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
      <div>
        <p className="text-xs text-[var(--muted)] mb-2">
          AI-инструменты / агентная разработка
        </p>
        <div className="flex flex-wrap gap-2">
          {AI_TOOLS.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
