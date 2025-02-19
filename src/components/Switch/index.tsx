import type { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import React from 'react';

type SwitchProps = Readonly<{
	id: string;
	name?: string;
	label?: ReactNode;
	disabled?: boolean;
	className?: string;
	checked?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}>;

const Switch = (props: SwitchProps): ReactElement => {
	const backgroundStyles = `before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]`;
	const foregroundStyles = `after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-violet-500 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-['']`;

	return (
		<div>
			{props.label && (
				<label
					className='inline-block pr-1 hover:cursor-pointer'
					htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<input
				id={props.id}
				name={props.name}
				disabled={props.disabled}
				className={`ml-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 ${backgroundStyles} ${foregroundStyles} checked:bg-violet-600 hover:cursor-pointer focus:outline-none focus:ring-0 checked:focus:border-violet-500 checked:focus:bg-violet-500 ${
					props.className ?? ''
				}`}
				type='checkbox'
				checked={props.checked}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default Switch;
