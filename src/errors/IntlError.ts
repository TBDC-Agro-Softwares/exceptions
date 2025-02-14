import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

import CustomError from './CustomError';

/**
 * Custom error with message and status code 500
 */
export class IntlError extends CustomError {
  /**
   * @param {string} customMessage Error message (translated or translation key)
   * @param {Object} translateOptions Translate parameters
   */
  constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions, status: number = 500) {
    super(TranslateService.execute(customMessage, { language }, options), status);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
