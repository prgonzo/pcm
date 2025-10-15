import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/translations/en';
import { es } from '@/translations/es';

// Type for translation keys
export type TranslationKey = keyof typeof en | 'givingSection.title' | 'givingSection.content' | 'givingSection.button';

// Translations record
const translations = {
  en,
  es
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  // Translation function
  const t = (key: TranslationKey): string => {
    // Get the current language translations
    const currentTranslation = translations[language];
    
    // Handle nested keys
    if (key.includes('.')) {
      const [section, field] = key.split('.');
      if (currentTranslation && currentTranslation[section] && currentTranslation[section][field]) {
        return currentTranslation[section][field];
      }
      if (en[section] && en[section][field]) {
        return en[section][field];
      }
    }
    
    // If the key exists in current language, return it
    if (currentTranslation && currentTranslation[key]) {
      return currentTranslation[key];
    }
    
    // Fallback to English
    if (en[key]) {
      return en[key];
    }
    
    // If all else fails, return the key itself
    console.warn(`Translation key "${key}" is missing`);
    return key;
  };
  
  return { t, language };
};
