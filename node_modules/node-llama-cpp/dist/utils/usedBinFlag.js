import fs from "fs-extra";
import { usedBinFlagJsonPath } from "../config.js";
export async function getUsedBinFlag() {
    const usedBinFlagJson = await fs.readJson(usedBinFlagJsonPath);
    return usedBinFlagJson.use;
}
export async function setUsedBinFlag(useFlag) {
    const usedBinFlagJson = {
        use: useFlag
    };
    await fs.writeJson(usedBinFlagJsonPath, usedBinFlagJson, {
        spaces: 4
    });
}
//# sourceMappingURL=usedBinFlag.js.map