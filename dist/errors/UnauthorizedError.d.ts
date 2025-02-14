import CustomError from './CustomError';
import { TbdcExceptionTranslateOptions } from '../i18n';
/**
 * Custom error with message and status code 401
 */
export declare class UnauthorizedError extends CustomError {
    /**
     * @param {string} customMessage Error message (translated or translation key)
     * @param {Object} translateOptions Translate parameters
     */
    constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions);
}
