'use client';

import type { ReactElement } from 'react';

import { useState } from 'react';

import TopBar from 'components/Topbar';

import Tiptap from './TipTap';

const Home = (): ReactElement => {
	const [editMode, setEditMode] = useState(false);

	return (
		<>
			<TopBar editMode={editMode} setEditMode={setEditMode} />
			<Tiptap editMode={editMode} />
		</>
	);
};

export default Home;
