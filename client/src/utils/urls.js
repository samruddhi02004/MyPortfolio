export const withBaseUrl = (maybeUrl) => {
  if (!maybeUrl) return maybeUrl;
  const url = String(maybeUrl);
  if (url === "#") return url;
  if (/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(url)) return url;
  if (/^(?:data|blob):/i.test(url)) return url;

  const baseUrl = String(import.meta.env.BASE_URL ?? "/");
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  if (url.startsWith("/")) return `${normalizedBase}${url}`;
  return `${normalizedBase}/${url}`;
};

