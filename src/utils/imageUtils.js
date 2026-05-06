// Unique Build Tag: 2026-05-06-1140
export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Runtime detection for GitHub Pages vs Custom Domain
  const isGithubSubdir = window.location.hostname.includes('github.io') && window.location.pathname.includes('/web_beauty_commerce');
  const prefix = isGithubSubdir ? '/web_beauty_commerce' : '';
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
};
