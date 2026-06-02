import i18n, { defaultLanguage, supportedLanguages } from './index';

describe('i18n', () => {
  test('defines supported languages and fallback language', () => {
    expect(defaultLanguage).toBe('en');
    expect(supportedLanguages).toEqual(['en', 'es']);
  });

  test('resolves template translations from bundled resources', () => {
    expect(i18n.t('home.title', { lng: 'en' })).toBe('Eureka!');
    expect(i18n.t('home.title', { lng: 'es' })).toBe('Eureka!');
  });
});
