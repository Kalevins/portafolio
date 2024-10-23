import type { Link } from "@/types";
export interface Experience {
  company: string;
  position: string;
  dateInit: string;
  dateEnd: string;
  website: Link;
  description: string[];
  technologies: string[];
  level: number;
}

export type Experiences = Experience[];
