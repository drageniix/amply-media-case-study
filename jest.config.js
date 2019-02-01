module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(tsx|ts|js)$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['raf/polyfill', '<rootDir>/tests/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer']
};
