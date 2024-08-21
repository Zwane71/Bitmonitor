// craco.config.js
const path = require("path");

module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.resolve.fallback = {
				buffer: require.resolve("buffer/"),
			};

			return webpackConfig;
		},
	},
};
