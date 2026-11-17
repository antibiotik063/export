import type { Language, PageRoute } from './types';

const LANGUAGE_PREFIX: Record<Language, string> = {
  en: '',
  ru: '/ru',
  fa: '/fa-af',
};

export function routePath(language: Language, page: PageRoute): string {
  const prefix = LANGUAGE_PREFIX[language];
  if (page === 'home') return prefix ? `${prefix}/` : '/';
  return `${prefix}/${page}/`;
}

export function routeFromPath(pathname: string): { language: Language; page: PageRoute } {
  const parts = pathname.split('/').filter(Boolean);
  let language: Language = 'en';

  if (parts[0] === 'ru') {
    language = 'ru';
    parts.shift();
  } else if (parts[0] === 'fa-af') {
    language = 'fa';
    parts.shift();
  }

  const page: PageRoute =
    parts[0] === 'products' ? 'products' :
    parts[0] === 'logistics' ? 'logistics' : 'home';

  return { language, page };
}
