/**
 * Technology icon URLs using Simple Icons via jsDelivr CDN.
 * These are official SVG logos served from a reliable CDN.
 */

export const techIconMap: Record<string, { icon: string; color: string }> = {
  // Languages
  'Java': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#007396' },
  'Python': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
  'JavaScript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  'TypeScript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
  'C': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', color: '#A8B9CC' },
  'SQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#CC2927' },

  // Frontend
  'React': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
  'HTML5': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
  'CSS3': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#1572B6' },
  'Tailwind': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
  'Bootstrap': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },

  // Backend
  'Node.js': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
  'Express.js': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', color: '#000000' },
  'Flask': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', color: '#000000' },
  'FastAPI': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: '#009688' },
  'REST APIs': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg', color: '#6BA539' },

  // Databases
  'MongoDB': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  'MySQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
  'Oracle SQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', color: '#F80000' },

  // Tools
  'Git': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },
  'GitHub': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#181717' },
  'Postman': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', color: '#FF6C37' },
  'VS Code': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: '#007ACC' },
  'GitHub Copilot': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#000000' },
};

/**
 * Get the icon URL for a technology name.
 * Falls back to undefined if not found.
 */
export function getTechIcon(name: string): string | undefined {
  return techIconMap[name]?.icon;
}
