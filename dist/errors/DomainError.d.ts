import { TbdcExceptionTranslateOptions } from '../i18n';
import CustomError from './CustomError';
/**
 * Custom error with message and status code 400
 */
export declare class DomainError extends CustomError {
    /**
     * @param {string} customMessage Error message (translated or translation key)
     * @param {Object} translateOptions Translate parameters
     * @param {number} status Custom status | Default: `400`
     */
    constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions, status?: number);
}
