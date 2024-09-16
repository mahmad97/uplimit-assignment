import type { ReactElement } from 'react';

import Switch from 'components/Switch';

type TopbarProps = Readonly<{
	editMode: boolean;
	setEditMode: (arg0: boolean) => void;
}>;

const Topbar = (props: TopbarProps): ReactElement => {
	return (
		<div className='sticky top-0 w-full border-b border-slate-300 backdrop-blur z-10'>
			<div className='max-w-screen-xl p-4 mx-auto flex justify-between'>
				<h1>Uplimit Assignment</h1>

				<Switch
					id='editModeSwitch'
					label='Edit mode'
					checked={props.editMode}
					onChange={() => {
						props.setEditMode(!props.editMode);
					}}
				/>
			</div>
		</div>
	);
};

export default Topbar;
