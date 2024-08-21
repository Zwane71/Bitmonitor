// postcss.config.js
module.exports = {
	plugins: [
		require("postcss-preset-env")({
			stage: 3,
			features: {
				"custom-properties": false,
			},
		}),
		require("autoprefixer"),
		// Add other PostCSS plugins if needed
	],
};
