import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "../../../features/header/ui/Header";
import { SkillsSection } from "../../../features/skills/ui/SkillsSection";
import { ProjectsSection } from "../../../features/projects/ui/ProjectsSection";
import { PROFILE } from "../../../shared/constants/profile";

export function ResumeCard() {
  return (
    <Card
      className="hover:border-primary"
      style={{
        ["--tw-shadow" as string]: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,212,255,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <CardContent className="space-y-5">
        <Header />
        <Separator />
        <div>
          <p className="text-sm font-semibold mb-3">Технологии</p>
          <SkillsSection />
        </div>
        <Separator />
        <div>
          <p className="text-sm font-semibold mb-3">Проекты</p>
          <ProjectsSection />
        </div>
        <Separator />
        <p className="text-xs text-[var(--muted)]">
          {PROFILE.location} • Доступен для фриланса и контрактных работ
        </p>
      </CardContent>
    </Card>
  );
}
