export interface LangOption {
  code: string;
}

export const NAV_COPY = {
  externalLinks: [
    { label: 'Exploriando ↗', href: 'https://exploriando.page' },
  ],

  languages: [
    { code: 'EN' },
    { code: 'ES' },
    { code: 'PT' },
    { code: 'LT' },
  ] satisfies LangOption[],
};
