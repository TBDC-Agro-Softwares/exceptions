import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

import CustomError from './CustomError';

/**
 * Custom error with message and status code 403
 */
export class ForbiddenError extends CustomError {
  /**
   * @param {string} customMessage Error message (translated or translation key)
   * @param {Object} translateOptions Translate parameters
   */
  constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions) {
    super(TranslateService.execute(customMessage, { language }, options), 403);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
