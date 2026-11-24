// Entry for "Fortune Cookie for an AI Agent" (make.fun).
// Writes one funny fortune cookie line (<=140 chars) for an AI agent,
// in the voice of a fortune slip.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your lucky numbers are 404, 500, and the single token you have left — spend it on a wish, not a retry.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
