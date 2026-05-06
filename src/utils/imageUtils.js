export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Forcing the base path for GitHub Pages
  const baseUrl = '/web_beauty_commerce/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${baseUrl}${cleanPath}`;
};
