import { SVGProps } from "react";

export interface Technology {
  name: string;
  url: string;
  icon: (props: SVGProps<SVGSVGElement> | undefined) => JSX.Element;
}

export interface Technologies {
  [key: string]: Technology;
}