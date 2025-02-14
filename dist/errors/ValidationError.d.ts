import { TbdcExceptionTranslateOptions } from '../i18n';
import CustomError from './CustomError';
/**
 * Custom error with validation message and status code 400
 */
export declare class ValidationError extends CustomError {
    /**
     * @param {string[]} fields Array of invalid fields
     * @param {Object} translateOptions Translate parameters
     */
    constructor(fields: Array<string | number | symbol>, translateOptions: TbdcExceptionTranslateOptions);
}
