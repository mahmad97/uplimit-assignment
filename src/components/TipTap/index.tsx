'use client';

import type { ReactElement } from 'react';

import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEditor, EditorContent } from '@tiptap/react';
import { useEffect, useState } from 'react';

import { getArticleContent } from 'lib/actions/getArticleContent';
import Button from 'components/Button';
import { updateArticleContent } from 'lib/actions/updateArticleContent';

import './TipTap.css';

type TiptapProps = Readonly<{
	editMode: boolean;
}>;

const Loading = (): ReactElement => {
	return <h2>Loading content...</h2>;
};

const Tiptap = (props: TiptapProps): ReactElement => {
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const editor = useEditor({
		extensions: [Document, Paragraph, Text],
		immediatelyRender: false,
		editable: props.editMode,
	});

	useEffect(() => {
		if (!editor) return;

		getArticleContent().then((content) => editor.commands.setContent(content));
		setLoading(false);
	}, [editor]);

	const tiptapBorderStyle =
		'border border-slate-300 has-[:focus]:border-violet-500 rounded-md';

	const handleSave = async () => {
		if (!editor) return;

		setSaving(true);
		await updateArticleContent(editor.getText());
		setSaving(false);
	};

	return (
		<div className='w-auto m-auto my-4 p-4 flex flex-col gap-4 items-start'>
			{props.editMode && (
				<div>
					<Button id='menu-buttons' type='button' name='menu-buttons'>
						{'Menu Buttons'}
					</Button>
				</div>
			)}

			{loading ? (
				<Loading />
			) : (
				<EditorContent
					className={`w-full ${props.editMode && tiptapBorderStyle}`}
					editor={editor}
				/>
			)}

			{props.editMode && (
				<Button
					id='tiptap-save'
					type='button'
					name='tiptap-save'
					disabled={saving}
					onClick={handleSave}>
					{'Save'}
				</Button>
			)}
		</div>
	);
};

export default Tiptap;
