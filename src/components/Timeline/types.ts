import { Experiences } from "@/types";

export interface Props {
  experiences: Experiences;
  handleExperienceActive: (index: number) => void;
}
