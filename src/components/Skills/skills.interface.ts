import type { SanityImage } from "src/sanity/types";

export interface SkillComponentProps {
  url: string;
  fillMode?: boolean;
  animate?: boolean;
  name: string;
  icon?: SanityImage;
}
