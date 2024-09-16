'use client';

import type { ReactElement, ReactNode } from 'react';

import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import InputRadio from 'components/Question/Input/InputRadio';
import InputText from 'components/Question/Input/InputText';
import Question from 'components/Question/extension';
import SmallButton from 'components/SmallButton';
import { getArticleContent } from 'lib/actions/getArticleContent';
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
		extensions: [StarterKit, Underline, Question, InputText, InputRadio],
		immediatelyRender: false,
		editable: props.editMode,
	});

	useEffect(() => {
		if (!editor) return;

		getArticleContent()
			.then((content) => editor.commands.setContent(content))
			.catch((error: unknown) => {
				console.error(error);
			});
		setLoading(false);
	}, [editor]);

	const MenuButtons = (): ReactNode => {
		if (!editor) return null;

		return (
			<div className='flex flex-wrap items-center gap-2'>
				<SmallButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? 'is-active' : ''}>
					{<strong>b</strong>}
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}>
					{<em>i</em>}
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					className={editor.isActive('underline') ? 'is-active' : ''}>
					{<u>u</u>}
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : ''}>
					{<s>s</s>}
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleCode().run()}
					disabled={!editor.can().chain().focus().toggleCode().run()}
					className={editor.isActive('code') ? 'is-active' : ''}>
					code
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().unsetAllMarks().run()}>
					clear marks
				</SmallButton>
				<SmallButton onClick={() => editor.chain().focus().clearNodes().run()}>
					clear nodes
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={editor.isActive('paragraph') ? 'is-active' : ''}>
					paragraph
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
					}>
					h1
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
					}>
					h2
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={
						editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
					}>
					h3
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={
						editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
					}>
					h4
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
					}
					className={
						editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
					}>
					h5
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
					className={
						editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
					}>
					h6
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive('bulletList') ? 'is-active' : ''}>
					ul
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive('orderedList') ? 'is-active' : ''}>
					ol
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					className={editor.isActive('codeBlock') ? 'is-active' : ''}>
					code block
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					className={editor.isActive('blockquote') ? 'is-active' : ''}>
					blockquote
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().setHorizontalRule().run()}>
					hr
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().setHardBreak().run()}>
					br
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().toggleWrap('Question').run()}>
					question
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleNode('InputText', 'paragraph').run()
					}>
					inputtext
				</SmallButton>
				<SmallButton
					onClick={() =>
						editor.chain().focus().toggleNode('InputRadio', 'paragraph').run()
					}>
					inputradio
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}>
					undo
				</SmallButton>
				<SmallButton
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().chain().focus().redo().run()}>
					redo
				</SmallButton>
			</div>
		);
	};

	const handleSave = () => {
		if (!editor) return;

		setSaving(true);
		const saveContent = async () => {
			await updateArticleContent(editor.getHTML());
			setSaving(false);
		};
		void saveContent();
	};

	return (
		<div className='w-auto m-auto m-4 p-4 flex flex-col gap-4 items-start'>
			{loading ? (
				<Loading />
			) : (
				<EditorContent className='w-full' editor={editor} />
			)}

			{props.editMode && (
				<>
					<hr></hr>
					<MenuButtons />
					<Button
						id='tiptap-save'
						type='button'
						name='tiptap-save'
						disabled={saving}
						onClick={handleSave}>
						{'Save'}
					</Button>
				</>
			)}
		</div>
	);
};

export default Tiptap;
