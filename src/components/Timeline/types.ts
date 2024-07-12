import { Experience } from "@/types";

export interface Props {
  experiences: Experience[];
  handleExperienceActive: (index: number) => void;
}
