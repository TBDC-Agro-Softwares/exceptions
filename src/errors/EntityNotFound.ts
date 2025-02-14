import { TbdcExceptionTranslateOptions, TranslateService } from '../i18n';

import CustomError from './CustomError';

/**
 * Custom error with generated message and status code 404
 */
export class EntityNotFound extends CustomError {
  /**
   * @param {string} entityName Receive entity name (translated or translation key)
   * @param {string|number} id Receive entity identifier (Id or IdSync)
   * @param {Object} translateOptions Translate parameters
   */
  constructor(entityName: string, id: string | number, translateOptions: TbdcExceptionTranslateOptions) {
    const message = TranslateService.execute('lib.errors.entityNotFound', translateOptions, {
      entityName: TranslateService.execute(entityName, translateOptions),
      identityType: typeof id === 'number' ? 'Id' : 'IdSync',
      identityNumber: String(id),
    });
    super(message, 404);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
