export type ProjectCategory = "all" | "microservices" | "fullstack" | "public_sector";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureComponent {
  title: string;
  description: string;
  tech?: string;
}

export interface ArchitectureDiagram {
  overview: string;
  components: ArchitectureComponent[];
  technicalHighlights: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  year: string;
  featured: boolean;
  badge?: string;
  keyMetric?: ProjectMetric;
  challenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  coverImage: string;
  images: string[];
  architecture?: ArchitectureDiagram;
}

export type SkillCategoryType =
  | "backend"
  | "database"
  | "frontend"
  | "devops_tools"
  | "architecture";

export interface SkillItem {
  name: string;
  focusArea: string;
  category: SkillCategoryType;
  icon?: string;
}

export interface SkillCategory {
  id: SkillCategoryType;
  categoryName: string;
  subtitle: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  badgeVariant?: "default" | "primary" | "secondary" | "sage" | "outline";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  thesisTitle?: string;
  highlights: string[];
}

export type CertificationType = "patent_hki" | "award" | "certification";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: CertificationType;
  fileUrl?: string;
  registrationNumber?: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface EngineeringEthosPillar {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProfileBio {
  fullName: string;
  aliasName: string;
  roleTitle: string;
  statusBadge: string;
  location: string;
  gpa: string;
  projectsCompleted: number;
  avatarUrl: string;
  bgImageUrl?: string;
  resumeUrl?: string;
  narrativeParagraphs: string[];
  coreAttributes: string[];
  socialLinks: SocialLinks;
  ethosPillars: EngineeringEthosPillar[];
}
