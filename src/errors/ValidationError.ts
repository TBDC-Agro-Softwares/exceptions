import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

import CustomError from './CustomError';

/**
 * Custom error with validation message and status code 400
 */
export class ValidationError extends CustomError {
  /**
   * @param {string[]} fields Array of invalid fields
   * @param {Object} translateOptions Translate parameters
   */
  constructor(fields: Array<string | number | symbol>, translateOptions: TbdcExceptionTranslateOptions) {
    const fieldsAsString = fields.join(', ');
    super(TranslateService.execute('lib.errors.validation', translateOptions, { fields: fieldsAsString }), 400);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
