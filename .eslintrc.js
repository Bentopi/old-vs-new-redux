module.exports = {
	env: {
		browser: true,
		es2021: true,
		"jest/globals": true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:jest/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier", "jsx-a11y", "jest"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-use-before-define": ["error"],
		"jsx-a11y/no-onchange": "off",
		"react/react-in-jsx-scope": "off",
		"jest/expect-expect": [
			"error",
			{
				assertFunctionNames: ["expect", "expectOptionsToBeRendered"],
			},
		],
	},
};
