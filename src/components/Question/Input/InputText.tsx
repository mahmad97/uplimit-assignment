import type { ReactElement } from 'react';

import { mergeAttributes, Node } from '@tiptap/core';
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';

const InputTextComponent = (): ReactElement => {
	return (
		<NodeViewWrapper className='input-text'>
			<input
				className='mt-2 py-1 px-2 bg-slate-100 outline-none rounded-md border border-slate-400 focus:border-indigo-500'
				type='text'
				name='answer'
			/>
		</NodeViewWrapper>
	);
};

const InputText = Node.create({
	name: 'InputText',

	group: 'input',

	content: 'text*',

	parseHTML() {
		return [
			{
				tag: 'input-text',
			},
		];
	},

	renderHTML({ HTMLAttributes }) {
		return ['input-text', mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(InputTextComponent);
	},
});

export default InputText;
