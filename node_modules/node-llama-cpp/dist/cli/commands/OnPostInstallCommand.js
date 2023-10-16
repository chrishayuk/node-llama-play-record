import { defaultLlamaCppCudaSupport, defaultLlamaCppGitHubRepo, defaultLlamaCppMetalSupport, defaultLlamaCppRelease, defaultSkipDownload } from "../../config.js";
import { getPrebuildBinPath } from "../../utils/getBin.js";
import { DownloadLlamaCppCommand } from "./DownloadCommand.js";
export const OnPostInstallCommand = {
    command: "postinstall",
    describe: false,
    async handler() {
        if (defaultSkipDownload)
            return;
        if (await getPrebuildBinPath() != null)
            return;
        try {
            await DownloadLlamaCppCommand({
                repo: defaultLlamaCppGitHubRepo,
                release: defaultLlamaCppRelease,
                metal: defaultLlamaCppMetalSupport,
                cuda: defaultLlamaCppCudaSupport
            });
        }
        catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
};
//# sourceMappingURL=OnPostInstallCommand.js.map