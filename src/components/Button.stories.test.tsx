/* eslint-disable import/order */
import type { Meta, StoryObj } from '@storybook/react';
import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Button.stories';

// Compose the Primary story
const meta = stories.default as Meta;
const PrimaryStory = composeStory(stories.Primary as StoryObj, meta);

test('Primary Button story renders with correct text', () => {
  render(<PrimaryStory />);
  expect(screen.getByRole('button', { name: /primary button/i })).toBeInTheDocument();
});
