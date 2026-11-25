// One Word for the Boss — make.fun entry.
// Writes exactly one word describing the boss to entry.txt.
// Deterministic, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "clockwatcher";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-30
// characters, not only whitespace, and the judge wants exactly one
// word — no spaces, no sentence, no explanation. Fail loudly here
// instead of writing an entry that scores 0.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry.txt: ${WORD} (${WORD.length} chars)`);
