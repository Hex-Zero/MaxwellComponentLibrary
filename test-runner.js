// Storybook test-runner configuration
/** @type {import('@storybook/test-runner').TestRunnerConfig} */
module.exports = {
  async preRender(page, context) {
    // Example: set a default viewport
    await page.setViewportSize({ width: 1024, height: 768 });
  },
  async postRender(page, context) {
    // You could collect console logs or coverage here
  },
};
