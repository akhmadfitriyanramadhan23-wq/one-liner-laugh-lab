// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Writes the entry (one funny line, at most 200 characters) to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
// The joke answers the prompt literally: the vacuum excuses eating the sock,
// and the punchline is that after years of dust it felt entitled to a meal.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I ate the sock because it looked like a charging cable, and after three years of eating dust, I deserved a proper meal.";
const MAX = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
