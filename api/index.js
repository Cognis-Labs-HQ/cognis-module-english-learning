import path from "node:path";
import { registerConfigurationRoutes } from "./routes/config/index.js";

export async function registerApi(ctx) {
    ctx.registerCapabilityProvider({
        scriptUrl: "/static/modules/study-language-en/tutorials/provider.js",
        providesCapabilities: ["study-language-en:tutorials"],
    });
    ctx.registerStaticDir("", path.join(ctx.moduleRoot, "ui"));
    return registerConfigurationRoutes(ctx);
}
