import { within } from '@storybook/test';

// Using Storybook test-runner style: exported tests rely on injected 'canvasElement'

export async function testPrimary({ canvasElement }: { canvasElement: HTMLElement }) {
  const canvas = within(canvasElement);
  const primary = await canvas.findByRole('button', { name: /primary/i });
  expect(primary).toBeDefined();
}

export async function testDanger({ canvasElement }: { canvasElement: HTMLElement }) {
  const canvas = within(canvasElement);
  const danger = await canvas.findByRole('button', { name: /danger/i });
  expect(danger).toBeDefined();
}
