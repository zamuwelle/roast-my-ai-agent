const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The joke stays on the agent's meticulous process and ends on its typo.
const entry = 'My agent treats every typo like a subpoena: it preserves the evidence, cites precedent, and still spells the defendant wrong.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), entry, 'utf8');
