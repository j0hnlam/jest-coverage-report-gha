module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.md$': '<rootDir>/fileTransformer.js',
    },
    testMatch: ['**/*.(test|spec).ts'],
    collectCoverageFrom: ['src/**/{!(index.ts),}.ts'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    // If you need custom ts-jest config, use a separate "ts-jest.config.js" file or top-level "globals" is no longer recommended.
};
