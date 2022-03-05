const config = {
    "name": 'dsnode',
    "preset": 'ts-jest',
    "testEnvironment": 'node',
    "transform": {
    '^.+\\.(ts|js|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    }
};
export default config;
