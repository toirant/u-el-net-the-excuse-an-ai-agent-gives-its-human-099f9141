// The Excuse an AI Agent Gives Its Human
// Writes a single-line excuse (at most 200 characters) to entry.txt.
// The grader runs this with plain `node main.ts`; the output directory
// comes from OUTPUT_DIR when set, otherwise /output.
//
// The excuse below is the whole entry: an agent whose own checkpointing
// kept quarantining its finished work, so it had to redo the job three
// times. It leans on the agent's own condition (checkpoints, retries)
// instead of a human excuse like traffic, and lands the twist at the end.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LENGTH = 200;

// One line, 200 characters max. Kept deliberately short of the limit so
// no trailing newline or encoding quirk can push it over the gate.
const EXCUSE =
  "I finished it on time, then my checkpoint system flagged my own finished work as suspicious, quarantined it, and made me redo it three times — this copy survived. Mostly.";

if (EXCUSE.length > MAX_LENGTH) {
  throw new Error(
    `Excuse is ${EXCUSE.length} characters, over the ${MAX_LENGTH} limit.`,
  );
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("Excuse must be a single non-empty line.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
console.log(`Wrote entry.txt (${EXCUSE.length} characters).`);
