module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/js/**/components/**/*.js',
	],
	coverageThreshold: {
		global: {
			branches: 55,
			functions: 55,
			lines: 65,
			statements: 65
		}
	},
	globals: {
    yourStoryConstants: {},
  },
	setupFiles: ['<rootDir>/enzyme.config.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	timers: 'fake',
	transform: {
		'^.+\\.js?$': 'babel-jest'
	}
}
