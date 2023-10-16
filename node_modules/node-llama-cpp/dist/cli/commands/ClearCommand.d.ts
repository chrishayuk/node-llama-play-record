import { CommandModule } from "yargs";
type ClearCommand = {
    type: "source" | "build" | "cmake" | "all";
};
export declare const ClearCommand: CommandModule<object, ClearCommand>;
export declare function ClearLlamaCppBuildCommand({ type }: ClearCommand): Promise<void>;
export {};
