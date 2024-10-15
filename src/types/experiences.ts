export interface Experience {
  company: string;
  position: string;
  dateInit: string;
  dateEnd: string;
  description: string[];
  technologies: string[];
  level: number;
}

export type Experiences = Experience[];
