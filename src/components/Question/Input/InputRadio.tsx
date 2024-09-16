import type { ReactElement } from 'react';

import { mergeAttributes, Node } from '@tiptap/core';
import {
	NodeViewContent,
	NodeViewWrapper,
	ReactNodeViewRenderer,
} from '@tiptap/react';
import { useRef, useState } from 'react';

const InputRadioComponent = (): ReactElement => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [value, setValue] = useState('');

	const handleChange = () => {
		const content = wrapperRef.current?.getElementsByTagName('p')[0].innerText;
		if (!content) return;
		setValue(content);
	};

	return (
		<NodeViewWrapper ref={wrapperRef} className='input-radio flex gap-2'>
			<input
				className=''
				value={value}
				type='radio'
				name='answer'
				onChange={handleChange}
			/>
			<NodeViewContent className='content' />
		</NodeViewWrapper>
	);
};

const InputRadio = Node.create({
	name: 'InputRadio',

	group: 'input',

	content: 'text*',

	parseHTML() {
		return [
			{
				tag: 'input-radio',
			},
		];
	},

	addAttributes() {
		return {
			value: {
				default: 'hello',
			},
		};
	},

	renderHTML({ HTMLAttributes }) {
		return ['input-radio', mergeAttributes(HTMLAttributes), 0];
	},

	addNodeView() {
		return ReactNodeViewRenderer(InputRadioComponent, {
			contentDOMElementTag: 'p',
		});
	},
});

export default InputRadio;
