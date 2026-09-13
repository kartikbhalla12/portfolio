import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
	...nextVitals,
	{
		rules: {
			'react-hooks/set-state-in-effect': 'warn',
			'react-hooks/refs': 'warn',
		},
	},
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'src/pages-old/**',
	]),
]);
