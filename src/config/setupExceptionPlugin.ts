import { TranslateService } from 'src/i18n';
import { merge } from './helpers';

export type TbdcExceptionConfig = {
  debugTranslate: boolean;
  isBackend: boolean;
};

let config: TbdcExceptionConfig = {
  debugTranslate: false,
  isBackend: false,
};

export function configureTbdcException(options: Partial<TbdcExceptionConfig>): void {
  config = merge<TbdcExceptionConfig>(config, options);
  TranslateService.init();
}

export function getConfig(): TbdcExceptionConfig {
  return config;
}
