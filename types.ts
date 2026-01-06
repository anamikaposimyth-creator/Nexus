
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
