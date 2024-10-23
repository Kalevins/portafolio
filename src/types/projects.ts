export interface Link {
  url: string;
  show: boolean;
}

export interface Repositories {
  front: Link;
  back: Link;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repositories: Repositories;
  website: Link;
}

export type Projects = Project[];
