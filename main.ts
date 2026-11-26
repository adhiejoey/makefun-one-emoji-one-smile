import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const picked = "🤗";

function entryIsSingleEmoji(text: string): boolean {
  const points = [...text];
  if (points.length !== 1) return false;
  const code = points[0].codePointAt(0) ?? 0;
  return code > 0x1f000;
}

const folder = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() || "/output";
mkdirSync(folder, { recursive: true });

if (!entryIsSingleEmoji(picked)) {
  throw new Error("chosen entry is not exactly one emoji");
}

const target = join(folder, "entry.txt");
writeFileSync(target, picked, "utf8");

// Read the file back and confirm what landed on disk is still one emoji.
import { readFileSync } from "node:fs";
const written = readFileSync(target, "utf8");
if (!entryIsSingleEmoji(written) || written !== picked) {
  throw new Error("written entry failed its own single-emoji check");
}
