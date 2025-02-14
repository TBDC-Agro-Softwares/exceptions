import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

import CustomError from './CustomError';

/**
 * Custom error with message and status code 415
 */
export class UnsupportedMediaTypeError extends CustomError {
  /**
   * @param {string} mediaType Media type - Ex: `image/jpg`
   * @param {Object} translateOptions Translate parameters
   */
  constructor(mediaType: string, translateOptions: TbdcExceptionTranslateOptions) {
    super(TranslateService.execute('lib.errors.unsupportedMediaType', translateOptions, { mediaType }), 415);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
