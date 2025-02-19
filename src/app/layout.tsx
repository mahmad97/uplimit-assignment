import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';

import { Inter } from 'next/font/google';

import './globals.css';

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

const metadata: Metadata = {
	title: 'Uplimit Assignment',
	description: 'Made by Mohammad Ahmad',
};

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const RootLayout = (props: RootLayoutProps): ReactElement => {
	return (
		<html lang='en' className={inter.variable}>
			<body className='bg-slate-100 min-w-[640px] text-neutral-900'>
				{props.children}
			</body>
		</html>
	);
};

export default RootLayout;
export { metadata };
