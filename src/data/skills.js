export const skillCategories = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Prisma'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Webpack'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Vercel', 'Netlify', 'Heroku', 'DigitalOcean', 'CI/CD'],
  },
]

// Flat list for the marquee
export const allSkills = skillCategories.flatMap((cat) => cat.items)

export const coreSkills = [
  'React', 'Node.js', 'TypeScript', 'MongoDB',
  'TailwindCSS', 'Docker', 'AWS', 'Git',
]
