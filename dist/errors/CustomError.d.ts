/**
 * Custom error with custom message and custom status code
 */
export declare class CustomError extends Error {
    readonly httpStatus: number;
    /**
     * @param {string} message Error message **[translated only]**
     * @param {number} httpStatus Http status
     */
    constructor(message: string, httpStatus: number);
}
export default CustomError;
