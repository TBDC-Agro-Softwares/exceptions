import en from './translations/en';
import es from './translations/es';
import pt from './translations/pt';

export interface TbdcExceptionTranslateOptions {
  language: string;
}

const translations = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  pt: {
    translation: pt,
  },
};

export default translations;
