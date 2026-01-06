
import React from 'react';
import { Service, CaseStudy, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    description: 'Transforming legacy business models into agile digital powerhouses.',
    fullDescription: 'We help organizations navigate the complex landscape of digital evolution by creating actionable roadmaps that align technology with business objectives.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: ['Market Analysis', 'Tech Stack Optimization', 'ROI Forecasting', 'Change Management']
  },
  {
    id: 'ai-transformation',
    title: 'AI & Data Insights',
    description: 'Leveraging data-driven intelligence to automate and optimize operations.',
    fullDescription: 'Unlock the power of your data. Our AI specialists build bespoke machine learning models that provide predictive insights and operational efficiency.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: ['Predictive Analytics', 'LLM Integration', 'Data Warehousing', 'Visual Intelligence']
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'Scalable cloud-native solutions designed for high performance.',
    fullDescription: 'From MVP to enterprise scale, we design and build robust software products using the latest cloud technologies and modern architecture.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    features: ['Cloud-Native Dev', 'Microservices', 'UI/UX Design', 'DevOps & CI/CD']
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Modernizing infrastructure for maximum reliability and security.',
    fullDescription: 'Migrate and optimize your cloud presence. We specialize in AWS, Azure, and GCP migrations that reduce costs and increase security posture.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    features: ['Multi-Cloud Strategy', 'Security Audits', 'Auto-scaling', 'Cost Management']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-modernization',
    client: 'Global Finance Corp',
    industry: 'FinTech',
    title: 'Legacy Core Modernization',
    challenge: 'An outdated mainframe system was throttling innovation and causing frequent downtime for 12 million users.',
    solution: 'We implemented a microservices-based architecture on AWS, using event-driven patterns to ensure high availability.',
    result: '99.99% uptime achieved, with a 40% reduction in infrastructure costs and 3x faster release cycles.',
    imageUrl: 'https://picsum.photos/seed/fintech/800/600',
    tags: ['AWS', 'Microservices', 'Modernization']
  },
  {
    id: 'retail-ai',
    client: 'Lumina Retail',
    industry: 'Retail',
    title: 'AI Personalization Engine',
    challenge: 'Generic marketing resulted in low conversion rates and high customer churn.',
    solution: 'Engineered a real-time recommendation engine powered by Gemini Flash for hyper-personalized shopping experiences.',
    result: '25% increase in average order value and a 15% boost in customer retention within 6 months.',
    imageUrl: 'https://picsum.photos/seed/retail/800/600',
    tags: ['AI', 'Data', 'Personalization']
  },
  {
    id: 'health-data',
    client: 'WellCare Systems',
    industry: 'Healthcare',
    title: 'Interoperable Data Platform',
    challenge: 'Siloed patient data across 15 different clinics led to inefficiencies and care delays.',
    solution: 'Built a HIPAA-compliant unified data lake with real-time FHIR-based interoperability.',
    result: 'Reduced patient intake time by 60% and improved diagnostic accuracy via centralized medical history.',
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    tags: ['Healthcare', 'Security', 'Compliance']
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Former Fortune 500 CTO with 20 years of experience in digital transformation.',
    imageUrl: 'https://picsum.photos/seed/sarah/400/400'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Engineering',
    bio: 'Open source contributor and cloud architecture expert.',
    imageUrl: 'https://picsum.photos/seed/marcus/400/400'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of AI',
    bio: 'PhD in Computer Science with a focus on generative AI and neural networks.',
    imageUrl: 'https://picsum.photos/seed/elena/400/400'
  }
];
