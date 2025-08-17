#!/usr/bin/env node
import { execSync } from 'node:child_process';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  // Ensure git repo
  run('git rev-parse --is-inside-work-tree');
  // Stage Storybook static output and any generated artifacts
  run('git add .');
  // Create commit message with timestamp
  const msg = `chore(build): storybook build output $(powershell -NoProfile -Command "Get-Date -Format o")`;
  try {
    run(`git commit -m "${msg}"`);
  } catch {
    globalThis.console?.log('No changes to commit');
  }
  // Push to origin main
  run('git push origin main');
} catch (err) {
  globalThis.console?.error('Auto push failed:', err && err.message ? err.message : err);
  globalThis.process?.exit(0); // do not fail the build
}
