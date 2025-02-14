export declare const merge: <T extends object>(target: T, source: {
    [x: string]: T[keyof T];
}) => T;
