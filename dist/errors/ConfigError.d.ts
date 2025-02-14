import CustomError from './CustomError';
/**
 * Custom error with message and status code 500
 */
export declare class ConfigError extends CustomError {
    /**
     * @param {string} message Error message **[translated only]**
     */
    constructor(message: string);
}
