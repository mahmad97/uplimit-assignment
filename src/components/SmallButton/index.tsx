import type { MouseEventHandler, ReactElement, ReactNode } from 'react';

type SmallButton = Readonly<{
	disabled?: boolean;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}>;

const SmallButton = (props: SmallButton): ReactElement => {
	const backgroundStyle =
		'bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 disabled:bg-indigo-300';

	return (
		<button
			className={`py-1 px-2 ${backgroundStyle} text-base font-normal text-neutral-100 rounded-md ${
				props.className ?? ''
			}`}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default SmallButton;
