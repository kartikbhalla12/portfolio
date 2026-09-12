import localFont from 'next/font/local';

const ceraPro = localFont({
	src: [
		{
			path: '../../public/fonts/cerapro-light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/cerapro-regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/cerapro-medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/cerapro-bold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/cerapro-black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-cera-pro',
	display: 'swap',
});

export default ceraPro;
