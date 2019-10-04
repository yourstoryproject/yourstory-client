module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/js/**/components/**/*.js'],
	coverageThreshold: {
		global: {
			branches: 55,
			functions: 55,
			lines: 65,
			statements: 65,
		},
	},
	globals: {
		yourStoryConstants: {},
	},
	setupFiles: ['<rootDir>/enzyme.config.js'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	timers: 'fake',
	transform: {
		'^.+\\.js?$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/assetsTransformer.js',
		'\\.(css|less)$': '<rootDir>/assetsTransformer.js',
	},
};
