import i18next, { i18n, InitOptions } from 'i18next';
import translations, { TbdcExceptionTranslateOptions } from './translations';

export default abstract class TranslateService {
  protected static _i18n: i18n;

  static async init(options?: InitOptions) {
    this._i18n = i18next.createInstance();

    await this._i18n.init({
      lng: 'en-US',
      fallbackLng: 'en-US',
      debug: false,
      supportedLngs: ['en-US', 'en', 'pt-BR', 'pt', 'es-ES', 'es'],
      backend: true,
      load: 'languageOnly',
      ...options,
      resources: translations,
    });
  }

  public static execute(key: string, { language }: TbdcExceptionTranslateOptions, options?: Record<string, string>) {
    const translateFunction = this._i18n.getFixedT(language);
    return translateFunction(key, options);
  }
}
