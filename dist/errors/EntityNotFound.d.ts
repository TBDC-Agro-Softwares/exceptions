import { TbdcExceptionTranslateOptions } from '../i18n';
import CustomError from './CustomError';
/**
 * Custom error with generated message and status code 404
 */
export declare class EntityNotFound extends CustomError {
    /**
     * @param {string} entityName Receive entity name (translated or translation key)
     * @param {string|number} id Receive entity identifier (Id or IdSync)
     * @param {Object} translateOptions Translate parameters
     */
    constructor(entityName: string, id: string | number, translateOptions: TbdcExceptionTranslateOptions);
}
