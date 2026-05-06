// Unique Build Tag: 2026-05-06-1140
export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Runtime detection for GitHub Pages
  const isGithubPages = window.location.hostname.includes('github.io');
  const prefix = isGithubPages ? '/web_beauty_commerce' : '';
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
};
