import { TbdcExceptionTranslateOptions } from '../i18n';
import CustomError from './CustomError';
/**
 * Custom error with message and status code 415
 */
export declare class UnsupportedMediaTypeError extends CustomError {
    /**
     * @param {string} mediaType Media type - Ex: `image/jpg`
     * @param {Object} translateOptions Translate parameters
     */
    constructor(mediaType: string, translateOptions: TbdcExceptionTranslateOptions);
}
