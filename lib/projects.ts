export type Project = {
  slug: string;
  title: string;
  date: string;
  images: string[];
  summary: string;
  goals: string[];
  role: string;
  tools: string[];
};

// Pusta lista – do uzupełnienia przyszłymi realizacjami brukarskimi (DAVIX)
export const projects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
