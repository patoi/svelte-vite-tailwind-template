/**
 * JavaScript (ESM) - use .eslintrc.cjs when running ESLint in JavaScript packages that specify
 * "type":"module" in their package.json. Note that ESLint does not support ESM configuration at this time.
 */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		mocha: true,
		node: true,
		es2021: true
	},
	rules: {
		'no-shadow': ['error']
	}
}
