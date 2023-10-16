export declare function withLock<ReturnType>(scope: any, key: string, callback: () => Promise<ReturnType>): Promise<ReturnType>;
