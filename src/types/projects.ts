export interface Repositories {
  front: string;
  back: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repositories: Repositories;
  url: string;
}

export type Projects = Project[];
