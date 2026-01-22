import { Theme } from "@interfaces/theme";
export interface SkillsProps {
  isMobile: boolean;
  theme?: Theme;
}

export interface SkillComponentProps {
  url: string;
  alt: string;
  fillMode?: boolean;
  animate?: boolean;
  name: string;
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
}
