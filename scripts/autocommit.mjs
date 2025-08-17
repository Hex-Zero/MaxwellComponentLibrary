#!/usr/bin/env node
import { execSync } from 'node:child_process';
// no fs needed currently

function run(cmd, opts = {}) {
  const result = execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
  if (result == null) return '';
  return typeof result === 'string' ? result.trim() : result.toString('utf8').trim();
}

try {
  run('git rev-parse --is-inside-work-tree');

  // Determine changed (staged+unstaged) files excluding storybook-static
  const status = run('git status --porcelain');
  if (!status) { globalThis.console?.log('No changes'); globalThis.process?.exit(0); }
  const lines = status.split(/\r?\n/).filter(Boolean);
  const buildOnly = lines.every(l => l.match(/storybook-static\//));
  if (buildOnly) { globalThis.console?.log('Only build artifacts changed; skipping commit'); globalThis.process?.exit(0); }

  run('git add .');
  const postAdd = run('git diff --cached --name-only');
  if (!postAdd) { globalThis.console?.log('No staged changes'); globalThis.process?.exit(0); }
  const msg = `chore(build): storybook build ${new Date().toISOString()}`;
  // For commit & push we don't need captured output; separate execSync without trim handling
  try { execSync(`git commit -m "${msg}"`, { stdio: 'inherit' }); } catch { globalThis.console?.log('Nothing to commit'); }
  try { execSync('git push origin HEAD', { stdio: 'inherit' }); } catch (e) { globalThis.console?.error('Push failed (non-fatal):', e?.message || e); }
} catch (err) {
  globalThis.console?.error('autocommit failed (non-fatal):', err && err.message ? err.message : err);
  globalThis.process?.exit(0);
}
