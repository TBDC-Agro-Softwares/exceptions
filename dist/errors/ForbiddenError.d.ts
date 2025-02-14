import { TbdcExceptionTranslateOptions } from '../i18n';
import CustomError from './CustomError';
/**
 * Custom error with message and status code 403
 */
export declare class ForbiddenError extends CustomError {
    /**
     * @param {string} customMessage Error message (translated or translation key)
     * @param {Object} translateOptions Translate parameters
     */
    constructor(customMessage: string, { language, ...options }: TbdcExceptionTranslateOptions);
}
