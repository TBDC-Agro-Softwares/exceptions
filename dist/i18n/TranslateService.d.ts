import { i18n, InitOptions } from 'i18next';
import { TbdcExceptionTranslateOptions } from './translations';
export default abstract class TranslateService {
    protected static _i18n: i18n;
    static init(options?: InitOptions): Promise<void>;
    static execute(key: string, { language }: TbdcExceptionTranslateOptions, options?: Record<string, string>): string;
}
