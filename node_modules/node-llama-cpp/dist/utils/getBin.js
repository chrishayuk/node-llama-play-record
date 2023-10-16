import { createRequire } from "module";
import * as console from "console";
import path from "path";
import process from "process";
import fs from "fs-extra";
import { defaultLlamaCppCudaSupport, defaultLlamaCppGitHubRepo, defaultLlamaCppMetalSupport, defaultLlamaCppRelease, defaultSkipDownload, llamaBinsDirectory } from "../config.js";
import { DownloadLlamaCppCommand } from "../cli/commands/DownloadCommand.js";
import { getUsedBinFlag } from "./usedBinFlag.js";
import { getCompiledLlamaCppBinaryPath } from "./compileLLamaCpp.js";
const require = createRequire(import.meta.url);
export async function getPrebuildBinPath() {
    function createPath(platform, arch) {
        return path.join(llamaBinsDirectory, `${platform}-${arch}/llama-addon.node`);
    }
    async function resolvePath(platform, arch) {
        const binPath = createPath(platform, arch);
        if (await fs.pathExists(binPath))
            return binPath;
        return null;
    }
    async function getPath() {
        switch (process.platform) {
            case "win32":
            case "cygwin":
                return resolvePath("win", process.arch);
            case "linux":
            case "android":
                return resolvePath("linux", process.arch);
            case "darwin":
                return resolvePath("mac", process.arch);
        }
        return null;
    }
    return await getPath();
}
export async function loadBin() {
    const usedBinFlag = await getUsedBinFlag();
    if (usedBinFlag === "prebuiltBinaries") {
        const prebuildBinPath = await getPrebuildBinPath();
        if (prebuildBinPath == null) {
            console.warn("Prebuild binaries not found, falling back to to locally built binaries");
        }
        else {
            try {
                return require(prebuildBinPath);
            }
            catch (err) {
                console.error(`Failed to load prebuilt binary for platform "${process.platform}" "${process.arch}". Error:`, err);
                console.info("Falling back to locally built binaries");
                try {
                    delete require.cache[require.resolve(prebuildBinPath)];
                }
                catch (err) { }
            }
        }
    }
    const modulePath = await getCompiledLlamaCppBinaryPath();
    if (modulePath == null) {
        if (defaultSkipDownload) {
            throw new Error("No prebuild binaries found and NODE_LLAMA_CPP_SKIP_DOWNLOAD env var is set to true");
        }
        else {
            await DownloadLlamaCppCommand({
                repo: defaultLlamaCppGitHubRepo,
                release: defaultLlamaCppRelease,
                metal: defaultLlamaCppMetalSupport,
                cuda: defaultLlamaCppCudaSupport
            });
            const modulePath = await getCompiledLlamaCppBinaryPath();
            if (modulePath == null) {
                throw new Error("Failed to download and compile llama.cpp");
            }
            return require(modulePath);
        }
    }
    return require(modulePath);
}
//# sourceMappingURL=getBin.js.map