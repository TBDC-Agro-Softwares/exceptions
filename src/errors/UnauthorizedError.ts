import CustomError from './CustomError';

import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

/**
 * Custom error with message and status code 401
 */
export class UnauthorizedError extends CustomError {
  /**
   * @param {string} customMessage Error message (translated or translation key)
   * @param {Object} translateOptions Translate parameters
   */
  constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions) {
    super(TranslateService.execute(customMessage, { language }, options), 401);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
