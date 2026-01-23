import experiences from "@constants/experiences";

export interface ExperienceProps {
  isMobile: boolean;
}

export type ExperienceCardProps = (typeof experiences)[number];
