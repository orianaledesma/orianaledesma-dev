/**
 * Injects EmailJS keys into src/environments/environment.prod.ts at build time.
 *
 * Reads EMAILJS_SERVICE_ID / EMAILJS_TEMPLATE_ID / EMAILJS_PUBLIC_KEY from the
 * environment (set in Netlify → Site configuration → Environment variables).
 * Replaces the empty-string placeholders in environment.prod.ts.
 *
 * Idempotent and safe: missing vars only warn (local builds don't break).
 * These are client-side keys (already shipped in the browser bundle), not
 * server secrets — env injection keeps them out of git, nothing more.
 *
 * Usage: node scripts/inject-env.mjs   (runs before ng build in prod)
 */
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/environments/environment.prod.ts';
const MAP = {
  serviceId: 'EMAILJS_SERVICE_ID',
  templateId: 'EMAILJS_TEMPLATE_ID',
  publicKey: 'EMAILJS_PUBLIC_KEY',
};

let src = readFileSync(FILE, 'utf8');
let injected = 0;

for (const [key, envName] of Object.entries(MAP)) {
  const value = process.env[envName];
  if (!value) {
    console.warn(`⚠ ${envName} not set — ${key} stays empty`);
    continue;
  }
  // Replace `key: '...'` (empty or any current value) with the env value.
  const re = new RegExp(`(${key}:\\s*')[^']*(')`);
  if (!re.test(src)) {
    console.warn(`⚠ pattern for "${key}" not found in ${FILE}`);
    continue;
  }
  src = src.replace(re, `$1${value}$2`);
  injected++;
}

writeFileSync(FILE, src);
console.log(`✓ inject-env: ${injected}/${Object.keys(MAP).length} EmailJS keys injected`);
