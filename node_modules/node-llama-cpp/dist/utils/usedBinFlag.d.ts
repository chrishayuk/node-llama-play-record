type UsedBinFlagFile = {
    use: "prebuiltBinaries" | "localBuildFromSource";
};
export declare function getUsedBinFlag(): Promise<"prebuiltBinaries" | "localBuildFromSource">;
export declare function setUsedBinFlag(useFlag: UsedBinFlagFile["use"]): Promise<void>;
export {};
