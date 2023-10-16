export declare function compileLlamaCpp({ arch, nodeTarget, setUsedBinFlag: setUsedBinFlagArg, metal, cuda }: {
    arch?: string;
    nodeTarget?: string;
    setUsedBinFlag?: boolean;
    metal?: boolean;
    cuda?: boolean;
}): Promise<void>;
export declare function getCompiledLlamaCppBinaryPath(): Promise<string | null>;
