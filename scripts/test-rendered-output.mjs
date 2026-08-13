import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const yatraOutput = await readFile('dist/articles/yatra-mesh/index.html', 'utf8');
const articlesOutput = await readFile('dist/articles/index.html', 'utf8');

assert.match(
  yatraOutput,
  /<span class="label border border-stroke"[^>]*>Mesh Networks<\/span>/,
  'Yatra-Mesh should preserve its legacy published header tag label',
);
assert.doesNotMatch(
  yatraOutput,
  /<span class="label border border-stroke"[^>]*>Mesh Network<\/span>/,
  'Yatra-Mesh header should not replace the legacy label with its canonical tag',
);
assert.match(
  articlesOutput,
  /aria-label="View articles tagged Mesh Network">\s*Mesh Network\s*<\/a>/,
  'article listing should render the canonical tags array value',
);

console.log('Rendered output regression passed: Yatra-Mesh preserves Mesh Networks and listing uses Mesh Network.');
