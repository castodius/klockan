import type { Config } from 'jest';

const config: Config = {
  coverageProvider: "v8",
  transform: {
    '^.+\\.[tj]sx?$': [
      'esbuild-jest',
      {
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: [
    '.ts',
  ],
};

export default config;
