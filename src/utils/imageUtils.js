export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const isProd = import.meta.env.PROD;
  const baseUrl = isProd ? '/web_beauty_commerce/' : '/';
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};
