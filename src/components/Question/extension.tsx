import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import QuestionComponent from '.';

const Question = Node.create({
	name: 'Question',

	group: 'block',

	content: '(block | input)*',

	parseHTML() {
		return [
			{
				tag: 'question',
			},
		];
	},

	renderHTML({ HTMLAttributes }) {
		return ['question', mergeAttributes(HTMLAttributes), 0];
	},

	addNodeView() {
		return ReactNodeViewRenderer(QuestionComponent);
	},
});

export default Question;
