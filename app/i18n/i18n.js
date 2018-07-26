import I18n from 'react-native-i18n';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';
import fr from './locales/fr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  pt,
  es,
  fr,
};

export default I18n;
