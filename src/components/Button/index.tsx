import type { MouseEventHandler, ReactElement, ReactNode } from 'react';

type ButtonProps = Readonly<{
	id: string;
	type?: 'submit' | 'button' | 'reset';
	name: string;
	disabled?: boolean;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}>;

const Button = (props: ButtonProps): ReactElement => {
	const backgroundStyle =
		'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 disabled:bg-violet-300';

	return (
		<button
			id={props.id}
			type={props.type ?? 'button'}
			name={props.name}
			disabled={props.disabled}
			className={`py-2 px-4 ${backgroundStyle} text-base font-bold text-neutral-100 rounded-md ${props.className}`}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
