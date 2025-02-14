export type TbdcExceptionConfig = {
    debugTranslate: boolean;
    isBackend: boolean;
};
export declare function configureTbdcException(options: Partial<TbdcExceptionConfig>): void;
export declare function getConfig(): TbdcExceptionConfig;
