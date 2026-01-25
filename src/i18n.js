import i18next from 'i18next';

import enTranslations from './locales/en.json';
import jaTranslations from './locales/ja.json';

export const setupI18n = async () => {
  const userLanguage = await getUserLanguage();

  await i18next.init({
    lng: userLanguage,
    fallbackLng: 'en',
    resources: {
      en: { translation: enTranslations },
      ja: { translation: jaTranslations },
    },
  });

  return i18next;
};

const getUserLanguage = async () => {
  try {
    const user = await kintone.getLoginUser();
    if (user.language) {
      return user.language;
    }
  } catch (error) {
    console.error('Error getting user language:', error);
  }

  // Fallback to checking the URL if user language is not available
  const url = kintone.api.url('/k/v1/records.json');
  if (url.includes('kintone.com')) {
    return 'en';
  } else if (url.includes('cybozu.com')) {
    return 'ja';
  }
  return 'ja'; // Default fallback
};