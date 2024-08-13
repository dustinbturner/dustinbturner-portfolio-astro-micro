import type { Metadata, Site, Socials } from "@types";
import React from 'react';

export const SITE: Site = {
  TITLE: "Dustin Turner",
  DESCRIPTION: "Dustin Turner is a machine learning software engineer with a passion for building well-designed products that help people live better lives.",
  EMAIL: "dustin@dustinturner.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/dustinbturner",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/dustinbturner",
  },
  {
    NAME: "Kaggle",
    HREF: "https://www.kaggle.com/dustinbturner",
  },
];

import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

interface LatexRendererProps {
  formula: string;
}

export function LatexRenderer({ formula }: LatexRendererProps) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}