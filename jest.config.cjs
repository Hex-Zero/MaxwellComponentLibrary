/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^storybook/(.*)$': '<rootDir>/test/__mocks__/storybook/$1.ts',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
};
