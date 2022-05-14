module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'next',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'generic',
				readonly: 'generic',
			},
		],
		'@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
		// TODO: return this rule but format it better
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// TODO: Dfuck is this rule with functional components
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-param-reassign': 'warn',
		'consistent-return': 'warn',
		'no-console': 'warn',
		// Next
		'@next/next/no-img-element': 'off',
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		// TODO: what
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/label-has-associated-control': 'warn',
		'no-return-await': 'error',
	},
};
