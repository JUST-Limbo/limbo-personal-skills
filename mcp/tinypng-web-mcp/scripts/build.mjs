import * as esbuild from "esbuild";
import { mkdir } from "node:fs/promises";

const banner = { js: "#!/usr/bin/env node" };

await mkdir("dist", { recursive: true });

const shared = {
  bundle: true,
  platform: "node",
  target: "node18",
  format: "cjs",
  banner: banner,
  logLevel: "info",
};

await esbuild.build({
  ...shared,
  entryPoints: ["src/mcp.js"],
  outfile: "dist/tinypng-web-mcp.cjs",
});

await esbuild.build({
  ...shared,
  entryPoints: ["bin/cli.js"],
  outfile: "dist/tinypng-web-mcp-cli.cjs",
});

console.log("built dist/tinypng-web-mcp.cjs, dist/tinypng-web-mcp-cli.cjs");
