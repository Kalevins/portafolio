export interface Project {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  repositories: Repositories;
  url: string;
}

export interface Repositories {
  front: string;
  back: string;
}
